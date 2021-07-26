import { ExclamationCircleIcon, ArrowLeftIcon } from "@heroicons/react/outline"
import Modal from "../components/Modal";
import { useState } from "react";
import { useRouter } from "next/router"
function Dash() {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter()
    return (
     

        <div className="text-xs  mt-4 bg-red-200 mx-14 flex rounded-lg py-1.5 items-center justify-center">
            

            <span onClick={()=> router.push(`/dashboard`)} className="font-bold text-red-700 hover:cursor-pointer underline ">Dashboard</span>

     


        </div>
        
        
    )
}

export default Dash
