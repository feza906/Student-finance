import React from 'react'
import { useState } from 'react'

export const Calculate = () => {
  const [total,setTotal] = useState(0);
  
  return (
    <div className=''>
        <h1 className='mt-16 ml-6 text-start text-xl text-blue-800'>Worried about so many expenses and confused at the same time,Don't worry we will help you by converting the currencies ,and you could compare the prices and decide what's best for you.</h1>
        <section style = {{backgroundImage: `url(https://images.unsplash.com/photo-1625225233840-695456021cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60)`}} className='bg-cover bg-center h-screen p-8 px-16 xl:px-96 py-16 mt-8'>
        <form className= 'bg-white text-center py-16 rounded-lg uppercase rounded-xl'>
        <h1 className='text-2xl text-blue-600 mb-4'>Start Converting</h1>
        
          <label className='text-xl'>Select the Currency</label>
          <br/>
          <select className='ml-8 mt-2 px-2 mb-2'>
            <option value="volvo">INR</option>
            <option value="saab">AUD</option>
            <option value="opel">CAD</option>
            <option value="audi">EUR</option>
            <option value="audi">USD</option>

          </select>
          <br/>
          <label >Tution Fees</label><br/>
          <input type={'number'}  className="border-2 border-black rounded-xl px-4" onChange={(e) => setTotal(total + e.target.value)} required/>
          <br/>
          <label >Study Materials</label><br/>
          <input type={'number'} className="border-2 border-black rounded-xl px-4"/>
          <br/>
          <label >Accommodtion</label><br/>
          <input type={'number'} className="border-2 border-black rounded-xl px-4"/>
          <br/>
          <label >Transportation</label><br/>
          <input type={'number'} className="border-2 border-black rounded-xl px-4"/>
          <br/>
          <label >Grocery</label><br/>
          <input type={'number'} className="border-2 border-black rounded-xl px-4"/>
          <br/>
          <label >Total</label><br/>
          <input type={'number'} className="border-2 border-black rounded-xl px-4" value={total}/>
        </form>
        </section>
    </div>
  )
}
