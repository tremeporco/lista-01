import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "lista-01",
  });
});

export default app;
