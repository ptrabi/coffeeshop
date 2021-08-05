import Image from "next/image"
import { ShoppingBagIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"

function Thumbnail() {
    const router = useRouter()
    return (
        <div className="flex-col mx-14 justify-center">
        <div className="flex">
            <div 
                className="pt-7 p-2  w-60  group cursor-pointer">
                <Image
                    layout="responsive"
                    src="https://i.ibb.co/T0jPrv6/Rectangle-39.png"
                        height={112} width={172} 
                />
                <div>
                    <p className="text-gray-500 pt-3 max-w-md"> COFFEEE</p>
                    <p className="my-1 text-xl text-black transition-all duration-100 ease-in-out font-bold">Americano</p>
                    <p className="items-center text-red-700 pt-7 font-extrabold opacity-100 ">Rp. 15.000</p>
                </div>
            </div>

            <div 
                className="pt-7 p-2  w-60  group cursor-pointer">
                <Image
                    layout="responsive"
                    src="https://i.ibb.co/bz474c8/Rectangle-39.png"
                        height={112} width={172} 
                />
                <div>
                    <p className="text-gray-500 pt-3 max-w-md"> COFFEEE</p>
                    <p className="my-1 text-xl text-black transition-all duration-100 ease-in-out font-bold">Kopi Susu Gula Aren</p>
                    <p className="items-center text-red-700 bottom-0 font-extrabold opacity-100 ">Rp. 15.000</p>
                </div>
            </div>
            </div>
            <div className="flex">
            <div 
                className="pt-7 p-2  w-60  group cursor-pointer">
                <Image
                    layout="responsive"
                    src="https://i.ibb.co/DDPKPsR/Rectangle-39.png"
                        height={112} width={172} 
                />
                <div>
                    <p className="text-gray-500 pt-3 max-w-md"> COFFEEE</p>
                    <p className="my-1 text-xl text-black transition-all duration-100 ease-in-out font-bold">Salted Caramel Macchiato</p>
                    <p className="items-center text-red-700 font-extrabold opacity-100 ">Rp. 15.000</p>
                </div>
            </div>

            <div 
                className="pt-7 p-2  w-60  group cursor-pointer">
                <Image
                    layout="responsive"
                    src="https://i.ibb.co/ZHXCL6D/Rec40.png"
                        height={112} width={172} 
                />
                <div>
                    <p className="text-gray-500 pt-3 max-w-md"> NON COFFEE</p>
                    <p className="my-1 text-xl text-black transition-all duration-100 ease-in-out font-bold">Matcha Latte</p>
                    <p className="items-center text-red-700 font-extrabold pt-7 opacity-100 ">Rp. 15.000</p>
                </div>
            </div>
            </div>
            <div className="flex">
            <div 
                className="pt-7 p-2  w-60  group cursor-pointer">
                <Image
                    layout="responsive"
                    src="https://i.ibb.co/sbPWzy9/rectt.png"
                        height={112} width={172} 
                />
                <div>
                    <p className="text-gray-500 pt-3 max-w-md"> NON COFFEE</p>
                    <p className="my-1 text-xl text-black transition-all duration-100 ease-in-out font-bold">Chocolate Ice</p>
                    <p className="items-center text-red-700 font-extrabold pt-7 opacity-100 ">Rp. 15.000</p>
                </div>
            </div>

            <div 
                className="pt-7 p-2  w-60  group cursor-pointer">
                <Image
                    layout="responsive"
                    src="https://i.ibb.co/VB41qyF/Rectangle-33.png"
                        height={112} width={172} 
                />
                <div>
                    <p className="text-gray-500 pt-3 max-w-md"> NON COFFEEE</p>
                    <p className="my-1 text-xl text-black transition-all duration-100 ease-in-out font-bold">Thai Tea</p>
                    <p className="items-center  text-red-700 font-extrabold pt-7 opacity-100 ">Rp. 15.000</p>
                </div>
            </div>
            </div >
            <div onClick={()=> router.push(`/cart`)}
                 className="fixed hover:cursor-pointer  stroke-2 bg-red-600 rounded-full content-center bottom-5 right-5 h-10 w-10">
            <ShoppingBagIcon  className=" fixed mt-2.5 ml-2.5   bg-red-600 rounded-full justify-between fill-current text-white   h-5 w-5"/>
            </div>
                 
        </div>
    )
}

export default Thumbnail
