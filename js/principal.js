// console.log('Carregado de um arquivo externo')


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




// console.log(peso)
// console.log(altura)
// console.log(imc)
