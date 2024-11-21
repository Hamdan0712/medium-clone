import React from "react"

interface ButtonV{
    text:string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export const Button=({text,onClick}:ButtonV)=>{
    return <div className="flex justify-center items-center">
        <button onClick={onClick} className="rounded-xl h-10 mt-2 border-none w-full bg-black text-center text-white">{text}</button>
    </div>

}