import { createContext, useEffect, useRef, useState } from "react";

import {GoogleGenerativeAI,GenerativeModel} from "@google/generative-ai";
export const Donor=createContext();
export  function Helper({children}){
    let data=useRef();

    let [result,setresult]=useState("");
    let [loading,setloading]=useState(false);
    let [side,setside]=useState(false);
    let[history,sethistory]=useState([]);
  let[prompts,setprompt]=useState("YOUR PROMPT");
  let[cond,setcond]=useState(true);

    
let [update,setupdate]=useState(false);
function handle(){
    setupdate(prev=>!prev);
    
}
function Bar(){
  console.log("sidebar");
  setprompt("YOUR PROMPT");
  
  setside(prev=>!prev);
}
function Refresh(){
  
  setresult("");
  setprompt("YOUR PROMPT");
  setcond(true);
}
function Deletehistory(index){
  console.log("delete");
  const newhistory=history.filter((_,i)=>i!==index);
  sethistory(newhistory);

}

    

     useEffect(()=>{
           
            console.log(result);
        },[]);

async   function Api(e){
      e.preventDefault();
      setcond(false);
        
       
        let prompt=data.current.value;
        setprompt(prompt);
        
        
        

        
        console.log(prompt);
     
      let apikey="AIzaSyAqI3ZZIZnI21aNDmgKUg7hIF1vLhA5XMo";
      
      let genai=new GoogleGenerativeAI(apikey);
      const model=genai.getGenerativeModel({model:"gemini-2.5-flash"});
      try{
        setloading(true);
        setresult("");
        const output=await model.generateContent(prompt);
        const response=output.response.text();
        // sethistory((prev)=>[...(prev||[]), {prompt: prompt, result: output.response.text()} ]);
        sethistory((prev)=>[...prev,{prompt,result:response} ]);
        

        

        
        setresult(response);

      }
      catch(err){
        console.log("err is",err);
        setresult("NETWORK ISSUE NOT FOUND ");

      }
      finally{
      
        setloading(false);
      }

      

        
    }
return (
    <Donor.Provider value={{data,Api,handle,result,loading,Bar,side,Refresh,history,Deletehistory,prompt,setresult,prompts,cond}}>
        {children}
    </Donor.Provider>
)


}