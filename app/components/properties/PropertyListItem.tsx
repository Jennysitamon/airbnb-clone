import Image from "next/image";

const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image 
                fill
                src='/playa_1.png'
                sizes="(max-width: 760px) 768px, (max-width: 1200px): 768px, 768px"
                className="hover:scale-110 object-cover tansition h-full w-full"
                alt="Casa de playa"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">Property name</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>$200</strong> Por noche</p>
            </div>

        </div>
    )
}

export default PropertyListItem;