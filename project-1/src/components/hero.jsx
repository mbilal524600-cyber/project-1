import React from 'react'
import { FaAward, FaCalculator, FaSmile } from 'react-icons/fa'
import { homePageData } from '../assets/homePageData'

const hero = () => {

    const {hero} = homePageData;

  return (
    <div className='pt-24 pb-14 sm:pt-28 sm:pb-20 md:py-28 min-h-screen flex items-center justify-center px-4 sm:px-6'>
        <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12'>

            <div className='text-center md:text-left'>
                <div className='inline-block bg-black px-3 py-2 rounded-full mb-5 sm:mb-6'>
                    <div className='flex items-center justify-center gap-2 text-sm sm:text-base text-white font-bold'>
                        <FaAward className='text-xl'/>
                        {hero.badge}
                    </div>
                </div>

                <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold mb-5 sm:mb-6'>
                    {hero.title.normal} {""}
                    <span className='text-red-300'> {hero.title.highlight} </span>
                    {hero.title.end}
                </h1>

                <p className='text-gray-500 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto md:mx-0'> 
                    {hero.description}
                </p>

                <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10'>
                    <button className='flex items-center justify-center gap-2 bg-black px-5 py-3 rounded-full text-gray-50 cursor-pointer
                    transition-all duration-200 ease-in-out hover:-translate-y-0.5 '>
                        <FaCalculator />
                        Book Consultation
                    </button>
                    <button className='flex items-center justify-center gap-2 border-2 bg-gray-200 px-5 py-3 rounded-full
                    cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5'>
                        <FaSmile />
                        View Projects
                    </button>
                </div>

                <div className='mt-10 sm:mt-12 md:mt-16 grid grid-cols-3 gap-2 sm:gap-6'>
                    { hero.stats.map((stats,idx) =>(
                        <div
                        key={idx}
                        >
                            <h3 className='text-xl sm:text-2xl md:text-3xl text-gray-950 font-bold italic'> {stats.value} </h3>
                            <p className='text-sm sm:text-base text-gray-600'> {stats.label} </p>

                        </div>
                    )) }
                </div>

            </div>

            <div className='py-2 sm:py-4 lg:py-0'>
                <div className='bg-red-300 rounded-3xl p-2 shadow-2xl'>
                    <img className='rounded-3xl w-full hover:scale-105 duration-300 transition-transform cursor-pointer' src={hero.image.src} alt={hero.image.alt} />
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default hero