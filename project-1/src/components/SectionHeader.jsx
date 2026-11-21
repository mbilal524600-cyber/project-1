import React from 'react'

const SectionHeader = ({badge, title, highlight, description}) => {
  return (
    <div>
        <div className='inline-block bg-white py-2 px-6 rounded-full font-bold mb-6'> {badge} </div>
        <h3 className='text-5xl font-bold mb-6 text-gray-100'> {title} <span className='text-gray-900'>{highlight}</span> </h3>
        <p className='max-w-2xl mx-auto mb-15'> {description} </p>
    </div>
  )
}

export default SectionHeader