

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const listarPost =async () => {
  try {
    return await prisma.post.findMany()
  } catch (error) {
    throw new Error("falha: "+ error);
  }
}

export const listarPostPorId =async () => {
    try {
      return await prisma.post.findMany()
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const criarPost =async () => {
    try {
      return await prisma.post.findMany()
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const deletarPost =async () => {
    try {
      return await prisma.post.findMany()
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }  

  export const atualizarPost =async () => {
    try {
      return await prisma.post.findMany()
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }