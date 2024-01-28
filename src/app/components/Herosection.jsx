import React from 'react'
import HeroSectionImg from "../images/Heart digital Burned.png"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Herosection = () => {
  return (
    <main>
        <Image 
            src={HeroSectionImg}
            alt="digitalHeart"
            width="1440"
            height="968"
            className='w-full h-auto md:top-0 md:relative top-64 absolute'
        />
        <div className='absolute z-0 top-20 inset-0 flex flex-col justify-center ml-10'>
            <h3 className='text-xl font-SymbioticTenor'>Clinical Decisions with Artificial Intelligence</h3>
            <h1 className='md:text-6xl text-3xl w-2/3 md:w-2/4 py-3 font-SymbioticLato bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text'>Harness the potential of Artificial Intelligence 
                to empower</h1>
            <h2 className='md:w-1/3 md:text-xl text-base w-2/3 font-SymbioticTenor'>Welcome to Symbiotic AI, a digital health company focused on developing AI-based
                clinical in cardiovascular care.</h2>
            <h2
                className="flex text-2xl mt-5 w-max p-2 cursor-pointer bg-gradient-to-r from-blue-500 from-10% to-emerald-500 to-90% rounded-full hover:animate-pulse hover:text-blue-800">
                Get Started <FaArrowRight className='pt-2'/>{" "}
            </h2>
        </div>
        
        
    </main>
  )
}

export default Herosection