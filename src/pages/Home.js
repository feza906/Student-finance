import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
    <div className='mt-16 ml-4 text-xl mx-8'>
      <div className='flex flex-col-reverse lg:flex-row justify-between align-middle items-center'>
      <h1 className='font-mono text-2xl'>Longing to Study Abroad,But is it difficult for you to <span className='border-b-2 border-blue-400'>calculate the expenses</span> or being super confused in <span className='border-b-2 border-blue-400'>converting</span> to your native currency.</h1>
      <img src='images/img2.png' alt="1" className="h-72 xl:h-96" />
      </div>
      <div className='mt-8 flex flex-col items-center'>
      <h1 className='bg-blue-50 border-2 mt-2 text-center text-blue-600 text-xl xl:text-3xl uppercase font-bold p-2'>Here is the service you deserve</h1>
      <h2 className='text-center text-blue-600 text-xl xl:text-2xl font-mono mt-8'>Anywhere in the world? Need to know how much you spend in your local currency? </h2>
      <h2 className='mt-2 text-center text-black text-xl xl:text-2xl'>No worries! We've got your back. Feel free to use this tool.</h2>
      <button className='mt-4 bg-blue-400 px-4 py-2 text-white rounded-3xl hover:bg-blue-500'>
        <Link to='/calculate'>Get Started</Link></button>
      </div>
      </div>
      
    </div>
    // <div>
    //   <h1 className='bg-blue-50 border-2 mt-2 text-center text-blue-600 text-3xl uppercase font-bold p-2'>Here is the service you deserve</h1>
    //   <h2 className='mt-2 text-center text-blue-600 text-2xl uppercase'>Know your expenses in your native currency.</h2>
    //   <h2 className='mt-2 text-center text-blue-600 text-xl uppercase'>Anywhere in the world? Need to know how much you spend in your local currency? </h2>
    //   <h2 className='mt-2 text-center text-blue-600 text-2xl uppercase'>No worries! We've got your back. Feel free to use this tool.</h2>
    //   <div className='flex flex-col justify-center items-center'>
    //     <img src='images/img2.png' height='150px' width='150px' alt="image" className="mt-5 -ml-96" />
    //     <img src='images/img1.png' height='300px' width='400px' alt="image" />
    //     <img src='images/img3.png' height='150px' width='150px' alt="image" className="ml-96 mx-20" />
    //   </div>
    // </div>
  )
}
