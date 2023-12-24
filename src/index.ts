import express from "express";
import { handleJson1 } from "./routes/handleJson1";

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log('hello there');
})

app.get('/engine/json1', handleJson1);

app.listen(port, () => {
    console.log(`Express listening at port ${port}`);
})
