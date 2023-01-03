

import { PrismaClient } from "@prisma/client";
import { typePost, typeUser } from "../../types";
const prisma = new PrismaClient()

export const listarPost =async () => {
  try {
    return await prisma.post.findMany({
       include:{
        author:true
       }
    })
  } catch (error) {
    throw new Error("falha: "+ error);
  }
}

export const listarPostPorId =async (id:string) => {
    try {
      return await prisma.post.findMany({
        where:{id}
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const criarPost =async (post:typePost) => {
    try {
      return await prisma.post.create({
        data:{
          body:post.body,
          slug:post.slug,
          title:post.title,
          author:{
            connect:{
              id:post.authorId
            }
          }
        }
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const deletarPost =async (id:string) => {
    try {
      return await prisma.post.delete({
        where:{id}
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }  

  export const atualizarPost =async (id:string,post:typePost) => {
    try {
      return await prisma.post.update({
        where:{
          id
        },
        data:{
          body:post.body,
          slug:post.slug,
          title:post.title,
          authorId:post.authorId,
        },
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }