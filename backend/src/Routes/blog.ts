import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign,verify } from "hono/jwt";
import { Bindings } from "hono/types";



type Variables={
  userId:string
}

export const blogRouter= new Hono<{Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string,

};Variables:Variables}>();


blogRouter.use('/*',async(c,next)=>{

    const token=c.req.header('Authorization')?.split(" ")[1] || "";
  
       const res=await verify(token,c.env.JWT_SECRET);
    console.log("GOt token",token);
  
    if(res.id){
    c.set('userId',String(res.id));
      await next();
    }
    else{
      c.status(403);
      return c.json({
        msg:"Error authenticaion"
      })
    }
  
  
  
  })
  
  
blogRouter.get('/getallblogs', async (c) => {
    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
    const posts=await prisma.post.findMany({
      select:{
        title:true,
        content:true,
        id:true,
        author:{
          select:{
            username:true
          }
        }
      }
    });
    return c.json(posts);
  })
  
blogRouter.post('/createblog',async (c)=>{
  const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate());

const body=await c.req.json(); 

console.log("Came Till here");
console.log(c.get('userId'));

const created= await prisma.post.create({
    data:{
        title:body.title,
        content:body.content,
        authorId:c.get('userId')
    }
})

 
return c.json({msg:created.id});
  })
  
blogRouter.put('/updateblog',async (c)=>{

   const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());

   const body=await c.req.json();

   const update=await prisma.post.update({
    where:{
      id:body.id
    }
    ,data:{
      title:body.title,
      content:body.content
    }
   })
    return c.text("Updated the content and title");
  })
  // blogRouter.get('/getblog/',async(c)=>{
  //    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
  //    const body=await c.req.json();

  //    try{
  //     const post=await prisma.post.findFirst({
  //       where:{
  //         id:body.id
  //       }
  //     })

  //     return c.json(post);
  //    }catch(e){
  //     c.status(404);
  //      return c.json({msg:"Not found"});

  //    }


  // })

  blogRouter.get("/getblog/:id",async(c)=>{
    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());;

    const id=c.req.param('id');
    const post=await prisma.post.findFirst({
      where:{
        id:id
      },
      select:{
        id:true,
        content:true,
        title:true,
        author:{
          select:{
            username:true
          }
        }
      }
    })

    return c.json(post);
  })
  
  
  blogRouter.get('/getalltitle', async(c)=>{
    const prisma=new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
    
    const posts=await prisma.post.findMany({
      select:{
        title:true
      }
    });

    return c.json(posts);

  })

  

  
  
  