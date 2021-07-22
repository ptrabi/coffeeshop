/* eslint-disable */
import { ChevronLeftIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
function carthead() {
    const router = useRouter()
    return (
        <div className="pt-5 pb-5 container">
           <div className="flex justify-around">
           <ChevronLeftIcon onClick={()=> router.push(`/`)} className=" hover:cursor-pointer  h-6 mx-0"/>
           <span className="font-bold">Coffee Shop</span>
           <DotsHorizontalIcon className="h-0 opacity-0 mx-0"/>
           </div>
        </div>
    )
}

export default carthead
