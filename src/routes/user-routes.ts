import { Router } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/user-controller";

const userRouter = Router()
userRouter.get('/',listar)
userRouter.post('/',criar)
userRouter.get('/:id',listarPorId)
userRouter.delete('/:id',deletar)
userRouter.put('/:id',atualizar)

export default userRouter