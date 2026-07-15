import express from 'express';
const app = express();

app.use(express.json()); //habilita o leitor de JSON

const port = 3000; //a porta onde vai rodar

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: '../frontend' });
});

app.post("/send", (req, res) => {
    const { email, nome, phone } = req.body;

    console.log({ email, nome, phone });

    res.status(200).send("OK");
})

app.listen(port, () => {
    console.log(`Server is running in: http://localhost:${port}`);
})