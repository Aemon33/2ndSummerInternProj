import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
const  PropertyDetailPage = () => {
  return (

    <main className="max-w-[1000px] mx-auto mt-52 px-6 pb-6 ">
 
    <div className="w-full overflow-hidden mb-4 rounded-xl relative h-[64vh]">7
        <Image 
         fill
         src='/BeachHouse.jpg'
         className="object-cover  h-full w-full"
         alt="beach house"
        />
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 ">
        <div className="py-6 pr-6 col-span-3">
            <h1 className="mb-4 text-4xl">
                Property name
            </h1>
            <span className="mb-6 block text-lg text-gray-600">
                4 guests - 2 bedrooms - 1 bathroom
            </span>

            <hr />
            <div className="flex py-6 items-center space-x-4">
                <Image 
                
                src='/MaleProPic.jpg'
                className="rounded-full"
                alt="user name"
                width={50}
                height={50}
                />

                <p><strong>John Doe</strong> is your host</p>

            </div>
                <hr />
                <p className="mt-6 text-lg">
                   Lorem ipsum dolor sit amet. provident!
                </p>
        </div>
        <ReservationSideBar/>

    </div>

    </main>
  )
}

export default PropertyDetailPage;