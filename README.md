# Academia Accenture 2025

Projeto desenvolvido como parte do programa de estudos em **Quality Assurance (QA)**, com foco em automação de testes utilizando **Cypress** e **Cucumber**.

## Objetivo

O objetivo deste repositório é centralizar e organizar os cenários de automação de testes E2E.  
Aqui serão aplicadas boas práticas de automação, estrutura de **Page Object Model (POM)** e cenários escritos em **BDD (Gherkin)**.

## Tecnologias

- Node.js
- Cypress
- Cucumber (cypress-cucumber-preprocessor)
- Faker.js (para geração de massa de dados)
- JavaScript ES6+

## Estrutura do Projeto

```
academia_accenture_2025/
│── cypress/
│   ├── e2e/               # Cenários de teste (features em Gherkin)
│   ├── support/           # Configurações e comandos customizados
│   ├── page_objects/      # Page Objects para seletores e funções reutilizáveis
│   └── fixtures/          # Massa de dados (se necessário)
│── package.json
│── cypress.config.js
│── README.md
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/academia_accenture_2025.git
   cd academia_accenture_2025
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o Cypress em modo interativo:
   ```bash
   npx cypress open
   ```

4. Para execução em modo headless:
   ```bash
   npx cypress run
   ```

> Observação: caso alguma dependência falhe, rode novamente `npm install`.

## Como Rodar os Testes

- Interface do Cypress:
  ```bash
  npx cypress open
  ```

- Todos os testes:
  ```bash
  npx cypress run
  ```


## Exemplo de Cenário (Gherkin)

```gherkin
Funcionalidade: Gestão de registros na WebTables 

  Contexto:
    Dado que o usuário acessa a página de WebTables

  Cenário: Inserir um novo registro válido
    Quando o usuário abre o formulário de cadastro
    E informa todos os campos obrigatórios com dados válidos
    E confirma o envio do formulário
    Então o sistema mostra o novo registro filtrado pelo email
    E os valores preenchidos aparecem corretamente na linha
```

## Contribuição

1. Crie um branch:
   ```bash
   git checkout -b feature/nova-feature
   ```
2. Faça commit:
   ```bash
   git commit -m "feat: descrição da alteração"
   ```
3. Push para o repositório:
   ```bash
   git push origin feature/nova-feature
   ```
4. Abra um Pull Request.

## Próximos Passos

- Adicionar novos cenários automatizados.
- Configurar pipeline de CI/CD.
- Gerar relatórios automáticos de execução (Allure, Mochawesome).

---

*Documentação inicial criada para apoiar o desenvolvimento. Pode ser complementada conforme a evolução do projeto.*
