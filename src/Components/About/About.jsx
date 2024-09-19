import React from "react";
import Image from "next/image";
import nuestroEstudio from "../../assets/6.png";

function About() {
  return (
    <>
      <section id="nosotros">
        <article className="grid grid-cols-1  md:grid-cols-2 md:mb-14 md:mt-8 md:mr-32">
          <nuestro-estudio-left class="block p-2 md:p-6">
            <Image src={nuestroEstudio} alt="nuestro estudio" />
          </nuestro-estudio-left>
          <nuestro-estudio-right class="block relative p-2 md:p-6">
            <h3 className="text-3xl font-semibold uppercase mb-2">
              Nosot
              <span className=" text-grey-2 after:content-[''] after:absolute after:bg-second after:h-1 after:w-16 after:top-10 after:left-2 md:after:top-[60px] md:after:left-[26px]">
                ros
              </span>
            </h3>
            <br />
            <p className="text-grey-1 text-justify">
              Queremos constituirnos en un medio confiable para nuestros
              clientes, con capacidad para responder a anhelos, cubriendo
              diferentes necesidades de financiamientos.
            </p>
            <br />
            <p className="text-grey-1 text-justify">
              Queremos para nuestros comercio un nexo generador de ventas, a
              través de una herramienta financiera ágil y dinámica, con la mejor
              experiencia para nuestros clientes.
            </p>
          </nuestro-estudio-right>
        </article>
      </section>
    </>
  );
}

export default About;
