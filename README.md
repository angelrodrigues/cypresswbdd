* Instale o Cypress com Cucumber com o comando ``` npm install --save-dev cypress@9.1.1 cypress-cucumber-preprocessor```   <br>
*
* Use o comando ```npx cypress open``` para rodar os testes no modo interativo ou ```npx cypress run``` para rodar no modo headless  <br>

** Camadas da arquitetura**  <br>

**integration**: arquivos contendo as definições de BDD em extensão   <br>

**support**: camadas com as divisões modulares para auxiliar na legibilidade dos cenários:  <br>
**elements** contém todos os mapeamentos para reconhecimento dos componentes do front;  <br>
**pageobjects** contém a modularização de todas as funções que serão adotadas para efetivar a validação;   <br>
**steps** contém a conexão entre a definição do BDD na *.feature e as chamdas para efetivação da validação com os *Pages.js;   <br>
