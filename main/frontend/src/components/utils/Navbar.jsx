import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 sticky top-0 z-30 text-white shadow-sm bg-slate-700'>
        <div>LOGO</div>
        <div className='flex gap-20 items-center'>
            <div className='flex gap-12 list-none'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/community">Community</Link>
                </li>
                <li>
                    <Link to="/something">Something</Link>
                </li>
                <li className="relative group">
                    <button className="">Company</button>
                    <div className="absolute hidden group-hover:block bg-transparent shadow-2xl text-white w-48 py-2 rounded">
                        <Link to="/team-of-eh" className="block px-4 py-2 cursor-pointer">Team of EH</Link>
                        <Link to="/about-us" className="block px-4 py-2 cursor-pointer">About Us</Link>
                        <Link to="/careers" className="block px-4 py-2 cursor-pointer">Careers</Link>
                        <Link to="/contact" className="block px-4 py-2 cursor-pointer">Contact</Link>
                    </div>
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
