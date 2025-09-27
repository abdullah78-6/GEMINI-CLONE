import { useContext } from "react";
import { Donor } from "../store/collection";
import { TfiMarkerAlt } from "react-icons/tfi";
function Pro(){
    const{prompts}=useContext(Donor);

    return <div>
        <div className=" flex md:justify-center  lg:justify-center sm:justify-center">
        <h1 className="text-1xl  md:text-3xl lg:text-3xl capitalize ml-30 mt-20 lg:ml-90 sm:ml-90 md:ml-90 lg:ml-90 lg:mt-0 sm:mt-0 md:mt-0  bg-gray-900 p-4 hover:bg-gray-950 shadow-2xl  rounded-3xl   "> { prompts&&<TfiMarkerAlt  />} {prompts}</h1>
        </div>
      
    </div>

}
export default Pro;