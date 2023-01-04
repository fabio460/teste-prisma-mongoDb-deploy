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
exports.deletarTransactions = exports.atualizarTransactions = exports.criarTransactions = exports.listarTransactionsPorId = exports.listarTransactions = void 0;
const client_1 = require("@prisma/client");
const account_service_1 = require("./account.service");
const prisma = new client_1.PrismaClient();
const listarTransactions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.accounts.findMany({
            include: {
                users: true
            }
        });
    }
    catch (error) {
        throw new Error("falha ao listar transações: " + error);
    }
});
exports.listarTransactions = listarTransactions;
const listarTransactionsPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.listarTransactionsPorId = listarTransactionsPorId;
// ao criar um usuário, a uma conta é aberta automaticamente com um valor de 100 reais
const criarTransactions = (id, transaction) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, account_service_1.cashIn)(transaction.creditedAccountId, transaction.debitedAccountId, transaction.value);
        return yield prisma.transactions.create({
            data: {
                value: transaction.value,
                creditedAccountId: transaction.creditedAccountId,
                debitedAccountId: transaction.debitedAccountId
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.criarTransactions = criarTransactions;
const atualizarTransactions = (id, transaction) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.atualizarTransactions = atualizarTransactions;
const deletarTransactions = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.deletarTransactions = deletarTransactions;
