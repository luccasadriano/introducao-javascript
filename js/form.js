var buttom = document.querySelector("#adicionar-paciente")
buttom.addEventListener('click', function (event) {
    event.preventDefault()

    //Extraindo informações do paciente do form
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteForm(form)
    //criando as tags tr e td do paciente
    var pacienteTr = montaTr(paciente)

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    form.reset()
})

function obtemPacienteForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")
    
    var nomeTd = document.createElement("td")
    nomeTd.classList.add("info-nome")
    nomeTd.textContent = paciente.nome

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}