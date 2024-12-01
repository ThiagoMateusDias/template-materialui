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
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const MoveToInbox_1 = __importDefault(require("@mui/icons-material/MoveToInbox"));
const Mail_1 = __importDefault(require("@mui/icons-material/Mail"));
const Login = () => {
    const [login, setLogin] = (0, react_1.useState)("");
    const [senha, setSenha] = (0, react_1.useState)("");
    const [menuOpen, setMenuOpen] = (0, react_1.useState)(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setMenuOpen(open);
    };
    const menuList = (react_1.default.createElement(material_1.Box, { sx: { width: 250 }, role: "presentation", onClick: toggleDrawer(false), onKeyDown: toggleDrawer(false) },
        react_1.default.createElement(material_1.List, null, ["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (react_1.default.createElement(material_1.ListItem, { key: text, disablePadding: true },
            react_1.default.createElement(material_1.ListItemButton, null,
                react_1.default.createElement(material_1.ListItemIcon, null, index % 2 === 0 ? react_1.default.createElement(MoveToInbox_1.default, null) : react_1.default.createElement(Mail_1.default, null)),
                react_1.default.createElement(material_1.ListItemText, { primary: text })))))),
        react_1.default.createElement(material_1.Divider, null),
        react_1.default.createElement(material_1.List, null, ["All mail", "Trash", "Spam"].map((text, index) => (react_1.default.createElement(material_1.ListItem, { key: text, disablePadding: true },
            react_1.default.createElement(material_1.ListItemButton, null,
                react_1.default.createElement(material_1.ListItemIcon, null, index % 2 === 0 ? react_1.default.createElement(MoveToInbox_1.default, null) : react_1.default.createElement(Mail_1.default, null)),
                react_1.default.createElement(material_1.ListItemText, { primary: text }))))))));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { onClick: toggleDrawer(true), variant: "contained", sx: { mb: 2 } }, "Abrir Menu"),
        react_1.default.createElement(material_1.Drawer, { anchor: "left", open: menuOpen, onClose: toggleDrawer(false) }, menuList),
        react_1.default.createElement(material_1.Box, { sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
                padding: 2,
            } },
            react_1.default.createElement(material_1.Box, { sx: {
                    width: "100%",
                    maxWidth: 400,
                    padding: 4,
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                } },
                react_1.default.createElement(material_1.Grid, { container: true, spacing: 2 },
                    react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
                        react_1.default.createElement(material_1.FormControl, { fullWidth: true },
                            react_1.default.createElement(material_1.Input, { id: "login_nome", "aria-describedby": "login_nome_helper_text", value: login, onChange: (e) => setLogin(e.target.value), placeholder: "Digite seu login" }),
                            react_1.default.createElement(material_1.FormHelperText, { id: "login_nome_helper_text" }, "Login"))),
                    react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
                        react_1.default.createElement(material_1.FormControl, { fullWidth: true },
                            react_1.default.createElement(material_1.Input, { id: "login_senha", type: "password", "aria-describedby": "login_senha_helper_text", value: senha, onChange: (e) => setSenha(e.target.value), placeholder: "Digite sua senha" }),
                            react_1.default.createElement(material_1.FormHelperText, { id: "login_senha_helper_text" }, "Senha"))),
                    react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
                        react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", fullWidth: true }, "Entrar")))))));
};
exports.default = Login;
