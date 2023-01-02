import { Router } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/post-controller";

const postRouter = Router()
postRouter.get('/',listar)
postRouter.post('/',criar)
postRouter.get('/:id',listarPorId)
postRouter.delete('/:id',deletar)
postRouter.put('/:id',atualizar)

export default postRouter