#utf-8
#language: pt
Funcionalidade: Gestão de registros na WebTables 

  Contexto:
    Dado que o usuário acessa a página de WebTables

  Cenário: Inserir um novo registro válido
    Quando o usuário abre o formulário de cadastro
    E informa todos os campos obrigatórios com dados válidos
    E confirma o envio do formulário
    Então o sistema mostra o novo registro filtrado pelo email
    E os valores preenchidos aparecem corretamente na linha

  Cenário: Editar um registro existente e validar a alteração
    Dado que existe um registro previamente inserido
    Quando o usuário edita o cadastro desse registro
    Então o sistema exibe o registro alterado com os novos valores

  Cenário: Excluir um registro e validar a remoção
   Dado que existe um registro previamente inserido
   Quando o usuário exclui o cadastro
   Então o sistema não deve listar mais esse registro
