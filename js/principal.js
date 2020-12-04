var titulo = document.querySelector('.titulo')
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i]

    var tdPpeso = paciente.querySelector('.info-peso')
    var peso = tdPpeso.textContent

    var tdPaltura = paciente.querySelector('.info-altura')
    var altura = tdPaltura.textContent

    var tdImc = paciente.querySelector('.info-imc')

    var pesoEvalido = true
    var alturaEvalido = true

    if (peso <= 0 || peso >= 600) {

        pesoEvalido = false
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")

    } else if (altura <= 0 || altura >= 2.50) {

        alturaEvalido = false
        tdImc.textContent = "Altura inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEvalido && alturaEvalido) {
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed()
    }
}

var buttom = document.querySelector("#adicionar-paciente")
buttom.addEventListener('click', function (event) {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")
    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value
    // console.log(nome, peso, altura, gordura)

    var pacienteTr = document.createElement("tr")
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    // imcTd.textContent = 

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    // pacienteTr.appendChild(imcTd)

  var tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacienteTr)
    
})