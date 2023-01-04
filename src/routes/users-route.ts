import { Router } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/users-controller";

const usersRouter = Router()
usersRouter.get('/',listar)
usersRouter.post('/',criar)
usersRouter.get('/:id',listarPorId)
usersRouter.delete('/:id',deletar)
usersRouter.put('/:id',atualizar)

export default usersRouter