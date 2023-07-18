import Header from '../../components/products/en/navbar'
import About from "../../components/products/en/about";
import Products from "../../components/products/en/products";
import Contact from "../../components/products/en/contact";
import Footer from "../../components/products/en/footer";
import ProductHead from '../../components/products/en/head';


export default function OurProducts() {
  return (
   <>
    <ProductHead />
    <Header />
    <About />
    <Products />
    <Contact />
    <Footer />
   </>
  )
}