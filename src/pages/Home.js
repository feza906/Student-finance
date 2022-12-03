import React from 'react'

export const Home = () => {
  return (
    <div>
      <h1 className='bg-blue-50 border-2 mt-2 text-center text-blue-600 text-3xl uppercase font-bold p-2'>Here is the service you deserve</h1>
      <h2 className='mt-2 text-center text-blue-600 text-2xl uppercase'>Know your expenses in your native currency.</h2>
      <h2 className='mt-2 text-center text-blue-600 text-xl uppercase'>Anywhere in the world? Need to know how much you spend in your local currency? </h2>
      <h2 className='mt-2 text-center text-blue-600 text-2xl uppercase'>No worries! We've got your back. Feel free to use this tool.</h2>
      <div className='flex flex-col justify-center items-center'>
        <img src='images/img2.png' height='150px' width='150px' alt="image" className="mt-5 -ml-96" />
        <img src='images/img1.png' height='300px' width='400px' alt="image" />
        <img src='images/img3.png' height='150px' width='150px' alt="image" className="ml-96 mx-20" />
      </div>
    </div>
  )
}
