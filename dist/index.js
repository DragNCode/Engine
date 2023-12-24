"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleJson1_1 = require("./routes/handleJson1");
const app = (0, express_1.default)();
const port = 8080;
app.get('/', (req, res) => {
    console.log('hello there');
});
app.get('/engine/json1', handleJson1_1.handleJson1);
app.listen(port, () => {
    console.log(`Express listening at port ${port}`);
});
