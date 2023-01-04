"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users-controller");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/', users_controller_1.listar);
usersRouter.post('/', users_controller_1.criar);
usersRouter.get('/:id', users_controller_1.listarPorId);
usersRouter.delete('/:id', users_controller_1.deletar);
usersRouter.put('/:id', users_controller_1.atualizar);
exports.default = usersRouter;
