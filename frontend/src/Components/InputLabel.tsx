import { ChangeEvent } from "react"

interface InputLabelProps{
    label:string,
    placeholder:string,
    type:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void
}

export const InputLabel=({label,placeholder,type,onChange}:InputLabelProps)=>{

    return (
        <>
      <label  className="text-sm font-semibold block mb-1 " htmlFor="">{label}</label>
      <input onChange={onChange} className="p-2 focus:border-blue-300 mb-4 outline-none w-full rounded-lg  text-left border-solid border-2 border-gray-500" type={type} placeholder={placeholder} />
</>
    )
}

