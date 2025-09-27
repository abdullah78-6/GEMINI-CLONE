 import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";

import { useContext } from "react";
import { Donor } from "../store/collection";
import Side from "./sidebar";
import { FaGear } from "react-icons/fa6";
function Nav(){
  let{Bar,side}=useContext(Donor);
 
  
    
    return <>
    {side&&(
      <div className="fixed top-0 left-0 z-40">

      
      <Side/> </div>)}
    
      <div className="xyz flex  fixed top-0 left-0 h-screen  mt-5  bg-gray-900 w-6 ml-0.2 bg-gray-900 flex flex-col justify-between items-center py-6 mt-[-1.5px] md:w-14 lg:w-14 sm:w-14 sm:ml-0 sd:ml-0 lg:ml-0  ">
        <div className="flex  flex-col  flex-wrap  text-2xl ">
        
      <GiHamburgerMenu onClick={Bar}  />
      <FaGear className="text-2xl cursor-pointer hover:rotate-90 transition-transform duration-300 text-white mt-190" onMouseEnter={Bar}  />      
              
              
              </div>
              </div>
        




         
    <div className="flex ml-20 flex-wrap  ">
      
      <div className="flex flex-col mt-[-3px] flex-wrap text-1xl sm:text-2xl md:text-2xl lg:text-2xl sd:text-2xl capitalize">
        
      
          <h1 >gemini</h1>
          
        <h4 className=" bg-gray-900 w-auto mt-2 rounded-4xl h-7 w-8 ">2.5 flash <FaAngleDown /> </h4>
        </div>
        </div>
          
      
        <div className="flex justify-end flex-row mt-[-60px] flex-wrap text-1xl sm:text-2xl md:text-2xl lg:text-2xl sd:text-2xl  capitalize">
          <div className="flex gap-2 mr-4 flex-wrap"> 
            <h1 >pro</h1>
            <a href="#" className=" hover:underline" >sign in </a>
            </div>

        </div>
      
        

    
    </>

}
export default Nav;