import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 sticky top-0 z-10 text-white shadow-sm bg-slate-700'>
        <Link to="/">
            <img src="./logo.png" alt="" className='h-10' />
        </Link>
        <div className='flex gap-20 items-center'>
            <div className='flex gap-12 list-none'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/customers">Customers</Link>
                </li>
                <li className="relative group">
                    <Link to="/company" className="">Company</Link>
                    {/* <div className="absolute hidden group-hover:block bg-slate-600 shadow-2xl text-white w-34 py-2 rounded z-50 -left-5">
                        <Link to="/team-of-eh" className="block px-4 py-2 cursor-pointer">Team of EH</Link>
                        <Link to="/about-us" className="block px-4 py-2 cursor-pointer">About Us</Link>
                        <Link to="/careers" className="block px-4 py-2 cursor-pointer">Our Story</Link>
                        <Link to="/contact" className="block px-4 py-2 cursor-pointer">Community</Link>
                    </div> */}
                </li>
            </div>
            <div className='flex gap-5'>
                <button className='border px-4 py-1 border-indigo-400 rounded-lg hover:bg-gray-800 text-green-400'>Login</button>
                <button className='hover:bg-orange-600 px-4 py-1 rounded-lg'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
