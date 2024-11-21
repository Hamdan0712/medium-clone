import axios from "axios"
import { Topbar } from "../Components/Topbar"
import { BACKEND_URL } from "../config"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Createblog=()=>{

    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
const navigate=useNavigate();
    return(

        <>
         <Topbar onClick={(e)=>e} email="hamdanaveed07@gmail.com"></Topbar>


         <div className="grid grid-cols-12 p-16">

            <div className="col-span-2 border-r-2 h-20 justify-self-end  border-solid border-gray-500 ">
                <p className="text-5xl text-gray-600">+</p>
            </div>
            <div className="col-span-10 p-2">
                
<label  className="block mb-2  text-3xl font-medium text-gray-400 ">Title</label>
<textarea onChange={(e)=>setTitle(e.target.value)}  className="block p-2.5 w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 text-black " placeholder="Write your Title here..."></textarea>



<label  className="block mb-2  mt-3 text-3xl font-medium text-gray-400 ">Content</label>
<textarea onChange={(e)=>setContent(e.target.value)}   className="block h-60  p-2.5 w-full text-lg text-black-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 text-black " placeholder="Write your Content here..."></textarea>

<div className="flex justify-center items-center mt-4">

<button onClick={async()=>{
    
  const res= await axios.post(`${BACKEND_URL}/api/v1/blog/createblog`,{
        title:title,
        content:content
    },{headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
alert("blog Created--");
    navigate(`/blog/${res.data.msg}`)

    
}} className="bg-green-700 rounded-xl text-white p-2">Publish</button>
</div>


            </div>
         </div>
         
        
        </>
    )
}