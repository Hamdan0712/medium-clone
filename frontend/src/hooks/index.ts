import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";


export interface Blog{
    id:string
    title:string,
    content:string,
    author:{
        username:string
    }
}


export const useBlogs=()=>{

const [loading,setLoading]= useState(true);
const [blogs,setBlogs]=useState<Blog[]>([]);

useEffect(()=>{
  axios.get(`${BACKEND_URL}/api/v1/blog/getallblogs`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then(response=>{
    setBlogs(response.data);
    setLoading(false);
  })


 
},[])


return{
    loading,blogs
}
}



export const useBlog=({id}:{id:string})=>{

    const [loading,setLoading]= useState(true);
    const [blog,setBlogs]=useState<Blog>();
    
    useEffect(()=>{
      axios.get(`${BACKEND_URL}/api/v1/blog/getblog/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then(response=>{
        setBlogs(response.data);
        setLoading(false);
      })
    
    
     
    },[id])

    return{loading,blog};

}