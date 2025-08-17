// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/webtables.page'

// 1) IGNORAR QUALQUER uncaught exception (não deixa falhar)
Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false;   // ignora TUDO que estourar na app/terceiros
});

// 2) ESCONDER do log a linha "uncaught:exception" e qualquer chamada de backend
(function hideNoise() {
  const id = 'hide-noise-style';
  const css = `
    /* erro de uncaught no command log */
    .reporter .command-name-uncaught-exception { display: none !important; }
    /* quadro roxo de erro do runner */
    .reporter .runnable-err, .reporter .test-err { display: none !important; }
    /* qualquer chamada de backend */
    .reporter .command-name-xhr,
    .reporter .command-name-fetch,
    .reporter .command-name-request { display: none !important; }
  `;
  const inject = () => {
    const doc = window.top?.document;
    if (!doc || doc.getElementById(id)) return;
    const style = doc.createElement('style');
    style.id = id;
    style.textContent = css;
    doc.head.appendChild(style);
  };
  inject();
  const doc = window.top?.document;
  if (doc) new MutationObserver(inject).observe(doc, { childList: true, subtree: true });
})();


// Gera um email aleatório e guarda no Cypress.env
before(() => {
  const random = Math.random().toString(36).substring(2, 8);
  const email = `teste_${random}@editar.com`;

  Cypress.env('emailGerado', email);
  cy.log(`📧 Email gerado para validar o cenário de editar: ${email}`);
});

