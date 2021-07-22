import { PlusCircleIcon } from "@heroicons/react/solid"
import { MinusCircleIcon } from "@heroicons/react/solid"
function Additional() {
    return (

        <div className="p-0 container">
            <div className=" mt-3 bg-gray-300 pt-1 pb-1">
              <div className="ml-5 max-w-sm">COSTUMIZE</div>
            </div>

          <div className="ml-5 pr-5">

            <div className="mt-4 ">
                <div className="justify-between flex">
                    <span className="text-red-700 font-bold">HOT/ICE</span>
                    <span>
                        <span className="text-black">Required </span>
                        <span className="text-gray-500">• Choose One </span>
                    </span>
                  </div>
                <div className="mt-2">
                  <label className=" items-center flex flex-row justify-between ">
                    <div className="pb-2 fontfam ml-2">Ice</div>
                    <input type="radio" className="form-radio" name="hotice" value="ice"></input>
                  </label>
                  
                  <label className="flex flex-row justify-between items-center">
                    <div className=" ml-2">Hot</div>
                    <input type="radio"  className="form-radio" name="hotice" value="hot"></input>
                  </label>
                </div>
            </div>
              
            <div className="mt-4">
                <div className="justify-between flex">
                  <span className="text-red-700 font-bold">SUGAR LEVEL</span>
                  <span>
                      <span className="text-black">Required </span>
                      <span className="text-gray-500">• Choose One </span>
                  </span>
                </div>
                <div className="mt-2">
                  <label className=" items-center flex flex-row justify-between ">
                    <div className=" pb-2 ml-2">Normal Sugar</div>
                    <input type="radio" className="form-radio" name="sugar" value="normalsugar"></input>
                  </label>
                  
                  <label className="flex flex-row justify-between items-center">
                    <div className="pb-2 ml-2">Less Sugar</div>
                    <input type="radio"  className="form-radio" name="sugar" value="lesssugar"></input>
                  </label>

                  <label className="flex flex-row justify-between items-center">
                  <div className="pb-2 ml-2">No Sugar</div>
                  <input type="radio"  className="form-radio" name="sugar" value="nosugar"></input>  
                  </label>
                </div>
            </div>

              
            <div className="block">
                <div className="justify-between flex">
                    <span className="text-red-700 font-bold">TOPPING</span>
                    <span className="text-gray-500">Optional • Max 2</span>
                </div>
                <div className="mt-2">
                  <div>
                    <label className="flex flex-row justify-between items-center">
                    <span className="pb-2 ml-2">Extra Shot</span>
                    <span>
                      <span className="pr-2">+5.000</span>
                      <input type="checkbox" className="form-checkbox" ></input>
                    </span>
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-row justify-between items-center">
                    <span className="pb-2 ml-2">Extra Vanilla Syrup</span>
                    <span>
                      <span className="pr-2">+5.000</span>
                      <input type="checkbox" className="form-checkbox" ></input>
                    </span>
                    </label>
                  </div>
                
                  <div>
                    <label className="flex flex-row justify-between items-center">
                    <span className="pb-2 ml-2">Extra Whip Cream</span>
                      <span>
                      <span className="pr-2">+5.000</span>
                      <input type="checkbox" className="form-checkbox" ></input>
                      </span>
                    </label>
                  </div>

                </div>
              </div>

              <label className="block pt-2 ">
                <div className="flex flex-row justify-between items-center">
                <span className="text-red-700 font-bold">ADD NOTE</span>
                <span className="text-gray-500">Optional</span>
                </div>
                <textarea className="form-textarea mt-1 block w-full" rows="3" placeholder="E.g more milk please"></textarea>
              </label>
                

              <div className=" pt-3 items-center">
              <button className="bg-red-700 float-right hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                Add to cart - Rp 28.000
              </button>
                        <div className="flex items-center">
                        <MinusCircleIcon className=" text-red-600 h-8 mx-2"/>
                        <p>1</p>
                        <PlusCircleIcon className="text-red-600  h-8 mx-2"/>
                        </div>
              </div>
          </div>
</div>
    )
}

export default Additional
