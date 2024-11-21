

import {RegLogHead} from "../Components/RegLogHead.tsx"
import { InputLabel } from "../Components/InputLabel.tsx"
import { Button } from "../Components/Button.tsx"
import { Quote } from "../Components/Quote.tsx"
import { useState } from "react"
import { SignupInput } from "@hamdan07/medium-common"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config.ts"
import axios from "axios"

export const Signup=()=>{


    const [postInputs,setPostInputs]=useState<SignupInput>({
        username:"",
        email:"",
        password:""
    })

    const navigate=useNavigate();

    const sendSignupRequest=async()=>{
      try{
          const response=await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInputs);
          const jwt=response.data.token;
          localStorage.setItem("token",jwt);
           navigate("/blogs");
      }catch(e){
  
      }
    }
  



    return( <div className="h-screen flex flex-row justify-center lg:justify-evenly ">
        {/* After dividing the portion into two equal halves */}
        <div className="w-full flex justify-center items-center ">
 {/* OPening of the middle Div  */}
            <div className=" w-96">
      <RegLogHead loginType="Login" title="Create an account" account="Already Have an Account"></RegLogHead>
      <InputLabel onChange={(e)=>{setPostInputs(c=>({...c,username:e.target.value}))}} label="Username" type="text" placeholder="Enter your Username"></InputLabel>

      <InputLabel onChange={(e)=>{setPostInputs(c=>({...c,email:e.target.value}))}} label="Email" type="email" placeholder="Enter your Email"></InputLabel>

      <InputLabel onChange={(e)=>{setPostInputs(c=>({...c,password:e.target.value}))}} label="Password" type="password" placeholder="Enter your Password"></InputLabel>
      <Button onClick={sendSignupRequest} text="Sign-up"></Button>
            </div>
        </div>

        <div className="hidden lg:flex bg-slate-200 items-center justify-center  h-screen w-full text-center">

            <div className=" w-96 items-center justify-center">
            <Quote></Quote>
            </div>

 

        </div>
            

    </div>)
}