 import Image from "next/image";

function PropertyListItem() {
  return (
    <div className="cursor-pointer">
      <div className=" relative overflow-hidden aspect-square rounded-xl">
        <Image fill
          src='/BeachHouse.jpg'
          sizes="(max-width: 768px) 768px, (max-width:1200px) 768px 768px"
          className="hover:scale-110 object-cover transition h-full"
          alt="beach house"
          />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Property name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong> per night</strong>
        </p>
      </div>
    </div>
  )
}

export default PropertyListItem