import React from 'react'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='ml-2 mt-2 flex align-middle items-center'>
        <h1 className='text-2xl font-semibold text-blue-700 underline transition ease-in-out duration-700 cursor-pointer mr-8'>
            
        <Link to='/'>StudentFinance</Link></h1>
        <Nav/>
    </div>
  )
}
