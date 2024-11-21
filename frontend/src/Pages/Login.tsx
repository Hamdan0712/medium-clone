

import {RegLogHead} from "../Components/RegLogHead.tsx"
import { InputLabel } from "../Components/InputLabel.tsx"
import { Button } from "../Components/Button.tsx"
import { Quote } from "../Components/Quote.tsx"
import { useState } from "react"
import { SigninInput } from "@hamdan07/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config.ts"
import { useNavigate } from "react-router-dom"


export const Login=()=>{

    const [postInputs,setPostInputs]=useState<SigninInput>({
        email:"",
        password:""
    })
    const navigate=useNavigate();

  const sendSigninRequest=async()=>{
    try{
        const response=await axios.post(`${BACKEND_URL}/api/v1/user/login`,postInputs);
        const jwt=response.data.token;
        localStorage.setItem("token",jwt);
         navigate("/blogs");
    }catch(e){

    }
  }

   

    return( <div className="h-screen flex flex-row items-center justify-center lg:justify-evenly ">
        {/* After dividing the portion into two equal halves */}
        <div className="w-full flex justify-center items-center ">
 {/* OPening of the middle Div  */}
            <div className=" w-96">
      <RegLogHead title="Login" account="Dont have an Account" loginType="Signup"></RegLogHead>

      <InputLabel onChange={(e)=>{setPostInputs(c=>({...c,email:e.target.value}))}} label="Email" type="email" placeholder="Enter your Email"></InputLabel>

      <InputLabel onChange={(e)=>{setPostInputs(c=>({...c,password:e.target.value}))}} label="Password" type="password" placeholder="Enter your Password"></InputLabel>
      <Button onClick={sendSigninRequest} text="Login"></Button>
            </div>
        </div>

        <div className="hidden lg:flex bg-slate-200  items-center justify-center  h-screen w-full text-center">

            <div className=" w-96 items-center justify-center">
            <Quote></Quote>
            </div>

 

        </div>
            

    </div>)
}