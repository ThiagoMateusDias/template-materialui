"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const header_1 = __importDefault(require("./components/header"));
const ListarTarefa_1 = __importDefault(require("./pages/tarefa/ListarTarefa"));
const Login_1 = __importDefault(require("./pages/Login"));
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(header_1.default, null),
        React.createElement(Login_1.default, null)));
}
exports.default = App;
