import { transactionType } from "../../types";
import { NextFunction, Request,Response } from "express";
import { atualizarTransactions, criarTransactions, deletarTransactions, listarTransactions, listarTransactionsPorId } from "../services/transactios-service";




export const listar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        res.json(await listarTransactions())
    } catch (error) {
        next(error)
    }
}

export const listarPorId =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params.id
        console.log(id)
        res.json(await listarTransactionsPorId(id))
    } catch (error) {
        next(error)
    }
}
export const criar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const transaction:transactionType = req.body
        const id = req.params.id
        res.json(await criarTransactions(id,transaction))
    } catch (error) {
        next(error)
        
    }
}
export const deletar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params.id
        console.log(id)
        res.json(await deletarTransactions(id))
    } catch (error) {
        next(error)
    }
}
export const atualizar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params._id
        const transaction:transactionType = req.body
        res.json(await atualizarTransactions(id,transaction))
    } catch (error) {
        throw new Error("falha: "+error);
        
    }
}