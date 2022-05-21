const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

app.post("/users", (request, response) => {
  const { name, email, password } = request.body;
  response.json({ name, email, password });
});

/* No isomnia:
{
  "name":"Meu Nome",
  "email": "email@email.br",
  "password":"123456"
}
*/

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
