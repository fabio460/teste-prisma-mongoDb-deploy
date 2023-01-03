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
exports.atualizarPost = exports.deletarPost = exports.criarPost = exports.listarPostPorId = exports.listarPost = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listarPost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.post.findMany({
            include: {
                author: true
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.listarPost = listarPost;
const listarPostPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.post.findMany({
            where: { id }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.listarPostPorId = listarPostPorId;
const criarPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.post.create({
            data: {
                body: post.body,
                slug: post.slug,
                title: post.title,
                author: {
                    connect: {
                        id: post.authorId
                    }
                }
            }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.criarPost = criarPost;
const deletarPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.post.delete({
            where: { id }
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.deletarPost = deletarPost;
const atualizarPost = (id, post) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.post.update({
            where: {
                id
            },
            data: {
                body: post.body,
                slug: post.slug,
                title: post.title,
                authorId: post.authorId,
            },
        });
    }
    catch (error) {
        throw new Error("falha: " + error);
    }
});
exports.atualizarPost = atualizarPost;
