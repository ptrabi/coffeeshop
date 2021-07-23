import Image from "next/image"
import { PlusCircleIcon } from "@heroicons/react/solid"
import { MinusCircleIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
function Cartlist() {
    const router = useRouter()
    return (
        <div className="container  mx-14">
            <div 
                className="flex  max-w-sm pt-5 ">
                <Image  onClick={()=> router.push(`/detail`)}
                    layout="fixed"
                    className="hover:cursor-pointer"
                    src="https://i.ibb.co/WVGLShj/Screenshot-4.png"
                        height={90} width={120} 
                />
                <span className=" pl-5">
                    <p onClick={()=> router.push(`/detail`)} className="my-1 hover:cursor-pointer text-lg text-black  font-bold"> Kopi Susu Gula Aren</p>
                    <p onClick={()=> router.push(`/detail`)} className="italic hover:cursor-pointer break-normal text-gray-600">Ice, Normal Sugar, Extra shot, extra Vanilla Syrup</p>
                    <span className="flex  items-center">
                    <p className="items-center text-red-700 pt-3 font-extrabold opacity-100 ">Rp. 28.000</p>
                        <span className="flex pl-20">
                        <MinusCircleIcon className="text-red-600 h-7 mx-2"/>
                        <p>1</p>
                        <PlusCircleIcon className="text-red-600 h-7 mx-2"/>
                        </span>
                        </span>
                </span>
            </div>

            <div 
                className="flex hover:cursor-pointer max-w-sm pt-10 ">
                <Image onClick={()=> router.push(`/detail`)}
                    layout="fixed"
                    src="https://i.ibb.co/F5GbMZr/dddw.png"
                        height={90} width={90} 
                />
                <span className=" pl-5">
                    <p onClick={()=> router.push(`/detail`)} className="my-1 hover:cursor-pointer text-lg text-black  font-bold"> Iced Matcha Latte</p>
                    <p onClick={()=> router.push(`/detail`)} className="italic hover:cursor-pointer break-normal text-gray-600">Normal sugar</p>
                    <span className="flex  items-center">
                    <p className="items-center text-red-700 pt-3 font-extrabold opacity-100 ">Rp. 15.000</p>
                        <span className="flex pl-20">
                        <MinusCircleIcon className=" text-red-600 h-7 mx-2"/>
                        <p>1</p>
                        <PlusCircleIcon className=" text-red-600  h-7 mx-2"/>
                        </span>
                        </span>
                </span>
            </div>
            <div className="fixed bottom-16 ">
                <span className="bottom-20 fixed">Total</span> 
                <span className="  right-16 bottom-20 text-red-600 font-bold fixed ">Rp.48.000</span>
            <div className="fixed hover:cursor-pointer  text-white stroke-2 bg-red-600 rounded-lg  
                             justify-center h-10 w-96 pl-40 pt-2 font-bold ">
            Order 
            </div>
            </div>
        </div>
    )
}

export default Cartlist
