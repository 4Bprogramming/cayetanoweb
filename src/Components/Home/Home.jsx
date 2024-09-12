import React from 'react'
import './Home.css'
import Credit from '../Form/Credit'
import ImgHome from './ImgHome'

function Home() {
  return (
    <section className='homeSection'>
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