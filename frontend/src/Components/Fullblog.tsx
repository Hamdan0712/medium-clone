import { Blog } from "../hooks"
import { Topbar } from "./Topbar"
export const Fullblog=({blog}:{blog:Blog})=>{
    return(
        <>
        <Topbar email={blog.author.username} onClick={e=>e}></Topbar>
        <div className="grid grid-cols-12 p-10 ">
            <div className="col-span-8">
             <h1 className="font-extrabold text-4xl">{blog.title}</h1>
               <p className="font-semibold w-full mt-4">{blog.content}</p> 
               

            </div>
        <div className="col-span-4 justify-self-center">
            <p>Author</p>

            <div className="flex gap-4 justify-center items-center">

            <div className="rounded-full bg-slate-500 flex justify-center items-center w-10 h-10">{blog.author.username.substring(0,1).toUpperCase()}</div>
            <p className="border-2 w-40 mt-2 p-2 border-solid border-gray-600 rounded-lg">Written by {blog.author.username}</p>
            </div>
        </div>
        </div>
            </>
    )
}