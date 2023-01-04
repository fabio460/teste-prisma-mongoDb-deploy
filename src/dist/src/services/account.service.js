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
exports.cashIn = exports.deletarAccount = exports.atualizarAccount = exports.criarAccount = exports.listarAccountPorId = exports.listarAccount = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listarAccount = () => __awaiter(void 0, void 0, void 0, function* () {
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
exports.listarAccount = listarAccount;
const listarAccountPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.accounts.findUnique({
            where: {
                id
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.listarAccountPorId = listarAccountPorId;
const criarAccount = (id, account) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.criarAccount = criarAccount;
const atualizarAccount = (id, value) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.accounts.update({
            data: {
                balance: value,
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
exports.atualizarAccount = atualizarAccount;
const deletarAccount = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.deletarAccount = deletarAccount;
const cashIn = (idCashIn, idcashOut, value) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cashInAccount = yield (0, exports.listarAccountPorId)(idCashIn);
        const cashOutAccount = yield (0, exports.listarAccountPorId)(idcashOut);
        const balanceCashIn = cashInAccount === null || cashInAccount === void 0 ? void 0 : cashInAccount.balance;
        const balanceCashout = cashOutAccount === null || cashOutAccount === void 0 ? void 0 : cashOutAccount.balance;
        (0, exports.atualizarAccount)(idCashIn, balanceCashIn !== null && balanceCashIn !== void 0 ? balanceCashIn : +value);
        (0, exports.atualizarAccount)(idcashOut, balanceCashout !== null && balanceCashout !== void 0 ? balanceCashout : -value);
        return 'transação feita com sucesso';
    }
    catch (error) {
        return error;
    }
});
exports.cashIn = cashIn;
