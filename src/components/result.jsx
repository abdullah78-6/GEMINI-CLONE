import { useContext } from "react";
import { Donor } from "../store/collection";
import Load from "./loading";

function Res(){
    let{result,loading}=useContext(Donor);
    return <>
<div className="flex justify-center items-center">
    <div className="flex gap-2 justify-center  items-center">
    {loading&&<Load className="text-center ml-90 sd:ml-auto lg:ml-auto md:ml-auto"/>}
    <h1 className="mt-9 text-center w-50 sm:w-380 md:w-150 lg:w-200 sd:w-400 text-2xl md:text-3xl sm:text-2xl ld:text-4xl " >{result}</h1>
    </div>
    </div>   
   
    
    </>


}
export default Res;