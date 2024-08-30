import Image from "next/image";
interface CategoriesProps {
    dataCategory:string;
    setCategory: (category:string)=> void;
}
const  Categories:React.FC <CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
  return (
    <>
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">


        
      <div 
      onClick={()=>setCategory('Beach')}
      className={`pb-2 flex flex-col items-center space-y-2 border-b-2  hover:border-b-2 hover:border-gray-600 ${dataCategory =='Beach'?'border-gray-800':'border-white'}   opacity-60 hover:opacity-100`}>

          <Image 
          src='/BeachFrontIcon.jpg' 
          alt='branch front icon'
          width={25}
          height={25}
          
          />
          <span className='text-xs'>Beach</span>

      </div>
      <div
            onClick={()=>setCategory('Villas')}

            className={`pb-2 flex flex-col items-center space-y-2 border-b-2  hover:border-b-2 hover:border-gray-600 ${dataCategory =='Villas'?'border-gray-800':'border-white'}   opacity-60 hover:opacity-100`}>
          <Image 
          src='/BeachFrontIcon.jpg' 
          alt='branch front icon'
          width={25}
          height={25}
          
          />
          <span className='text-xs'>Villas</span>

      </div>
      <div
                  onClick={()=>setCategory('Cabins')}

                  className={`pb-2 flex flex-col items-center space-y-2 border-b-2  hover:border-b-2 hover:border-gray-600 ${dataCategory =='Cabins'?'border-gray-800':'border-white'}   opacity-60 hover:opacity-100`}>
          <Image 
          src='/BeachFrontIcon.jpg' 
          alt='branch front icon'
          width={25}
          height={25}
          
          />
          <span className='text-xs'>Cabins</span>

      </div>
      <div
            onClick={()=>setCategory('Tiny Houses')}

            className={`pb-2 flex flex-col items-center space-y-2 border-b-2  hover:border-b-2 hover:border-gray-600 ${dataCategory =='Tiny Houses'?'border-gray-800':'border-white'}   opacity-60 hover:opacity-100`}>
          <Image 
          src='/BeachFrontIcon.jpg' 
          alt='branch front icon'
          width={25}
          height={25}
          
          />
          <span className='text-xs'>Tiny Houses</span>

      </div>
    </div>
    


    </>
  )
}

export default Categories