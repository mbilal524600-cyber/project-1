import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { processSteps, services } from '../assets/servicesData'

const Services = () => {
  return (
    <main className='pt-16'>
      <section className='py-14 sm:py-18 md:py-24 px-4 sm:px-6 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-14'>
            <span className='inline-block px-4 py-2 mb-5 rounded-full bg-gray-900 text-white font-bold'>
              What We Offer
            </span>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-950 mb-5'>
              Our Services
            </h1>
            <p className='max-w-2xl mx-auto text-gray-600 sm:text-lg'>
              From the first idea to the final detail, we provide complete design
              solutions tailored to your vision and lifestyle.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {services.map((service) => (
              <article
                key={service.title}
                className='bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
                style={{ transitionDelay: service.delay }}
              >
                <div className='w-14 h-14 mb-6 rounded-full bg-gray-900 text-white flex items-center justify-center'>
                  <service.icon className='text-2xl' />
                </div>
                <h2 className='text-xl sm:text-2xl font-bold text-gray-950 mb-3'>
                  {service.title}
                </h2>
                <p className='text-gray-600 leading-relaxed mb-5'>
                  {service.description}
                </p>
                <ul className='space-y-3'>
                  {service.features.map((feature) => (
                    <li key={feature} className='flex items-center gap-3 text-gray-700'>
                      <span className='w-6 h-6 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center shrink-0'>
                        <FaCheck className='text-xs' />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-14 sm:py-18 md:py-20 px-4 sm:px-6 bg-gray-500'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-14'>
            <span className='inline-block px-4 py-2 mb-5 rounded-full bg-white text-gray-950 font-bold'>
              How It Works
            </span>
            <h2 className='text-3xl sm:text-4xl font-bold text-white'>
              Our Process
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {processSteps.map((item) => (
              <article
                key={item.step}
                className='relative p-6 sm:p-7 rounded-2xl bg-white border border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-gray-950 transition-all duration-300'
                style={{ transitionDelay: item.delay }}
              >
                <span className='w-12 h-12 mb-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-bold'>
                  {item.step}
                </span>
                <h3 className='text-xl font-bold text-gray-950 mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-14 sm:py-18 px-4 sm:px-6 bg-white'>
        <div className='max-w-6xl mx-auto rounded-3xl bg-gray-900 px-6 sm:px-10 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left'>
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-3'>
              Ready to start your project?
            </h2>
            <p className='text-gray-300 sm:text-lg'>
              Let us create a space that feels uniquely yours.
            </p>
          </div>
          <Link
            to='/contact'
            className='shrink-0 px-6 py-3 rounded-full bg-white text-gray-950 font-bold hover:bg-gray-200 transition-colors'
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Services