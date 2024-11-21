import { Link } from "react-router-dom"
interface RegLogHeadProps{
    title:string,
    account:string
    loginType:string
}


export const RegLogHead=({title,account,loginType}:RegLogHeadProps)=>{

    return(
        <>
        <h1 className="text-center mb-2 font-bold text-3xl">{title}</h1>
        <h3 className="text-center mb-6 text-lg ">{account}? <Link className="underline" to={loginType==="Signup"?"/signup":"/login"}>{loginType}</Link> </h3>
        </>
    )
    }