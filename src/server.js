const express = require("express");

const app = express();

const PORT = 3000;

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`
  Id da mensagem: ${id},
  Para o usuário: ${user}
  `);
});

app.get("/users", (request, response) => {
  const { page, limit } = request.query;
  response.send(`Página: ${page}, Limite: ${limit}`);
});
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
