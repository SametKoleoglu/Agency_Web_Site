import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laudantium.",
      image: "/src/assets/img_1.jpg",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laudantium.",
      image: "/src/assets/img_2.jpg",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laudantium.",
      image: "/src/assets/img_3.jpg",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 ">
          Caring is the new marketing
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores
          quibusdam fugiat esse eius sunt perferendis nemo, accusamus minus
          quasi repellendus quod, consequatur est ducimus rerum sequi quaerat
          voluptatum tenetur.
        </p>
      </div>
      <br />

      {/* {all blogs} */}

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between ">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={blog.image} width={250} height={250} />
            <div>
              <h3>{blog.title}</h3>
              <div className="flex items-center gap-10">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutral-700 "
                >
                  Read More{" "}
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width={15}
                    height={10}
                    viewBox="0 0 15 10"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path d="" stroke="#4CAF4F" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
