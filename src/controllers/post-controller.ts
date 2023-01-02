import { typePost } from "../../types";
import { NextFunction, Request,Response } from "express";
import { listarUser } from "../services/user-services";


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
        
    } catch (error) {
        throw new Error("falha: "+error);
        
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