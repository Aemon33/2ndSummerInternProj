import Link from 'next/link'
import Image from 'next/image'
import SearchFilter  from "./SearchFilter"
import UserNav  from "./UserNav" 
import {getUserId} from '@/app/lib/action'
import AddPropertyButton from './AddPropertyButton'
const  Navbar= async () => {
  const userId = await getUserId()

  console.log('userId',userId)
  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-10
    py-6 border-b  rounded-lg">
        <div className="max-w-[1200px] mx-auto px-6 ">
        <div className="flex justify-between items-center ">
                <Link href="/">
                <Image 
                src="/Logo.jpg" 
                alt="Rentilee logo"
                width={100}
                height={30}
                />            
                </Link>
              <div className="flex space-x-6">
                <SearchFilter/>
              </div>
              <div className="flex items-center space-x-6">
                <AddPropertyButton/>
                <UserNav
                userId = {userId}
                />
              </div>
        </div>

        </div>
    </nav>

)
}

export default Navbar