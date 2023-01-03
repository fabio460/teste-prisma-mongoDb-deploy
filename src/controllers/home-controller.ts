import { Request, Response, NextFunction } from "express"
export const home =async (req:Request, res:Response, next:NextFunction) => {
    res.send(`
       <h1 style={{textAlign:'center,color:'red'}}>Bem vindo a tela principal</h1>
    `)
}