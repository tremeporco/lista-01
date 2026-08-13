import express from "express";

const app = express();


//aqui tem a rota de health que retorna um json com status ok.
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "lista-01",
  });
});

export default app;
