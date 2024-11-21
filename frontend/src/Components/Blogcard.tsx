import profile from "../assets/profile.png";
import  article from "../assets/article.jpg"
import { Link } from "react-router-dom";


interface BlogcardProps{
    id:string,
    Author:string,
    publishedDate:string,
    content:string,
    title:string,
  

}
export const Blogcard=({Author,publishedDate,content,title,id}:BlogcardProps)=>{

    return (
        <>
        <Link to={`/blog/${id}`}>
       
        <div className="mt-2 border-t-2 border-b-2 border-solid border-gray-200 p-1 grid h-auto md:grid-cols-2 justify-end">
            <div className="w-96">

          <div className="flex w-96 justify-between"> 
<div className="flex gap-2">
<div>
    <img className="rounded-full w-6 h-6" src={profile} alt="" />
</div>
    <p>{Author}</p>
</div>
<div>
    <p>{publishedDate}</p>
</div>
<div className="flex gap-3">
    <p>&copy;</p>
    <p>Member only</p>
</div>

          </div>
  
          {/* content and title */}
          <div className="w-96">
            <h2 className="font-bold mt-2 mb-2">{title}</h2>
          </div>

          <div className="text-gray-400 h-20  w-30 break-words">
        {content.slice(0,100)}...
          </div>

              <div className="flex w-96 justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="bg-slate-300 rounded-lg p-1">Side Hustle</div>
                <p>{Math.ceil(content.length/100)}Minutes read</p>
                </div>
                <div className="flex gap-2">
                      <p>&copy;</p>
                      <p>&copy;</p>
                      <p>&copy;</p>
                </div>
              </div>

            </div>
            <div className="p-2 w-60 h-40  justify-self-center md:justify-self-end">
                <img className="h-40" src={article} alt="" />
            </div>
        </div>
        </Link>
        </>
    )
}