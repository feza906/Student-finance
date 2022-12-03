import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className>
        <ul className='flex space-x-3 text-xl'>
            <li className='text-blue-700 font-medium border-b-2 border-white hover:border-b-blue-700 transition ease-in-out duration-500'>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li className='text-blue-700 font-medium border-b-2 border-white hover:border-b-blue-700 transition ease-in-out duration-500'>
                <Link to='/calculate'>
                    Calculate Expense
                </Link>
            </li>

        </ul>
    </div>
  )
}
