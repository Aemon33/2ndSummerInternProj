import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

import apiService from "@/app/services/apiService";


const  PropertyDetailPage = async  ({params}:{params:{id:string}}) => {
    const property  = await apiService.get(`/api/properties/${params.id}`)
  return (

    <main className="max-w-[1000px] mx-auto mt-52 px-6 pb-6 ">
 
    <div className="w-full overflow-hidden mb-4 rounded-xl relative h-[64vh]">7
        <Image 
         fill
         src='/BeachHouse.jpg'
         className="object-cover h-full w-full"
         alt="beach house"
        />
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 ">
        <div className="py-6 pr-6 col-span-3">
            <h1 className="mb-4 text-4xl">
                {property.title}
            </h1>
            <span className="mb-6 block text-lg text-gray-600">
            {property.guests} guests - {property.bedrooms} bedrooms - {property.bathrooms} bathroom
            </span>

            <hr />
            <div className="flex py-6 items-center space-x-4">
            {property.landlord.avatar_url && 
            
            (
                <Image 
                
                src={property.landlord.avatar_url}
                className="rounded-full"
                alt="user name"
                width={50}
                height={50}
                />
            )
            }

                <p><strong>{property.landlord.name}</strong> is your host</p>

            </div>
                <hr />
                <p className="mt-6 text-lg">
                {property.description}
                </p>
        </div>
        <ReservationSideBar
        
        property = {property}
        />

    </div>

    </main>
  )
}

export default PropertyDetailPage;