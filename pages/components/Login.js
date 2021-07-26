import { ExclamationCircleIcon, ArrowLeftIcon } from "@heroicons/react/outline"
import Modal from "../components/Modal";
import { useState } from "react";
import { useRouter } from "next/router"
function Login() {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter()
    return (
     

        <div className="text-xs   bg-red-200 mx-14 flex rounded-lg py-1.5 items-center justify-center">
            
            <ExclamationCircleIcon className="h-6 mx-3"/>
            <span className="self-center">Login or register to continue. </span>
            <span onClick={()=> setShowModal(true)}className="font-bold text-red-700 hover:cursor-pointer underline ">Click here</span>
            <Modal show={showModal} onClose={()=> setShowModal(false)}>
            <div className="pb-5">YOUR NAME</div>
            <input className="bg-gray-200 rounded-lg  w-full py-3 px-6  leading-tight " id="search" type="text" placeholder="Name"/>
            <div className="py-5">EMAIL</div>
            <input className="bg-gray-200 rounded-lg mb-12 w-full py-3 px-6  leading-tight stroke-1" id="search" type="text" placeholder="Email"/>
            <div onClick={()=> router.push(`/inhome`)} className="fixed pt-2 hover:cursor-pointer  text-white stroke-2 bg-red-800 rounded-lg  
                             justify-center h-10 w-96 pl-40  font-bold ">
            Submit 
            </div>
        </Modal>
     


        </div>
        
        
    )
}

export default Login
