/* 
    index - GET para listar vários registros
    show - GET para exibir um registro específico
    create - POST para criar um registro
    update - PUT para atualizar o registro
    delete - DELETE para remover um registro
*/
class UsersController {
  create(request, response) {
    const { name, email, password } = request.body;
    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
