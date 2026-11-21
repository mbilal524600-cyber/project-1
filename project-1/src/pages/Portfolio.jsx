import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { filters, projects } from '../assets/portfolioData'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <main className='pt-16 bg-white'>
      <section className='py-14 sm:py-18 md:py-24 px-4 sm:px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12'>
            <span className='inline-block px-4 py-2 mb-5 rounded-full bg-gray-900 text-white font-bold'>
              Our Work
            </span>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-950 mb-5'>
              Featured Projects
            </h1>
            <p className='max-w-2xl mx-auto text-gray-600 sm:text-lg'>
              Explore a selection of residential, commercial, and sustainable spaces
              created with thoughtful design and lasting quality.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-3 mb-10 sm:mb-14'>
            {filters.map((filter) => (
              <button
                key={filter}
                type='button'
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className='group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
                style={{ transitionDelay: project.delay }}
              >
                <div className='overflow-hidden h-56 sm:h-64'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>

                <div className='p-6 sm:p-7'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className='px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium'
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <h2 className='text-xl sm:text-2xl font-bold text-gray-950 mb-3'>
                    {project.title}
                  </h2>
                  <p className='text-gray-600 leading-relaxed mb-5'>
                    {project.description}
                  </p>
                  <div className='flex items-center gap-2 text-gray-500 font-medium'>
                    <FaMapMarkerAlt className='text-gray-900' />
                    <span>{project.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio