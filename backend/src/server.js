import express from 'express';
import path from 'path';
import { execArgv } from 'process';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); //habilita o leitor de JSON

const staticPath = path.join(__dirname, '../../frontend/src')

app.use(express.static(staticPath));

const port = 3000; //a porta onde vai rodar

app.get("/", (req, res) => {
    res.redirect("pages/main");
});

let dadosTemporarios = {}; // Depois conectar DB e pegar dados com querys

app.post("/send", (req, res) => {
    const { email, nome, phone } = req.body;

    dadosTemporarios = { email, nome, phone }; // escopo global da variavel

    console.log({ email, nome, phone });

    res.status(200).send("OK");
});

app.get("/send", (req, res) => {
    res.status(200).json(dadosTemporarios);
})

app.listen(port, () => {
    console.log(`Server is running in: http://localhost:${port}`);
})