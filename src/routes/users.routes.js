const { Router } = require("express");
const UsersController = require("../controllers/UsersController");

const usersRouters = Router();
/* insomnia
{
  "name":"Seu Nome",
  "email": "email@email.br",
  "password":"123456",
  "isAdmin": false
}
*/
function myMiddleware(request, response, next) {
  console.log("Voce passou pelo middleware");
  if (!request.body.isAdmin) {
    return response.json({ message: "user unauthorized" });
  }
  next();
}

const usersController = new UsersController();

usersRouters.post("/", myMiddleware, usersController.create);

module.exports = usersRouters;
