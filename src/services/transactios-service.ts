

import { PrismaClient } from "@prisma/client";
import { transactionType } from "../../types";
import { cashIn } from "./account.service";
const prisma = new PrismaClient()

export const listarTransactions =async () => {
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

  export const listarTransactionsPorId =async (id:string) => {
 
  }

  // ao criar um usuário, a uma conta é aberta automaticamente com um valor de 100 reais
  export const criarTransactions =async (id:string, transaction:transactionType) => {
    try {      
      await cashIn(transaction.creditedAccountId,transaction.debitedAccountId,transaction.value)
      return await prisma.transactions.create({
        data:{
            value:transaction.value,
            creditedAccountId:transaction.creditedAccountId,
            debitedAccountId:transaction.debitedAccountId
        }
      })

    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const atualizarTransactions =async (id:string, transaction:transactionType) => {
    try {
  
    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }

  export const deletarTransactions =async (id:string) => {
    try {

    } catch (error) {
      throw new Error("falha: "+ error);
    }
  }  

