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

    var pesoEvalido = validaPeso(peso)
    var alturaEvalido = validaAltura(altura)

    if (!pesoEvalido) {
        pesoEvalido = false
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")

    } else if (!alturaEvalido) {
        alturaEvalido = false
        tdImc.textContent = "Altura inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEvalido && alturaEvalido) {
        var imc = calcularImc(peso, altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 600) {
        return true
    } else {
        return false
    }
}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 2.50) {
        return true
    } else {
        return false
    }

}

function calcularImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed()
}

