* Instale o Cypress com Cucumber com o comando ``` npm install --save-dev cypress@9.1.1 cypress-cucumber-preprocessor``` 
*
* Use o comando ```npx cypress open``` para rodar os testes no modo interativo ou ```npx cypress run``` para rodar no modo headless

# Camadas da arquitetura

**integration**: arquivos contendo as definições de BDD em extensão 

**support**: camadas com as divisões modulares para auxiliar na legibilidade dos cenários:
**elements** contém todos os mapeamentos para reconhecimento dos componentes do front;
**pageobjects** contém a modularização de todas as funções que serão adotadas para efetivar a validação;
**steps** contém a conexão entre a definição do BDD na *.feature e as chamdas para efetivação da validação com os *Pages.js; 
