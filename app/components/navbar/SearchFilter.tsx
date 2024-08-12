import React from 'react'

function SearchFilter() {
  return (
    <>
    <div className="h-[64px] flex  items-center justify-between border border-red-600 rounded-full ">

   <div className='hidden lg:block'>
        <div className="flex  items-center justify-between bg-yellow-600 bg-opacity-50">
            <div className=" h-[64px] cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100 px-8">
                <p className="text-xs font-semibold">where</p>
                <p className="text-sm">Wanted Location</p>
            </div>
            <div className=" h-[64px] cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100 px-8">
                <p className="text-xs font-semibold">check-in</p>
                <p className="text-sm">add dates</p>
            </div>
            <div className=" h-[64px] cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100 px-8">
                <p className="text-xs font-semibold">check-out</p>
                <p className="text-sm">add dates</p>
            </div>
            <div className=" h-[64px] cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100 px-8">
                <p className="text-xs font-semibold">who</p>
                <p className="text-sm">add guests</p>
            </div>

        </div>
        </div>
    
            <div className="p-2">
                <div className="p-4 cursor-pointer transition hover:bg-rentilee-dark bg-rentilee rounded-full text-white">
                <svg  x="0px" y="0px" fill="#fff" width="18" height="18" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
                </div>
            </div>

    </div>
    
    </>


  )
}

export default SearchFilter