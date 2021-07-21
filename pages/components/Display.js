import autoprefixer from "autoprefixer"
import Image from "next/image"

function display() {
    return (
        <div className="p-0">
            <Image 
                className="object-contain p-0"     
                src="https://i.ibb.co/7GsGZCz/coffee.png" 
                width={1334}
                height={1039}
            />
            <div className="flex justify-between flex-grow   mt-5      ">
                <span className="font-bold pl-5 text-xl  ">Kopi Susu Gula Aren</span>
                <span className="pr-5 font-bold  text-red-700">Rp. 18.000</span>
            </div>
            
            <div className="pl-5 max-w-sm top-4">Perpaduan kopi, susu, dan gula aren. </div>
        </div>
    )
}

export default display
