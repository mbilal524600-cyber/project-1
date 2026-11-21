import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome,FaTimes, FaBars } from 'react-icons/fa'

const Header = () => {

  const navItems = [
    { id:'', label:"Home" },
    { id:'about', label:"About" },
    { id:'portfolio', label:"Portfolio" },
    { id:'services', label:"Services" },
    { id:'team', label:"Team" },
    { id:'blog', label:"Blog" },
    { id:'contact', label:"Contact" },
  ]

  const [ openMobileMenu, SetOpenMobileMenu ] = useState(false)

  return (

    <div className='w-full fixed top-0 py-3 sm:py-4 px-4 sm:px-6 shadow-lg z-50 bg-gray-900'>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className='flex items-center gap-2 sm:gap-3 font-bold text-lg sm:text-xl'>
        <div className=' w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center'> <FaHome className='text-black' /> </div>

        <div className='text-white'>
          Desing <span className='text-white'>Heaven</span>
        </div>

        </Link>

        <div className='hidden md:flex space-x-2'>
          { navItems.map((item, idx) =>(
             <NavLink
             key={idx}
             to={item.id === "" ? '/' : `${item.id}`}
             className={({isActive})=> `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
              isActive
              ? 'bg-white text-gray-950 shadow-md'
              : 'text-white hover:bg-gray-600'
             } `}
             >
              { item.label }
             </NavLink>
          )) }
        </div>

        <button className='md:hidden cursor-pointer' onClick={() => SetOpenMobileMenu(!openMobileMenu)}>
            { 
            openMobileMenu 
            ? <FaTimes className='text-white'/>
            : <FaBars className='text-2xl text-red-300' />
             }
          </button>
      </div>
      
      {
        openMobileMenu &&
        <div className='mt-4 max-h-[calc(100vh-5rem)] overflow-y-auto'>
          <div className='flex flex-col gap-1 pb-2'>
            {navItems.map((item) =>(
              <NavLink
                key={item.id}
                to={item.id === "" ? "/" : `/${item.id}`}
                onClick={() => SetOpenMobileMenu(false)}
                className={({ isActive }) => `px-3 py-2 rounded-lg text-white ${isActive ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      }

    </div>

  )

}

export default Header