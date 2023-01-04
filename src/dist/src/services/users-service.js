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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarUser = exports.atualizarUser = exports.criarUser = exports.listarUserPorId = exports.listarUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
const listarUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.users.findMany({
            include: {
                accounts: {
                    include: {
                        creditedAccountId: {
                            include: {
                                creditedAccount: true
                            }
                        },
                        debitedAccountId: {
                            include: {
                                debitedAccount: true
                            }
                        }
                    }
                }
            },
        });
    }
    catch (error) {
        throw new Error("falha ao listar usuários: " + error);
    }
});
exports.listarUser = listarUser;
const listarUserPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.users.findMany({
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
// ao criar um usuário, a uma conta é aberta automaticamente com um valor de 100 reais
const criarUser = (id, users) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const passwordHash = (yield bcrypt_1.default.hash(users.password, 10)).toString();
        return yield prisma.users.create({
            data: {
                username: users.username,
                password: passwordHash,
                accounts: {
                    create: {
                        balance: 100
                    }
                }
            },
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.criarUser = criarUser;
const atualizarUser = (id, users) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.users.update({
            data: {
                username: users.username,
                password: users.password,
            },
            where: {
                id
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.atualizarUser = atualizarUser;
const deletarUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.users.delete({
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
