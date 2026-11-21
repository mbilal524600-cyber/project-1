import React from 'react'
import { homePageData } from '../assets/homePageData'
import SectionHeader from './SectionHeader'

const Features = () => {
    const { features } = homePageData
  return (
    <div className='py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-400 text-center'>
        <div className='max-w-6xl mx-auto'>
            <section className='section-header mb-15'>
                <div className='mb-4'> <span className='px-4 py-2 bg-gray-100 rounded-full font-bold'>Why Chose Us</span> </div>
                <div className='mb-3'> <h3 className='text-2xl sm:text-3xl font-bold'>Premium Design Solution</h3> </div>
                <div> <p className='text-gray-700 text-lg sm:text-xl md:text-2xl'>We combine creativity with functionality to deliver exceptional home modeling experiences.</p> </div>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.items.map((items, idx) =>(
                <div
                key={idx}
                className='bg-gray-100 p-8 rounded-2xl hover:-translate-y-2 transition duration-300 ease-in-out cursor-pointer'
                >
                    <div className='w-10 h-10 bg-gray-900 rounded-full text-white flex items-center justify-center mb-3 text-center mx-auto'>
                        < items.icon className='text-2xl'/>
                    </div>
                    <h3 className='text-xl font-bold mb-3 uppercase'> {items.title} </h3>
                    <p className='text-gray-700'> {items.description} </p>

                </div>
            ))}
        </div>

        </div>
    </div>
  )
}

export default Features