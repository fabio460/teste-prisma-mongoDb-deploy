import { Router } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/transaction-controller";

const transactionRouter = Router()
transactionRouter.get('/',listar)
transactionRouter.post('/',criar)
transactionRouter.get('/:id',listarPorId)
transactionRouter.delete('/:id',deletar)
transactionRouter.put('/:id',atualizar)
export default transactionRouter