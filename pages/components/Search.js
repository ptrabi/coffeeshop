import { SearchIcon } from "@heroicons/react/outline"
function Search() {
    return (
        <div className=" px-14 py-6">
            <div className="bg-gray-200 flex items-center rounded-xl ">
            <input className="bg-gray-200 rounded-xl w-full py-3 px-6  leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>
            <SearchIcon className="stroke-current text-red-700 bg-gray-200 h-9 mx-3"/>
            </div>
        </div>
      
    )
}

export default Search
