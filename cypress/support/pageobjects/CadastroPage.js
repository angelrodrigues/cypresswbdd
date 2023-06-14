/// <reference types="Cypress" />

import CadastroElements from '../elements/CadastroElements'
const cadastroElements = new CadastroElements
const url = Cypress.config("baseUrl")

class CadastroPage {

    telaInicial(){
        cy.visit(url)        
    }

    clicarBotaoNovoUsuario(){
        cy.get(cadastroElements.botaonovoUsuario()).click()        
    }

    preencherCamposValidos(){
        cy.get(cadastroElements.inputNome()).type('Angelina Rodrigues')    
        cy.get(cadastroElements.inputEmail()).type('teste@novoteste.com')      
        cy.get(cadastroElements.inputSenha()).type('teste1234')
    }

    botaoCadastrar(){
        cy.get(cadastroElements.botaoCadastrar()).click()
    }

    mensagemdeSucesso(){
        cy.get(cadastroElements.alert()).should('contain','Usuário inserido com sucesso')
    }
   
    preencherCamposInvalidos(){        
        cy.get(cadastroElements.inputEmail()).type('testeangel@novoteste.com')      
        cy.get(cadastroElements.inputSenha()).type('teste1234')
    }

    mensagemErro(){
        cy.get(cadastroElements.alert()).should('contain','Nome é um campo obrigatório')
    }   
}
export default CadastroPage;
