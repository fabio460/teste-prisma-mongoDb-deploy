"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const home_routes_1 = __importDefault(require("./home-routes"));
const post_routes_1 = __importDefault(require("./post-routes"));
const transaction_route_1 = __importDefault(require("./transaction-route"));
const user_routes_1 = __importDefault(require("./user-routes"));
const users_route_1 = __importDefault(require("./users-route"));
exports.routes = [
    { endpoint: '/', routes: home_routes_1.default },
    { endpoint: '/post', routes: post_routes_1.default },
    { endpoint: '/user', routes: user_routes_1.default },
    { endpoint: '/users', routes: users_route_1.default },
    { endpoint: '/transactios', routes: transaction_route_1.default },
];
