import Header from '../components/products/en/navbar'
import About from "../components/products/en/about";
import Products from "../components/products/en/products";
import Contact from "../components/products/en/contact";
import Footer from "../components/products/en/footer";
import ProductHead from '../components/products/en/head';

import Main from '../components/products/en/main';
import Services from '../components/products/en/services';
import Process from '../components/products/en/process';
import ContactUs from '../components/products/en/contact-us';
import Coments from '../components/products/en/coments';


export default function OTC() {
  return (
   <>
    <ProductHead />  
    <Header />
    <Main />
    <Services />
    <About /> 
    <Process />
    <ContactUs />
    <Coments />

    {/* <Products /> 
    <Contact />
    <Footer />  */}
   </>
  )
}