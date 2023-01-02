import { typePost, typeUser } from "../../types";
import { listarPost } from "../services/post-service";
import { NextFunction, Request,Response } from "express";
import { criarUser, listarUser } from "../services/user-services";


export const listar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        res.json(await listarUser())
    } catch (error) {
        next(error)
    }
}

export const listarPorId =async (req:Request,res:Response,next:NextFunction) => {
    try {
        
    } catch (error) {
        throw new Error("falha: "+error);
        
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
        
    } catch (error) {
        throw new Error("falha: "+error);
        
    }
}
export const atualizar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        
    } catch (error) {
        throw new Error("falha: "+error);
        
    }
}