import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { Bindings } from "hono/types";
import {signupInput} from "@hamdan07/medium-common"


export const userRouter=new Hono<{Bindings:{DATABASE_URL:string,JWT_SECRET:string}}>();


userRouter.post('/signup',async (c) => {

    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const body= await c.req.json();

    const {success}=signupInput.safeParse(body);

    if(!success){
      c.status(411);
      c.json({
        msg:"Wrong INput formatss"
      })
    }
    
    
    try{

      const user=await prisma.user.create({
        data:{
          email: body.email,
          password:body.password,
          username:body.username
        },
      })
      
      
      
      
      const secret=c.env.JWT_SECRET
      
      const token= await sign(
        {
          id:user.id
        },
        secret);
        
        return c.json({
          token:token,
          id:user.id
        });
      }catch(e){
        c.status(400);
        return c.json({
          message:"wrongIn"
        })
      }
      })
    
    
    userRouter.post('/login', async (c) => {
      const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
      }).$extends(withAccelerate());
    
      const body=await c.req.json();
    
    
    const user =await prisma.user.findUnique({
      where:{
        email:body.email,
        password:body.password
      }
    })
    
    
       if(!user){
        c.status(403);
        return c.json({
          message:"please Register"
        })
       }
    
       const token=await sign({id:user.id},c.env.JWT_SECRET);
    
    
      return c.json({
        message:"Login success",
        token:token
      })
    })
    