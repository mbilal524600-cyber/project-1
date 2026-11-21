import React from 'react'
import { story, values, timeline } from '../assets/aboutData'

const About = () => {
  return (
    <main className='pt-16'>
      <section className='py-14 sm:py-18 md:py-24 px-4 sm:px-6 bg-gray-100'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center'>
          <div className='text-center md:text-left'>
            <span className='inline-block px-4 py-2 mb-5 rounded-full bg-gray-900 text-white font-bold'>
              {story.badge}
            </span>

            <h1 className='text-4xl sm:text-5xl font-bold mb-6 text-gray-950'>
              {story.title}
            </h1>

            <div className='space-y-4 text-gray-600 leading-relaxed sm:text-lg'>
              {story.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <div className='bg-red-300 rounded-3xl p-2 shadow-2xl'>
              <img
                className='w-full h-72 sm:h-96 lg:h-420px rounded-3xl object-cover'
                src={story.image}
                alt='Design Haven studio'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-14 sm:py-18 md:py-20 px-4 sm:px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center text-gray-950 mb-10 sm:mb-14'>
            Our Values
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            {values.map((value, index) => (
              <article
                key={index}
                className='bg-gray-100 p-7 sm:p-8 rounded-2xl text-center hover:-translate-y-3 transition-transform duration-300 hover:border-2 cursor-pointer'
                style={{ transitionDelay: value.delay }}
              >
                <div className='w-14 h-14 mx-auto mb-5 rounded-full bg-gray-900 text-white flex items-center justify-center hover:border-4'>
                  <value.icon className='text-2xl' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-gray-950'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-14 sm:py-18 md:py-20 px-4 sm:px-6 bg-gray-500'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-14'>
            Our Journey
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {timeline.map((item, index) => (
              <article
                key={index}
                className='relative p-6 sm:p-7 rounded-2xl bg-white cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-4xl hover:border-gray-950'
              >
                <span className='inline-block px-3 py-1 mb-4 rounded-full bg-red-300 text-gray-950 font-bold'>
                  {item.year}
                </span>
                <h3 className='text-xl font-bold mb-3 text-gray-950'>{item.title}</h3>
                <p className='text-gray-600'>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About