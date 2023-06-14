/* global Given, Then, When */
import LogoutPage from '../pageobjects/LogoutPage'
const logoutPage = new LogoutPage

Given("que estou logado no site Seu Barriga", () =>{
    logoutPage.telaLogin()
})
When("clico no botao sair", () => {
    logoutPage.botaoSair()
})
Then("devo ser deslogado do site", () => {
    logoutPage.incio()
})