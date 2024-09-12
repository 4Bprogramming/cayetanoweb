import React from "react";
import Image from "next/image";
import nuestroEstudio from '../../assets/6.png'

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
          <p className="text-grey-1 text-justify">
            En nuestro estudio de arquitectura, entendemos que la verdadera
            esencia de los espacios proviene de las personas que los habitan.
          </p>
          <p className="text-grey-1 text-justify">
            Trabajamos en conjunto con nuestros clientes cada fase del proyecto,
            nos esforzamos por captar y materializar los sueños, emociones y
            aspiraciones, proporcionando soluciones innovadoras y adaptadas a
            sus necesidades.
          </p>
          <p className="text-grey-1 text-justify">
            Priorizamos la arquitectura sustentable, integrando prácticas
            ecológicas que minimizan el impacto ambiental y promueven el
            bienestar a largo plazo.
          </p>
          <p className="text-grey-1 text-justify">
            Utilizamos materiales sostenibles, sistemas energéticamente
            eficientes y pautas de diseño bioclimático para asegurar que cada
            proyecto no solo sea funcional, sino también responsable con el
            medio ambiente y el entorno inmediato.
          </p>
         
        </nuestro-estudio-right>
      </article>
    </section>
    </>
  );
}

export default About;
