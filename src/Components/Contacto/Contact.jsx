"use client";
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

function Contact() {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const resData = await response.json();
  
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    };

  return (
    <section
    id="contact"
    className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
  >
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    <div className="z-10 ">
      <h5 className="text-xl font-bold  my-2 ml-2 ">
        Contáctanos
      </h5>
      <p className=" mb-4 max-w-md text-justify ml-2 ">
        {" "}
        Creemos en la magia de los momentos cotidianos y en el poder de la atención al detalle. Cada palabra y cada encuentro se convierten en un testimonio de nuestro compromiso con la excelencia.
      </p>
      <div className="socials flex flex-row gap-2">
        {/* <Link href="github.com">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="linkedin.com">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link> */}
      </div>
    </div>
    <div>
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">
          ¡Enviado correctamente!
        </p>
      ) : (
        <form className=" bg-[#081F2D] flex flex-col border-double border-4 border-second " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" block mb-2 text-sm font-medium"
            >
              Correo
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="sucorreo@sudominio.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className=" block text-sm mb-2 font-medium"
            >
              Nombre
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Nombre..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className=" block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Escribe algo...."
            />
          </div>
          <button
            type="submit"
            className="bg-second hover:bg-primary-600  font-medium py-2.5 px-5 rounded-lg w-full "
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  </section>
  )
}

export default Contact