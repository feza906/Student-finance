import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className ="bg-white">
        <ul className='flex space-x-10 text-xl align-middle items-center justify-center mt-1'>
            <li className='text-blue-700 font-medium border-b-2 border-white hover:border-b-blue-400 transition ease-in-out duration-500'>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li className='text-blue-700 font-medium border-b-2 border-white hover:border-b-blue-400 transition ease-in-out duration-500'>
                <Link to='/calculate'>
                    Calculate Expense
                </Link>
            </li>

        </ul>
    </div>
  )
}
