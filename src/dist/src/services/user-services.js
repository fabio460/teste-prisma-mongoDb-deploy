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
exports.atualizarUser = exports.deletarUser = exports.criarUser = exports.listarUserPorId = exports.listarUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listarUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.user.findMany({
            include: {
                posts: true
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.listarUser = listarUser;
const listarUserPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.user.findMany({
            where: {
                id
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.listarUserPorId = listarUserPorId;
const criarUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.criarUser = criarUser;
const deletarUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.user.delete({
            where: {
                id
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.deletarUser = deletarUser;
const atualizarUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.user.update({
            data: {
                email: user.email,
                name: user.name
            },
            where: { id }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.atualizarUser = atualizarUser;
