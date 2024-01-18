import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Blog from "./components/Blog";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About/>
      <Products/>
      <Blog/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
