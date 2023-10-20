import React from 'react'

const Orders = () => {
   

    
  return (
    <div>
        <div className='container'>
          <div className='px-5 py-5 rounded border'>
          <div className='flex justify-between pb-5 border-b-2 sm:block'>
                <div className='flex space-x-10 sm:block sm:space-x-0'>
                    <div className='w-[200px] bg-gray-400 sm:h-[180px] sm:w-full sm:mb-4'></div>
                    <div className='sm:w-full'>
                        <h1 className='font-[600] mb-2'>T-shirt with multiple colors, for men and lady</h1>
                        <p className='text-gray-600'>Size:mediul , Color:blue, material:plastic</p>
                        <p className='text-gray-600 mb-2'>Seller: Artel Market</p>
                        <div className='space-x-3'>
                            <button className='px-5 py-1 border rounded text-red-700'>Remove</button>
                            <button className='px-5 py-1 border rounded text-blue-600'>Save for later</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-[600]'>$99.00</h1>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Orders