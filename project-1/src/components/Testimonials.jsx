import React from 'react'
import { homePageData } from '../assets/homePageData'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {

    const { testimonials } = homePageData

  return (
    <div className='py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
            <section className='section-header text-center mb-15'>
                <div className='mb-4'> <span className='px-4 py-2 bg-gray-900 text-white rounded-full font-bold'>Why Chose Us</span> </div>
                <div className='mb-3'> <h3 className='text-2xl sm:text-3xl font-bold text-black'>Premium Design Solution</h3> </div>
                <div> <p className='text-gray-900 text-lg sm:text-xl md:text-2xl'>We combine creativity with functionality to deliver exceptional home modeling experiences.</p> </div>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.items.map((items, idx) =>(
                <div
                key={idx}
                className='p-8 bg-gray-900 text-white rounded-2xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer'
                >
                    <div className='flex items-center gap-4 mb-4'>
                        <img className='w-16 h-16 rounded-full object-cover' src={items.image} alt={items.name} />
                        <div className=''>
                            <h3 className='text-2xl font-bold'> {items.name} </h3>
                            <p className='text-gray-400'> {items.role} </p>
                        </div>
                    </div>

                    <p className='mb-4'> {items.quote} </p>
                    <div className='flex'>
                        {Array.from({length:Math.floor(items.rating)}).map((i)=>(
                            <FaStar className='text-yellow-300 mx-1'/>
                        ))}
                        
                    </div>

                </div>
            ))}
            </div>

        </div>
    </div>
  )
}

export default Testimonials