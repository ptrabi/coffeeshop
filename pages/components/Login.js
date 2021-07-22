import { ExclamationCircleIcon, ArrowLeftIcon } from "@heroicons/react/outline"
import React, {useState} from "react"

function Login() {

    return (
     

        <div className="bg-red-200 mx-14 flex rounded-lg py-1.5 justify-center">
            
            <ExclamationCircleIcon className="h-6 mx-3"/>
            <span className="self-center">Login or register to continue. </span>
            <span className="font-bold text-red-700 hover:cursor-pointer underline ">Click here</span>
        
     


        </div>
        
        
    )
}

export default Login
