import Header from '../../../components/products/es/navbar'
import About from "../../../components/products/es/about";
import Products from "../../../components/products/es/products";
import Contact from "../../../components/products/es/contact";
import Footer from "../../../components/products/es/footer";
import ProductHeadEs from '../../../components/products/es/head';

export default function OurProducts() {
  return (
   <>
    <ProductHeadEs />
    <Header />
    <About />
    <Products />
    <Contact />
    <Footer />
   </>
  )
}