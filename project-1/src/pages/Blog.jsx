import React, { useState } from 'react'
import { FaArrowRight, FaClock } from 'react-icons/fa'
import { blogPosts } from '../assets/blogPostData'

const Blog = () => {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <main className='pt-16'>
      <section className='py-14 sm:py-18 md:py-24 px-4 sm:px-6 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-14'>
            <span className='inline-block px-4 py-2 mb-5 rounded-full bg-gray-900 text-white font-bold'>
              Design Journal
            </span>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-950 mb-5'>
              Latest Insights
            </h1>
            <p className='max-w-2xl mx-auto text-gray-600 sm:text-lg'>
              Ideas, trends, and practical advice from our team of architects
              and interior designers.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className='group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
              >
                <div className='h-56 sm:h-60 overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>

                <div className='p-6 sm:p-7'>
                  <div className='flex items-center justify-between gap-3 text-sm text-gray-500 mb-4'>
                    <time>{post.date}</time>
                    <span className='flex items-center gap-2'>
                      <FaClock />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className='text-xl sm:text-2xl font-bold text-gray-950 mb-3'>
                    {post.title}
                  </h2>
                  <p className='text-gray-600 leading-relaxed mb-5'>
                    {post.description}
                  </p>

                  <button
                    type='button'
                    className='flex items-center gap-2 text-gray-950 font-bold hover:gap-3 transition-all cursor-pointer'
                  >
                    Read Article
                    <FaArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-14 sm:py-18 px-4 sm:px-6 bg-gray-500'>
        <div className='max-w-4xl mx-auto text-center'>
          <span className='inline-block px-4 py-2 mb-5 rounded-full bg-white text-gray-950 font-bold'>
            Newsletter
          </span>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Get design inspiration in your inbox
          </h2>
          <p className='text-gray-100 text-lg mb-8'>
            Monthly tips, project stories, and the latest trends in home design.
          </p>

          {subscribed ? (
            <div className='inline-block px-6 py-4 rounded-2xl bg-white text-gray-950 font-bold'>
              Thank you for subscribing!
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className='max-w-xl mx-auto flex flex-col sm:flex-row gap-3'
            >
              <label htmlFor='newsletter-email' className='sr-only'>
                Email address
              </label>
              <input
                id='newsletter-email'
                type='email'
                required
                placeholder='Enter your email address'
                className='flex-1 px-5 py-3 rounded-full bg-white text-gray-950 outline-none border-2 border-transparent focus:border-gray-950'
              />
              <button
                type='submit'
                className='px-6 py-3 rounded-full bg-gray-950 text-white font-bold hover:bg-gray-800 transition-colors cursor-pointer'
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default Blog