

import { PrismaClient } from "@prisma/client";
import { typeUser } from "../../types";
const prisma = new PrismaClient()

export const listarUser =async () => {
  try {
    return await prisma.user.findMany()
  } catch (error) {
    throw new Error("falha: "+ error);
  }
}

export const listarUserPorId =async (id:string) => {
    try {
      return await prisma.user.findMany({
        where:{
            id
        }
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const criarUser =async (id:string,user:typeUser) => {
    try {
      return await prisma.user.create({
        data:{
            email:user.email,
            name:user.name,
        }
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const deletarUser =async (id:string) => {
    try {
      return await prisma.user.delete({
        where:{
            id
        }
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }  

  export const atualizarUser =async (id:string,user:typeUser) => {
    try {
      return await prisma.user.update(
        {
            data:{
                email:user.email,
                name:user.name
            }, 
            where:{id}
        }
      )
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }