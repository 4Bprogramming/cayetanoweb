import React from 'react'
import logo from '../../assets/newlogo.png'
import Image from 'next/image'
import '../Navbar/NavBar.css'
function Footer() {
  return (
    <footer className="bg-primary footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className='logofooter'>
      <Image 
      className='mb-8 '
      src={logo}
            // src="/src/assets/newlogo.png"
            alt="Bajda Logo"
            width={150}
            height= {50}
            
          />
          </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer