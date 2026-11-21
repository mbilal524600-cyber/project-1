import React from 'react'
import { footerData } from '../assets/footerData'
import { Links } from 'react-router-dom'
import Services from '../pages/Services'
import { FaMailBulk, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {

    const { company, socialLinks, quickLinks,services } = footerData

  return (
    <div className='pt-14 sm:pt-20 pb-8 text-white bg-black'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16'>

                <div className='company-info'>
                    <div className='flex items-center gap-2 mb-3'>
                        <div className='w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-black'>{<company.logoIcon className='text-2xl'/>}</div>
                        <div className='text-2xl font-bold'>Desing <span className='text-red-400'>Heaven</span></div>
                    </div>
                    <p className='mb-3'> {company.description} </p>

                    <div className='flex items-center space-x-4'> {company.socialLinks.map((social, idx)=>(
                        <a href="#" key={idx} className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:-translate-y-0.5'>
                            <social.icon />
                        </a>
                    ))} </div>
                </div>

                <div className='Quick-link'>
                    <h4 className='text-2xl font-heading font-bold mb-6 text-center'>Quick Link</h4>
                    <ul className='space-y-3 text-center'>
                        {quickLinks.map((link, idx)=>(
                            <li
                            key={idx}
                            >
                                {link.label}

                            </li>
                        ))}
                    </ul>
                </div>

                <div className='Services text-center'>
                    <h3 className='text-2xl font-bold font-heading mb-6'>Services</h3>
                    <ul className='space-y-3'>
                        {services.map((services, idx)=>(
                            <li
                            key={idx}
                            >
                                {services}

                            </li>
                        ))}
                    </ul>
                </div>

                <div className='Contact-info text-center'>
                    <h3 className='text-2xl font-heading font-bold mb-6'>Contact Us</h3>
                    <ul className='space-y-5'>
                        <li className='flex items-center justify-center md:justify-start gap-3 text-center'>
                            <FaMapMarkedAlt className='text-2xl font-bold text-red-400'/>
                            <span>New Ashok Nagar, New Delhi</span>
                        </li>
                        <li className='flex items-center justify-center md:justify-start gap-3'>
                            <FaPhoneAlt className='text-2xl text-red-400 font-bold'/>
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className='flex items-center justify-center md:justify-start gap-3'>
                            <FaMailBulk className='text-2xl text-red-400 font-bold'/>
                            <span>info@designhaven.com</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer