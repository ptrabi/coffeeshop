import { ChevronLeftIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon } from "@heroicons/react/outline"

function Header() {
   
    return (
        <div className="pt-5 pb-5 container">
           <div className="flex justify-around">
           <ChevronLeftIcon  className=" hover:cursor-pointer  h-6 mx-0"/>
           <span className="font-bold">Coffee Shop</span>
           <DotsHorizontalIcon className="hover:cursor-pointer  h-6 mx-0"/>
           </div>
        </div>
    )
}

export default Header
