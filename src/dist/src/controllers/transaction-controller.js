"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizar = exports.deletar = exports.criar = exports.listarPorId = exports.listar = void 0;
const transactios_service_1 = require("../services/transactios-service");
const listar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield (0, transactios_service_1.listarTransactions)());
    }
    catch (error) {
        next(error);
    }
});
exports.listar = listar;
const listarPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        res.json(yield (0, transactios_service_1.listarTransactionsPorId)(id));
    }
    catch (error) {
        next(error);
    }
});
exports.listarPorId = listarPorId;
const criar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = req.body;
        const id = req.params.id;
        res.json(yield (0, transactios_service_1.criarTransactions)(id, transaction));
    }
    catch (error) {
        next(error);
    }
});
exports.criar = criar;
const deletar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        res.json(yield (0, transactios_service_1.deletarTransactions)(id));
    }
    catch (error) {
        next(error);
    }
});
exports.deletar = deletar;
const atualizar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params._id;
        const transaction = req.body;
        res.json(yield (0, transactios_service_1.atualizarTransactions)(id, transaction));
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.atualizar = atualizar;
