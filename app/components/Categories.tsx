import React from 'react'
import Image from 'next/image'
function Categories() {
  return (

    
    <div className='pt-3 pb-6 flex items-center space-x-12 cursor-pointer'>

      <div className="pb-2 flex flex-col items-center space-y-2  hover:border-b-2 hover:border-gray-600 opacity-60 hover:opacity-100">
          <Image 
          src='/BeachFrontIcon.jpg' 
          alt='branch front icon'
          width={25}
          height={25}
          
          />
          <span className='text-xs'>Beach</span>

      </div>
      <div className="pb-2 flex flex-col items-center space-y-2  hover:border-b-2 hover:border-gray-600 opacity-60 hover:opacity-100">
          <Image 
          src='/BeachFrontIcon.jpg' 
          alt='branch front icon'
          width={25}
          height={25}
          
          />
          <span className='text-xs'>Villas</span>

      </div>
      <div className="pb-2 flex flex-col items-center space-y-2  hover:border-b-2 hover:border-gray-600 opacity-60 hover:opacity-100">
          <Image 
          src='/BeachFrontIcon.jpg' 
          alt='branch front icon'
          width={25}
          height={25}
          
          />
          <span className='text-xs'>Cabins</span>

      </div>
      <div className="pb-2 flex flex-col items-center space-y-2  hover:border-b-2 hover:border-gray-600 opacity-60 hover:opacity-100">
          <Image 
          src='/BeachFrontIcon.jpg' 
          alt='branch front icon'
          width={25}
          height={25}
          
          />
          <span className='text-xs'>Tiny Houses</span>

      </div>
    </div>
  )
}

export default Categories