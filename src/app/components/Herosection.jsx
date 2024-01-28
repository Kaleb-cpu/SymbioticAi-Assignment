import React from 'react'
import HeroSectionImg from "../images/Heart digital Burned.png"
import Image from "next/image";
const Herosection = () => {
  return (
    <main>
        <Image 
            src={HeroSectionImg}
            alt="digitalHeart"
            width="1440"
            height="968"
            className='w-full h-auto'
        />
        <div className='absolute z-0 top-20 inset-0 flex flex-col justify-center ml-10'>
            <h3 className='text-lg font-SymbioticTenor'>Clinical Decisions with Artificial Intelligence</h3>
            <h1 className='text-5xl w-1/3 py-3 font-SymbioticLato bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text'>Harness the potential of Artificial Intelligence 
                to empower</h1>
            <h2 className='w-1/3 text-lg font-SymbioticTenor'>Welcome to Symbiotic AI, a digital health company focused on developing AI-based
                clinical in cardiovascular care.</h2>
        </div>
        
        
    </main>
  )
}

export default Herosection