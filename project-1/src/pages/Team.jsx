import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { teamData } from '../assets/teamData'

const Team = () => {
  return (
    <main className='pt-16'>
      <section className='py-14 sm:py-18 md:py-24 px-4 sm:px-6 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-14'>
            <span className='inline-block px-4 py-2 mb-5 rounded-full bg-gray-900 text-white font-bold'>
              Meet the Experts
            </span>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-950 mb-5'>
              Our Team
            </h1>
            <p className='max-w-2xl mx-auto text-gray-600 sm:text-lg'>
              Creative architects, designers, and project specialists working
              together to bring exceptional spaces to life.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
            {teamData.map((member) => (
              <article
                key={member.id}
                className='group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
              >
                <div className='h-72 sm:h-80 overflow-hidden'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>

                <div className='p-6 text-center'>
                  <h2 className='text-xl font-bold text-gray-950 mb-1'>
                    {member.name}
                  </h2>
                  <p className='text-gray-500 font-semibold mb-3'>
                    {member.role}
                  </p>
                  <p className='text-gray-600 leading-relaxed mb-5'>
                    {member.bio}
                  </p>

                  <div className='flex justify-center gap-3'>
                    <a
                      href={member.socials.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className='w-9 h-9 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors'
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href={member.socials.twitter}
                      aria-label={`${member.name} on Twitter`}
                      className='w-9 h-9 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors'
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={member.socials.instagram}
                      aria-label={`${member.name} on Instagram`}
                      className='w-9 h-9 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors'
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-14 sm:py-18 md:py-20 px-4 sm:px-6 bg-gray-500'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div className='text-center lg:text-left'>
              <span className='inline-block px-4 py-2 mb-5 rounded-full bg-white text-gray-950 font-bold'>
                Join Our Studio
              </span>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-5'>
                Better spaces start with great people.
              </h2>
              <p className='text-gray-100 text-lg leading-relaxed'>
                We value curiosity, collaboration, and thoughtful design. Our team
                combines technical skill with a shared passion for creating places
                that inspire everyday life.
              </p>
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-white rounded-2xl p-5 sm:p-7 text-center'>
                <strong className='block text-3xl sm:text-4xl text-gray-950 mb-2'>20+</strong>
                <span className='text-gray-600 font-medium'>Years</span>
              </div>
              <div className='bg-white rounded-2xl p-5 sm:p-7 text-center'>
                <strong className='block text-3xl sm:text-4xl text-gray-950 mb-2'>150+</strong>
                <span className='text-gray-600 font-medium'>Projects</span>
              </div>
              <div className='bg-white rounded-2xl p-5 sm:p-7 text-center'>
                <strong className='block text-3xl sm:text-4xl text-gray-950 mb-2'>12</strong>
                <span className='text-gray-600 font-medium'>Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Team