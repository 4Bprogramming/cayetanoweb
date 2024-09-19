import React from 'react'
import './Home.css'
import Credit from '../Form/Credit'
import ImgHome from './ImgHome'
import EmblaCarousel from '../Carousel/EmblaCarousel'
import '../Carousel/base.css'
import '../Carousel/embla.css'
import '../Carousel/sandbox.css'


const OPTIONS = { axis: 'y', align: 'start' }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Home() {


  return (
    <section className='homeSection'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          <article className="grid grid-cols-1  md:grid-cols-2 md:mb-14 md:mt-8 md:mr-32">
          <div className='leftPlace'>
            <nuestro-estudio-left class="block p-2 md:p-6">
           <ImgHome />
            </nuestro-estudio-left>
            </div>
            {/* <div className='rigPLace'>
            <nuestro-estudio-right class="block relative p-1 md:p-4">
            <Credit />
            </nuestro-estudio-right>
            </div> */}
          </article>
        </section >
  )
}

export default Home