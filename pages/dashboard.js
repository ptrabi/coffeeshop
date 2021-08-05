/* eslint-disable */
import {ChevronRightIcon} from "@heroicons/react/outline"
import Image from 'next/image'
import DatePick from "./components/DatePick"
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function dashboard() {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
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
     <div className="flex justify-evenly">
       <DatePick className=" w-7" />
       <form>
<select required className="text-black w-24 h-7 rounded-md">
    <option value=""  selected hidden>Status</option>
    <option value="22" >All Status</option>
    <option value="0">Unconfirmed</option>
    <option value="1">Confirmed</option>
</select>
</form>
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
  
      <div>
     <div className=" justify-evenly pt-14">
    <span className="flex-1 pl-72 pt-14 text-2xl font-bold">
    #ORDERID05
    </span>
    <span className="fixed right-14 hover:cursor-pointer  text-blue-800 stroke-2 bg-blue-200 rounded-lg  
                             justify-center h-10 w-40 text-sm pl-8 pt-2 font-bold ">
            NEW ORDER 
    </span>
  
    </div>
    <div className="pl-72 pt-2 text-2xl">Astrid</div>
    <div className="pl-72 pt-2 text-gray-400 text-2xl">20/07/2021 13:10</div>
    <table className="border-b border-t border-green-800 ml-72 w-full mt-6">
  <thead>
    <tr>
      <th className="border-b border-green-600 ...">QTY</th>
      <th className="border-b border-green-600 ...">PRODUCT</th>
      <th className="border-b border-green-600 ...">NOTE</th>
      <th className="border-b border-green-600 ...">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  >1x</td>
      <td  >
        <div>Americano</div>
        <div className="text-sm text-gray-500">Ice, Normal Sugar</div>
      </td>
      <td  >-</td>
      <td  >Rp.15.000</td>
    </tr>
    <tr>
      <td  >2x</td>
      <td >
        <div>Iced Matcha Latte</div>
        <div  className="text-sm text-gray-500">Normal Sugar, Caramel Syrup</div>
      </td>
      <td  >-</td>
      <td  >Rp.45.000</td>
    </tr>
    <tr>
      <td  >1x</td>
      <td >
        <div>Kopi Susu Gula Aren</div>
        <div  className="text-sm text-gray-500">Ice, Less Sugar</div>
      </td>
      <td >-</td>
      <td>Rp.15.000</td>
    </tr>
    <tr>
      <td >1x</td>
      <td >
        <div>Americano</div>
        <div  className="text-sm text-gray-500">Ice, Normal Sugar</div>
      </td>
      <td>-</td>
      <td  >Rp.15.000</td>
    </tr>
  </tbody>
</table>
    </div>


  </div>
  
  )
}
