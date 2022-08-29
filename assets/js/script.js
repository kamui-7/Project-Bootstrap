let email = document.querySelector("#email")
let ataque = document.querySelector("#ataques")
let emailOk = false
let ataqueOk = false
let mapa = document.querySelector('#mapa')


function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Invalido'
        txtEmail.style.color = "yellow"
        txtEmail.style.display = 'block'
    } else {
        txtEmail.style.display = 'none'
        emailOk = true
    }
}

function validaAtaque() {
    let txtAtaque = document.querySelector('#txtAtaque')

    if(ataques.value.length > 150) {
        txtAtaque.innerHTML = 'Limite de caracteres excedido.'
        txtAtaque.style.color = "yellow"
        txtAtaque.style.display = 'block'
        ataqueOk = false
    } else if (ataques.value.length < 15) {
        txtAtaque.innerHTML = 'Caracteres insuficientes.'
        txtAtaque.style.color = "yellow"
        txtAtaque.style.display = 'block'
        ataqueOk = false
    } else {
        txtAtaque.style.display = 'none'
        ataqueOk = true
    }
}

function enviar() {
    if (emailOk == true && ataqueOk == true) {
        alert('Formulario enviado! Entrarei em contato em breve, obrigado.')
    } else {
        alert('Preencha o formulario corretamente, verifique seu nome, e-mail e o assunto.')
    }
}

function zoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function normal() {
    mapa.style.width = '400px'
    mapa.style.height = '400px'
}