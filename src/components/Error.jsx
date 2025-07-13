import React from 'react'
import { useRouteError } from 'react-router-dom'



export default function Error() {

        const error = useRouteError()
    

  return (
   <div className='h-full flex flex-col w-full bg-rose-200 justify-center items-center'>
      
           <h1 className='text-3xl font-bold text-rose-900'>Oops! Something went wrong..</h1>
<p className="mt-4  text-2xl text-red-600  font-bold">{error?.statusText || error?.message || "Unknown error"}</p>
<p className='text-rose-500'>{error.data}</p>
<div>
    <a  className='text-center font-bold underline cursor-pointer text-blue-900' href='/'>Back to Home</a>
   </div>
    </div>
  )
}
