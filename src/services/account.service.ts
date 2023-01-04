

import { PrismaClient } from "@prisma/client";
import { accountType, transactionType } from "../../types";
const prisma = new PrismaClient()

export const listarAccount =async () => {
  try {
     return await prisma.accounts.findMany({
       include:{
          users:true
       }
     })
  } catch (error) {
    throw new Error("falha ao listar transações: "+ error);
  }
}

  export const listarAccountPorId =async (id:string) => {
    try {      
      return await prisma.accounts.findUnique({
        where:{
          id
        }
      })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  
  export const criarAccount =async (id:string, account:accountType) => {
    try {      
     
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const atualizarAccount =async (id:string, value:number) => {
    try {
       return await prisma.accounts.update({
        data:{
            balance: value,
        },
        where:{
            id
        }
       })
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const deletarAccount =async (id:string) => {
    try {

    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }  

  export const cashIn =async (idCashIn:string, idcashOut:string, value:number) => {
     try {
        const cashInAccount = await listarAccountPorId(idCashIn)
        const cashOutAccount = await listarAccountPorId(idcashOut)
        const balanceCashIn = cashInAccount?.balance
        const balanceCashout = cashOutAccount?.balance
        atualizarAccount(idCashIn,balanceCashIn?? + value)
        atualizarAccount(idcashOut,balanceCashout?? - value)
        return 'transação feita com sucesso'
     } catch (error) {
        return error
     }
  }
