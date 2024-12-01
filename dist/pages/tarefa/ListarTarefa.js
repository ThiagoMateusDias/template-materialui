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
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableContainer_1 = __importDefault(require("@mui/material/TableContainer"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const CardActions_1 = __importDefault(require("@mui/material/CardActions"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
const Modal_1 = __importDefault(require("@mui/material/Modal"));
const CriarTarefa_1 = __importDefault(require("./CriarTarefa"));
const EditarTarefa_1 = __importDefault(require("./EditarTarefa"));
// A função abaixo é usada para criar o array contendo os dados iniciais da listagem de tarefas.
function createData(idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa) {
    return {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        statusTarefa,
        recursoTarefa,
    };
}
// Definição do array contendo os dados iniciais da listagem de tarefas
const initialRows = [
    createData(1, "Tarefa 1", "Descrição da Tarefa 1", "2022-01-01", "2022-01-02", "Concluída", "Recurso 1"),
    createData(2, "Tarefa 2", "Descrição da Tarefa 2", "2022-01-03", "2022-01-04", "Em Andamento", "Recurso 2"),
    createData(3, "Tarefa 3", "Descrição da Tarefa 3", "2022-01-04", "2022-01-05", "Em Andamento", "Recurso 3"),
    createData(4, "Tarefa 4", "Descrição da Tarefa 4", "2022-01-05", "2022-01-06", "Em Andamento", "Recurso 4"),
    createData(5, "Tarefa 5", "Descrição da Tarefa 5", "2022-01-06", "2022-01-07", "Em Andamento", "Recurso 5"),
    createData(6, "Tarefa 6", "Descrição da Tarefa 6", "2022-01-07", "2022-01-08", "Aguardando", "Recurso 6"),
];
//Componente ListarTarefa
const ListarTarefa = () => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [openEditar, setOpenEditar] = (0, react_1.useState)(false);
    const [tarefas, setTarefas] = (0, react_1.useState)([]);
    const [tarefa, setTarefa] = (0, react_1.useState)();
    const [idTarefaSelecionada, setIdTarefaSelecionada] = (0, react_1.useState)([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenEditar = () => setOpenEditar(true);
    const handleCloseEditar = () => setOpenEditar(false);
    //O array definido acima é setado como conteúdo do state Tarefas na renderização inicial do componente.
    (0, react_1.useEffect)(() => {
        setTarefas(initialRows);
    }, []);
    const handleEditar = (id) => {
        setIdTarefaSelecionada(id);
        //Objeto local para armazenamento da tarefa filtrada de acordo com a seleção do usuário
        let tarefaParaEditar = tarefas.filter((obj) => {
            return obj.idTarefa === id;
        })[0];
        //Atribuição do Objeto local, setado acima, ao state Tarefa
        setTarefa(tarefaParaEditar);
        //Seta como true o state responsável pela exibição do Model de Editar Tarefa
        setOpenEditar(true);
    };
    const handleDeletar = (id) => {
        setTarefas((current) => current.filter((tarefa) => {
            return tarefa.idTarefa !== id;
        }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Card_1.default, null,
            react_1.default.createElement(CardHeader_1.default, { title: "Tarefas", subheader: "Listagem de Tarefas" }),
            react_1.default.createElement(CardContent_1.default, null,
                react_1.default.createElement(TableContainer_1.default, { component: Paper_1.default },
                    react_1.default.createElement(Table_1.default, { sx: { minWidth: 650 }, size: "small", "aria-label": "a dense table" },
                        react_1.default.createElement(TableHead_1.default, null,
                            react_1.default.createElement(TableRow_1.default, null,
                                react_1.default.createElement(TableCell_1.default, null, "#"),
                                react_1.default.createElement(TableCell_1.default, null, "T\u00EDtulo"),
                                react_1.default.createElement(TableCell_1.default, { align: "right" }, "Descri\u00E7\u00E3o"),
                                react_1.default.createElement(TableCell_1.default, { align: "right" }, "Data de In\u00EDcio"),
                                react_1.default.createElement(TableCell_1.default, { align: "right" }, "Data de Finaliza\u00E7\u00E3o"),
                                react_1.default.createElement(TableCell_1.default, { align: "right" }, "Status"),
                                react_1.default.createElement(TableCell_1.default, { align: "right" }, "Recurso"),
                                react_1.default.createElement(TableCell_1.default, { align: "left" }),
                                react_1.default.createElement(TableCell_1.default, { align: "left" }))),
                        react_1.default.createElement(TableBody_1.default, null, tarefas.map((row, indice) => (react_1.default.createElement(TableRow_1.default, { key: indice, sx: { "&:last-child td, &:last-child th": { border: 0 } } },
                            react_1.default.createElement(TableCell_1.default, { component: "th", scope: "row" }, row.idTarefa),
                            react_1.default.createElement(TableCell_1.default, { component: "th", scope: "row" }, row.tituloTarefa),
                            react_1.default.createElement(TableCell_1.default, { align: "right" }, row.descricaoTarefa),
                            react_1.default.createElement(TableCell_1.default, { align: "right" }, row.inicioTarefa),
                            react_1.default.createElement(TableCell_1.default, { align: "right" }, row.fimTarefa),
                            react_1.default.createElement(TableCell_1.default, { align: "right" }, row.statusTarefa),
                            react_1.default.createElement(TableCell_1.default, { align: "right" }, row.recursoTarefa),
                            react_1.default.createElement(TableCell_1.default, { align: "center" },
                                react_1.default.createElement(Button_1.default, { variant: "contained", color: "success", onClick: () => handleEditar(row.idTarefa) },
                                    react_1.default.createElement(Edit_1.default, { fontSize: "small" }))),
                            react_1.default.createElement(TableCell_1.default, { align: "center" },
                                react_1.default.createElement(Button_1.default, { variant: "contained", color: "error", onClick: () => handleDeletar(row.idTarefa) },
                                    react_1.default.createElement(Delete_1.default, { fontSize: "small" })))))))))),
            react_1.default.createElement(CardActions_1.default, null,
                react_1.default.createElement(Button_1.default, { size: "small", variant: "contained", onClick: handleOpen }, "Criar Tarefa"),
                react_1.default.createElement(Button_1.default, { size: "small", variant: "outlined" }, "Cancelar"))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(Modal_1.default, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(CriarTarefa_1.default, { handleClose: handleClose, tarefas: tarefas, setTarefas: setTarefas })))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(Modal_1.default, { open: openEditar, onClose: handleCloseEditar, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(EditarTarefa_1.default, { handleCloseEditar: handleCloseEditar, idTarefaSelecionada: idTarefaSelecionada, tarefas: tarefas, tarefa: tarefa, setTarefas: setTarefas }))))));
};
exports.default = ListarTarefa;
