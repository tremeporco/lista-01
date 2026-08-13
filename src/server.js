  import "dotenv/config";
  import app from "./app.js";

  //a variavel da porta é definida no .env, se não existir a porta será a 3000
  const PORT = process.env.PORT ?? 3000;

// coloquei em uma variavel para poder usar no erro.
  //aqui o servidor é iniciado e escuta a porta definida na variavel PORT.
  const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })


  //  trata erros na hora de iniciar o servidor. 
  //Cumpre o requisito: ...porta em uso, o processo deve logar uma mensagem clara e sair com código 1.

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`A porta ${PORT} já está em uso.`);
      process.exit(1);
    }

    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  });