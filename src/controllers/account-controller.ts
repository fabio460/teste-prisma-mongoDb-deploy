import { accountType, transactionType } from "../../types";
import { NextFunction, Request,Response } from "express";
import { atualizarTransactions, criarTransactions, deletarTransactions, listarTransactions, listarTransactionsPorId } from "../services/transactios-service";
import { atualizarAccount, criarAccount, deletarAccount, listarAccount, listarAccountPorId } from "../services/account.service";




export const listar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        res.json(await listarAccount())
    } catch (error) {
        next(error)
    }
}

export const listarPorId =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params.id
        console.log(id)
        res.json(await listarAccountPorId(id))
    } catch (error) {
        next(error)
    }
}
export const criar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const account:accountType = req.body
        const id = req.params.id
        res.json(await criarAccount(id,account))
    } catch (error) {
        next(error)
        
    }
}
export const deletar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params.id
        console.log(id)
        res.json(await deletarAccount(id))
    } catch (error) {
        next(error)
    }
}
export const atualizar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params._id
        const account:accountType = req.body
        
    } catch (error) {
        throw new Error("falha: "+error);
        
    }
}
