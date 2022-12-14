"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_1 = __importDefault(require("./routes/messages"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/home', index_1.default);
app.use('/messages', messages_1.default);
app.use((req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, 'views', 'not-found.html'));
});
app.listen(3000);
