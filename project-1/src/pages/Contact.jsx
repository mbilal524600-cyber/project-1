import React, { useState } from 'react'
import { contactInfo, services, socialLinks } from '../assets/contactData'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className='pt-16'>
      <section className='py-14 sm:py-18 md:py-24 px-4 sm:px-6 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-14'>
            <span className='inline-block px-4 py-2 mb-5 rounded-full bg-gray-900 text-white font-bold'>
              Get in Touch
            </span>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-950 mb-5'>
              Contact Us
            </h1>
            <p className='max-w-2xl mx-auto text-gray-600 sm:text-lg'>
              Have a project in mind or want to learn more about our services?
              We would love to hear from you.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start'>
            <aside className='lg:col-span-2 bg-gray-900 rounded-2xl p-7 sm:p-8 text-white'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-7'>
                Contact Information
              </h2>

              <div className='space-y-6'>
                {contactInfo.map((item) => (
                  <div key={item.id} className='flex gap-4'>
                    <div className='w-11 h-11 rounded-full bg-white text-gray-950 flex items-center justify-center shrink-0'>
                      <item.icon />
                    </div>
                    <div>
                      <h3 className='font-bold mb-1'>{item.title}</h3>
                      <p className='text-gray-300 leading-relaxed'>{item.value}</p>
                      {item.value1 && (
                        <p className='text-gray-300 leading-relaxed'>{item.value1}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-8 pt-7 border-t border-gray-700'>
                <p className='font-bold mb-4'>Follow Us</p>
                <div className='flex gap-3'>
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      className='w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-white hover:text-gray-950 transition-colors'
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className='lg:col-span-3 bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-sm'>
              {submitted ? (
                <div className='min-h-96 flex flex-col items-center justify-center text-center'>
                  <div className='w-16 h-16 mb-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold'>
                    ✓
                  </div>
                  <h2 className='text-3xl font-bold text-gray-950 mb-3'>
                    Thank You!
                  </h2>
                  <p className='text-gray-600 max-w-md'>
                    Your message has been received. Our team will get back to you shortly.
                  </p>
                  <button
                    type='button'
                    onClick={() => setSubmitted(false)}
                    className='mt-6 px-5 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors cursor-pointer'
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className='text-2xl sm:text-3xl font-bold text-gray-950 mb-7'>
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div>
                      <label htmlFor='contact-name' className='block font-semibold text-gray-950 mb-2'>
                        Full Name
                      </label>
                      <input
                        id='contact-name'
                        name='name'
                        type='text'
                        required
                        placeholder='Your name'
                        className='w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent outline-none focus:border-gray-900'
                      />
                    </div>
                    <div>
                      <label htmlFor='contact-email' className='block font-semibold text-gray-950 mb-2'>
                        Email Address
                      </label>
                      <input
                        id='contact-email'
                        name='email'
                        type='email'
                        required
                        placeholder='you@example.com'
                        className='w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent outline-none focus:border-gray-900'
                      />
                    </div>
                    <div>
                      <label htmlFor='contact-phone' className='block font-semibold text-gray-950 mb-2'>
                        Phone Number
                      </label>
                      <input
                        id='contact-phone'
                        name='phone'
                        type='tel'
                        placeholder='+91 98765 43210'
                        className='w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent outline-none focus:border-gray-900'
                      />
                    </div>
                    <div>
                      <label htmlFor='contact-service' className='block font-semibold text-gray-950 mb-2'>
                        Service
                      </label>
                      <select
                        id='contact-service'
                        name='service'
                        defaultValue=''
                        className='w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent outline-none focus:border-gray-900'
                      >
                        <option value='' disabled>Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div className='sm:col-span-2'>
                      <label htmlFor='contact-message' className='block font-semibold text-gray-950 mb-2'>
                        Message
                      </label>
                      <textarea
                        id='contact-message'
                        name='message'
                        required
                        rows='5'
                        placeholder='Tell us about your project...'
                        className='w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent outline-none resize-y focus:border-gray-900'
                      />
                    </div>
                    <div className='sm:col-span-2'>
                      <button
                        type='submit'
                        className='w-full sm:w-auto px-7 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors cursor-pointer'
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact