import { typePost } from "../../types";
import { NextFunction, Request,Response } from "express";
import { listarUser } from "../services/user-services";
import { atualizarPost, criarPost, deletarPost, listarPost } from "../services/post-service";


export const listar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        res.json(await listarPost())
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
        const user:typePost = req.body
        res.json(await criarPost(user))
    } catch (error) {
       next(error)
        
    }
}
export const deletar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id:string = req.params.toString()
        res.json(await deletarPost(id))
    } catch (error) {
        throw new Error("falha: "+error);
        
    }
}
export const atualizar =async (req:Request,res:Response,next:NextFunction) => {
    try {
        const id:string = req.params.toString() 
        const user:typePost = req.body
        res.json(await atualizarPost(id,user))      
    } catch (error) {
        throw new Error("falha: "+error);
        
    }
}