import { useContext } from "react";
import { Donor } from "../store/collection";
import { FaMicrophone } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoMdAnalytics } from "react-icons/io";
function Data(){
    const {data,Api,handle}=useContext(Donor);
    return <div > 
        <div className="flex justify-center mt-60 ">
    <input type="text" placeholder="Ask Gemini" ref={data} onChange={handle} className=" text-1xl sm:text-2xl lg:text-2xl md:text-2xl sd:text-2xl p-4 border border-white rounded-2xl w-45 h-10 sm:w-100 md:w-100 lg:w-100 sd:w-100  sm:w-180 md:w-140 lg:w-200 sm:h-15 md:h-20 lg:h-20  "/>
    {data.current?.value&&data.curent?.value.trim()!==""?(<FaArrowAltCircleRight className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-5 ml-2  mt-[-0.5px] md:mt-1 lg:mt-1 sm:mt-1" onClick={Api} />):(<FaMicrophone className="text-2xl mt-5 ml-2 sm:text-3xl md:text-4xl lg:text-4xl mt-[-0.5px] md:mt-1 lg:mt-1 sm:mt-1" />)}
        </div>
    
 
    <div className="flex gap-2 text-2xl justify-center items-center md:mr-100 lg:mr-180 sm:mr-170    ">
    
        <FiPlus />
        <IoMdAnalytics  />Tools
 
        </div>   
    
    
    
    
    
    
    

    

    </div>



}
export default Data;