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
const post_service_1 = require("../services/post-service");
const listar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield (0, post_service_1.listarPost)());
    }
    catch (error) {
        next(error);
    }
});
exports.listar = listar;
const listarPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        next(error);
    }
});
exports.listarPorId = listarPorId;
const criar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        res.json(yield (0, post_service_1.criarPost)(user));
    }
    catch (error) {
        next(error);
    }
});
exports.criar = criar;
const deletar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        res.json(yield (0, post_service_1.deletarPost)(id));
    }
    catch (error) {
        next(error);
    }
});
exports.deletar = deletar;
const atualizar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = req.body;
        res.json(yield (0, post_service_1.atualizarPost)(id, user));
    }
    catch (error) {
        next(error);
    }
});
exports.atualizar = atualizar;
