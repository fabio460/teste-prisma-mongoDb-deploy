import { typeUser } from "../../types";
import { NextFunction, Request,Response } from "express";
import { criarUser, deletarUser, listarUser, listarUserPorId } from "../services/user-services";


export const listar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        res.json(await listarUser())
    } catch (error) {
        next(error)
    }
}

export const listarPorId =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params.id
        console.log(id)
        res.json(await listarUserPorId(id))
    } catch (error) {
        next(error)
    }
}
export const criar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const user:typeUser = req.body
        const id = req.params.toString()
        res.json(await criarUser(id,user))
    } catch (error) {
        next(error)
        
    }
}
export const deletar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params.id
        console.log(id)
        res.json(await deletarUser(id))
    } catch (error) {
        next(error)
    }
}
export const atualizar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id = req.params._id
    } catch (error) {
        throw new Error("falha: "+error);
        
    }
}