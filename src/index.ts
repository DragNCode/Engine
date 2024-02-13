import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { buildCode } from "./routes/buildCode";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/engine', buildCode);

app.listen(9000, () => {
    console.log("Server listening on port 9000");
})