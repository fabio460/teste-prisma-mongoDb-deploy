"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./src/routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
routes_1.routes.forEach(e => {
    app.use(e.endpoint, e.routes);
});
app.use((err, req, res, next) => {
    res.status(400).json({ "erro": err.message });
});
app.listen(4000, () => {
    console.log('rodando na porta 4000');
});
