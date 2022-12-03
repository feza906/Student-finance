import React from 'react'
import { useState,useRef } from 'react'
import {requestOptions} from './configure/configure'

export const Calculate = () => {

  const [total,setTotal] = useState(0);
  const [total1,setTotal1] = useState(0);
  const [place,setPlace] = useState('INR');
  const [place1,setPlace1] = useState('INR');


  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  const handleChange = (e) => {
    setPlace1(e.target.value);
  }
  const handleChange1 = (e) => {
    setPlace(e.target.value);
  }

  const getResult = (event) => {
    event.preventDefault();
      setTotal(parseInt(inputRef1.current.value) + parseInt(inputRef2.current.value) +parseInt(inputRef3.current.value) +parseInt(inputRef4.current.value) + parseInt(inputRef5.current.value))
  
    }

    const getConvert = (event) => {
      event.preventDefault();
      fetch(`https://api.apilayer.com/fixer/convert?to=${place1}&from=${place}&amount=${total}`, requestOptions)
    .then(response => response.json())
    .then(data => setTotal1(data.result))
    .catch(error => console.log('error', error));
    //console.log(parseInt(result.result));
    }
  


  
  
  return (
    <div className=''>
        <h1 className='mt-16 ml-6 text-start text-xl text-blue-800'>Worried about so many expenses and confused at the same time,Don't worry we will help you by converting the currencies ,and you could compare the prices and decide what's best for you.</h1>
        <section style = {{backgroundImage: `url(https://images.unsplash.com/photo-1625225233840-695456021cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60)`}} className='bg-cover bg-center h-full p-8 px-16 xl:px-96 py-16 mt-8'>
        <form className= 'bg-white text-center py-16 rounded-lg uppercase rounded-xl'>
        <h1 className='text-2xl text-blue-600 mb-4'>Start Converting</h1>
        
          <label className='text-xl'>Select the Currency</label>
          <br/>
          <select value={place} onChange={handleChange1} className='ml-8 mt-2 px-2 mb-2'>
            <option value="INR" onSelect={() => setPlace('INR')}>INR</option>
            <option value="AUD" onSelect={() => setPlace('AUD')}>AUD</option>
            <option value="CAD" onSelect={() => setPlace('CAD')}>CAD</option>
            <option value="EUR" onSelect={() => setPlace('EUR')}>EUR</option>
            <option value="USD" onSelect={() => setPlace('USD')}>USD</option>

          </select>
          <br/>
          <label >Tution Fees</label><br/>
          <input id='input' type={'number'}  className="border-2 border-blue-600 rounded-xl px-4" ref={inputRef1} defaultValue={0}/>
          <br/>
          <label >Study Materials</label><br/>
          <input type={'number'} className="border-2 border-blue-600 rounded-xl px-4" ref={inputRef2} defaultValue={0}/>
          <br/>
          <label >Accommodtion</label><br/>
          <input type={'number'} className="border-2 border-blue-600 rounded-xl px-4" ref={inputRef3} defaultValue={0}/>
          <br/>
          <label >Transportation</label><br/>
          <input type={'number'} className="border-2 border-blue-600 rounded-xl px-4" ref={inputRef4} defaultValue={0}/>
          <br/>
          <label >Grocery</label><br/>
          <input type={'number'} className="border-2 border-blue-600 rounded-xl px-4" ref={inputRef5} defaultValue={0}/>
          <br/>
          <button onClick={getResult} className="bg-blue-600 mt-2 text-white uppercase p-2 rounded-xl mb-2 hover:bg-blue-400">get Total</button>
          <br/>
          <label >Total</label><br/>
          <input type={'number'} className="border-2 border-blue-600 rounded-xl px-4 mb-5" value={total}/>
          <br/>
          <label className='text-xl '>Select the Currency To Convert</label>
          <br></br>
          <select value={place1} onChange={handleChange} className='ml-8 mt-2 px-2 mb-2'>
            <option value="INR" >INR</option>
            <option value="AUD" >AUD</option>
            <option value="CAD" >CAD</option>
            <option value="EUR" >EUR</option>
            <option value="USD" >USD</option>

          </select>
          <br/>
          <button onClick={getConvert} className="bg-blue-600 mt-2 text-white uppercase p-2 rounded-xl mb-2 hover:bg-blue-400">CONVERT</button>
          <br/>
          <input type={'number'} className="border-2 border-blue-600 rounded-xl px-4 mb-5" value={total1}/>
        </form>
        </section>
    </div>
  )
}
