import {ChevronRightIcon} from "@heroicons/react/outline"
import Image from 'next/image'

export default function dashboard() {
  return (
    <div className="relative min-h-screen md:flex">

     

  
     
    <div className=" bg-gray-300 text-blue-100 w-64 space-y-6 py-7 px-2 absolute  left-0 h-full ">
  
  
    <div className="bg-red-800 w-full rounded-xl items-center  pl-3 flex mt-0  self-center py-4 ">
           <Image      className="z-10 pl-3"
                  
                    src="https://i.ibb.co/MPLwyRc/Rectangle-80.png"
                        height={50} width={50} 
                />
        <span className="text-2xl   pl-3 font-light">Barista 1</span>
        <ChevronRightIcon  className=" hover:cursor-pointer  h-4 pl-9 mx-0"/>
      
        </div>
     <div className="font-bold text-black text-2xl px-4">
         Orders
     </div>


      <nav className>
      <div className="bg-white border-l-8 my-3 border-blue-800  text-black w-full rounded-xl items-center  pl-3 mt-0  self-center py-4 ">
        
        <div className="font-bold">#ODER1D06</div>
        <div className="font-light">Chad - 1 item</div>
        <div className="text-gray-500 text-xs">20/07/2021 13:11</div>
        </div>
      
        <div className="bg-white border-l-8 my-3 border-yellow-400  text-black w-full rounded-xl items-center  pl-3 mt-0  self-center py-4 ">
        
        <div className="font-bold">#ODER1D06</div>
        <div className="font-light">Chad - 1 item</div>
        <div className="text-gray-500 text-xs">20/07/2021 13:11</div>
        </div>

        <div className="bg-white border-l-8 my-3 border-green-900  text-black w-full rounded-xl items-center  pl-3 mt-0  self-center py-4 ">
        
        <div className="font-bold">#ODER1D06</div>
        <div className="font-light">Chad - 1 item</div>
        <div className="text-gray-500 text-xs">20/07/2021 13:11</div>
        </div>
      </nav>
     
    </div>
  
     
    <div className="flex-1 pl-72 pt-14 text-2xl font-bold">
    #ORDERID05
    </div>
  
  </div>
  )
}
