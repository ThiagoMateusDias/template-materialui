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
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Select_1 = __importDefault(require("@mui/material/Select"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const CardActions_1 = __importDefault(require("@mui/material/CardActions"));
const Button_1 = __importDefault(require("@mui/material/Button"));
//Declaração do componente CriarTarefa, recebendo como props, do Componente ListarTarefa, os states handClose, tarefas e setTarefas
const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
    const [idTarefa, setIdTarefa] = (0, react_1.useState)();
    const [tituloTarefa, setTituloTarefa] = (0, react_1.useState)('');
    const [descricaoTarefa, setDescricaoTarefa] = (0, react_1.useState)('');
    const [inicioTarefa, setInicioTarefa] = (0, react_1.useState)('');
    const [fimTarefa, setFimTarefa] = (0, react_1.useState)('');
    const [recursoTarefa, setRecursoTarefa] = (0, react_1.useState)('');
    const [statusTarefa, setStatusTarefa] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        //Abaixo uma variável é declarada para armazenar o id da tarefa, somando 1 ao maior id existente atualmente no state Tarefas
        let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
        setIdTarefa(proximoId);
    }, []);
    const handleRecurso = (event) => {
        setRecursoTarefa(event.target.value);
    };
    const handleStatus = (event) => {
        setStatusTarefa(event.target.value);
    };
    const handleSalvar = () => {
        //Para inspecionarmos nosso código, uma boa estratégia é utilizarmos o console.log.
        //  Com o console.log, podemos visualizar o seu conteúdo na aba Console, no inspecionador de elementos, na janela do navegador
        console.log(`id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`);
        setTarefas([...tarefas,
            {
                idTarefa,
                tituloTarefa,
                descricaoTarefa,
                inicioTarefa,
                fimTarefa,
                recursoTarefa,
                statusTarefa
            }
        ]);
        //console.log(`Tarefas: ` + JSON.stringify(tarefas));
        handleClose();
    };
    return (react_1.default.createElement(Grid_1.default, { container: true, spacing: 2 },
        react_1.default.createElement(Card_1.default, { sx: style },
            react_1.default.createElement(CardHeader_1.default, { title: "Tarefas", subheader: "Cadastro de Tarefas" }),
            react_1.default.createElement(CardContent_1.default, { sx: {
                    width: '95%',
                    maxWidth: '100%',
                } },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                    react_1.default.createElement(material_1.FormControl, { fullWidth: true },
                        react_1.default.createElement(material_1.Input, { id: "tarefa_titulo", "aria-describedby": "tarefa_titulo_helper_text", value: tituloTarefa, onChange: e => { setTituloTarefa(e.target.value); } }),
                        react_1.default.createElement(material_1.FormHelperText, { id: "tarefa_titulo_helper_text" }, "T\u00EDtulo da Tarefa."))),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                    react_1.default.createElement(material_1.FormControl, { fullWidth: true },
                        react_1.default.createElement(material_1.Input, { id: "tarefa_descricao", "aria-describedby": "tarefa_descricao_helper_text", value: descricaoTarefa, onChange: e => { setDescricaoTarefa(e.target.value); } }),
                        react_1.default.createElement(material_1.FormHelperText, { id: "tarefa_descricao_helper_text" }, "Descri\u00E7\u00E3o da Tarefa."))),
                react_1.default.createElement(Grid_1.default, { container: true, spacing: 2, mt: 1 },
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 3 },
                        react_1.default.createElement(material_1.FormControl, null,
                            react_1.default.createElement(material_1.Input, { id: "tarefa_inicio", type: "date", "aria-describedby": "tarefa_inicio_helper_text", value: inicioTarefa, onChange: e => { setInicioTarefa(e.target.value); }, sx: {
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: 400,
                                    paddingLeft: '13px'
                                } }),
                            react_1.default.createElement(material_1.FormHelperText, { id: "tarefa_inicio_helper_text" }, "In\u00EDcio da Tarefa."))),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 3 },
                        react_1.default.createElement(material_1.FormControl, null,
                            react_1.default.createElement(material_1.Input, { id: "tarefa_fim", type: "date", "aria-describedby": "tarefa_fim_helper_text", value: fimTarefa, onChange: e => { setFimTarefa(e.target.value); }, sx: {
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: 400,
                                    paddingLeft: '13px'
                                } }),
                            react_1.default.createElement(material_1.FormHelperText, { id: "tarefa_fim_helper_text" }, "Fim da Tarefa."))),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 3 },
                        react_1.default.createElement(material_1.FormControl, { fullWidth: true },
                            react_1.default.createElement(material_1.InputLabel, { htmlFor: "tarefa_recurso" }, "Recurso"),
                            react_1.default.createElement(Select_1.default, { id: "tarefa_recurso", value: recursoTarefa, label: "Recurso", onChange: handleRecurso, size: "small", sx: {
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: 400,
                                } },
                                react_1.default.createElement(MenuItem_1.default, { value: 'Recurso 1' }, "Recurso 1"),
                                react_1.default.createElement(MenuItem_1.default, { value: 'Recurso 2' }, "Recurso 2"),
                                react_1.default.createElement(MenuItem_1.default, { value: 'Recurso 3' }, "Recurso 3")))),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 3 },
                        react_1.default.createElement(material_1.FormControl, { fullWidth: true },
                            react_1.default.createElement(material_1.InputLabel, { htmlFor: "tarefa_recurso" }, "Status"),
                            react_1.default.createElement(Select_1.default, { id: "tarefa_status", value: statusTarefa, label: "Status", onChange: handleStatus, size: "small", sx: {
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: 400,
                                } },
                                react_1.default.createElement(MenuItem_1.default, { value: 'Aguardando' }, "Aguardando"),
                                react_1.default.createElement(MenuItem_1.default, { value: 'Em Andamento' }, "Em Andamento"),
                                react_1.default.createElement(MenuItem_1.default, { value: 'Concluída' }, "Conclu\u00EDda")))),
                    react_1.default.createElement(Grid_1.default, { container: true, spacing: 2, pl: 2, mt: 2 },
                        react_1.default.createElement(Grid_1.default, { item: true, xs: 1 },
                            react_1.default.createElement(Button_1.default, { size: "small", variant: "contained", onClick: handleSalvar }, "Salvar")),
                        react_1.default.createElement(Grid_1.default, { item: true, xs: 1 },
                            react_1.default.createElement(Button_1.default, { size: "small", variant: "outlined", onClick: handleClose }, "Cancelar"))))))));
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    p: 4,
};
exports.default = CriarTarefa;
