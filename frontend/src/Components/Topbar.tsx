import React from "react"
import profile from "../assets/profile.png"
import { Link } from "react-router-dom"


interface TopbarProps{
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    email:string
}
export const Topbar=({onClick,email}:TopbarProps)=>{


    return (

        <div className="flex justify-between p-5 w-full ">

    
         
             <div className="flex gap-3">
                <Link to={'/blogs'}>

                <div className="flex gap-1 cursor-pointer border-2 border-solid rounded-lg p-3 border-black">
                <img className="rounded-full w-5 h-5" src={profile} alt="" />
                <p className="font-extrabold text-black">MEDIUM CREATION</p> 
                </div>
                </Link>

                <p className="text-gray-500 self-center" >Saved</p>

             </div>

             <div className="flex gap-7 items-center justify-center">
                <div className="">
                     <Link to={"/createblog"}>
                    <button className="bg-gray-700 rounded-xl text-white p-2" onClick={onClick }>New Blog</button>
                     </Link>
                </div>
                <p className="font-extrabold">....</p>
                <p className="text-2xl "> &copy;</p>

                <button className="rounded-full w-7 h-7 bg-slate-500 text-white">{(email.substring(0,2)).toUpperCase()}</button>
             </div>
        
        </div>
    )
}