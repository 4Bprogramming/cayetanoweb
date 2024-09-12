import NavBar from "@/Components/Navbar/NavBar";
import HomeP from "@/Components/Home/Home";
import Image from "next/image";
import About from "@/Components/About/About";
import Contact from "@/Components/Contacto/Contact";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <>
    <NavBar />
    <br/>
   <HomeP />
   <About />
   <Contact />
   <Footer />
    </>
  );
}
