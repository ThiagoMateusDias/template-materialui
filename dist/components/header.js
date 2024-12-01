"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
//import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (React.createElement(Box_1.default, { sx: { flexGrow: 1 } },
        React.createElement(AppBar_1.default, { position: "static" },
            React.createElement(Toolbar_1.default, null,
                React.createElement(IconButton_1.default, { size: "large", edge: "start", color: "inherit", "aria-label": "menu", sx: { mr: 2 } }),
                React.createElement(Typography_1.default, { variant: "h6", component: "div", sx: { flexGrow: 1 } }, "Gerenciamento de Projetos")))));
}
exports.default = Header;
