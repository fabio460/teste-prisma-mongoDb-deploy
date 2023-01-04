

import { PrismaClient } from "@prisma/client";
import { usersType } from "../../types";
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export const listarUser =async () => {
  try {
     return await prisma.users.findMany({
      include:{
        accounts:{
          include:{
            creditedAccountId:{
              include:{
                creditedAccount:true
              }
            },
            debitedAccountId:{
              include:{
                debitedAccount:true
              }
            }
          }
        }
      },
    
     })
  } catch (error) {
    throw new Error("falha ao listar usuários: "+ error);
  }
}

export const listarUserPorId =async (id:string) => {
    try {
       return await prisma.users.findMany({
        where:{
          id
        }
       })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  // ao criar um usuário, a uma conta é aberta automaticamente com um valor de 100 reais
  export const criarUser =async (id:string, users:usersType) => {
    try {    
      const passwordHash = (await bcrypt.hash(users.password,10)).toString()
      
      return await prisma.users.create({
        data:{
          username:users.username,
          password: passwordHash,
          accounts:{
           create:{
            balance:100
           }
          }
        },
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const atualizarUser =async (id:string, users:usersType) => {
    try {
      return await prisma.users.update({
        data:{
          username:users.username,
          password: users.password,
        },
        where:{
          id
        }
      })   
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const deletarUser =async (id:string) => {
    try {
       return await prisma.users.delete({
        where:{
          id
        }
       })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }  

