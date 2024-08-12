import Image from "next/Image"
import Link from "next/link"
import SearchFilter  from "./SearchFilter"
const  Navbar= () => {
  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-10
    py-6 border-b  rounded-lg">
        <div className="max-w-[1200px] mx-auto px-6 bg-blue-500 ">
        <div className="flex justify-between items-center   bg-cyan-100">
                <Link href="/">
                <Image 
                src="/logo.jpg" 
                alt="Rentilee logo"
                width={100}
                height={30}
                />            
                </Link>
              <div className="flex space-x-6">
                <SearchFilter/>
              </div>
              <div className="flex items-center space-x-6">
                Add property - User nav
              </div>
        </div>

        </div>
    </nav>

)
}

export default Navbar