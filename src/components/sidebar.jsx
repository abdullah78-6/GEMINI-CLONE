import { MdOutlineMessage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { MdMessage } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { useContext } from "react";
import { Donor } from "../store/collection";
import { FaTrashCan } from "react-icons/fa6";
function Side(){
    let{ Bar,Refresh,history,Deletehistory,data,Api,prompt,result,setresult}=useContext(Donor);
    
    return <div className="fixed top-0 left-0 h-screen w-64 bg-gray-950 text-white flex flex-col justify-between shadow-xl border-r border-gray-800">
    <div className="grid" >
    <ul className=" flex justify-between mt-3 text-2xl font-semibold tracking-wide">
        <li> <GiHamburgerMenu onClick={Bar} /></li>
        <li><IoMdSearch /></li>


    </ul>
    <ul className="text-2xl flex justify-between mt-3 capitalize">
        <li className="bg-gray-800 rounded-4xl p-2 ml-3"><LuNotebookPen onClick={Refresh} />newchat</li>
        <li><MdMessage /></li>
    </ul>
    <div className="text-2xl   justify-start gap-6">
        <h3>recent</h3>
       
       {history.map((i,index)=>(
        <div key={index} className="text-2xl flex mt-5  ">
            <div >
        <h1 className="text-center capitalize" key={index}><MdOutlineMessage  onClick={()=>setresult(i.result)} />{i.prompt}<FaTrashCan className="ml-35" onClick={()=>Deletehistory(index)} /></h1> 
        </div>
        
        </div>
        
       ))}
       
    </div>
    <h3 className="text-2xl"><FaGear/> setting and help </h3>
    </div>
    </div>

}
export default Side ;