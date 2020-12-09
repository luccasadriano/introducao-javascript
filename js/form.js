var buttom = document.querySelector("#adicionar-paciente")
buttom.addEventListener('click', function (event) {
    event.preventDefault()

    //Extraindo informações do paciente do form
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteForm(form)

    var erros = validaPaciente(paciente)
    if (erros.length > 0) {
        exibiMensagensDeErros(erros)
        return;
    }

    adicionaPacienteTabela(paciente)

    form.reset()

    var mensagens = document.querySelector("#mensagens-erro")
    mensagens.innerHTML = ""
})

function adicionaPacienteTabela(paciente) {
    //criando as tags tr e td do paciente
    var pacienteTr = montaTr(paciente)
    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
}

function exibiMensagensDeErros(erros) {
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erros.forEach(function (erro) {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}

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

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {

    var erros = []

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ficar em branco")
    }

    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido")
    if (paciente.peso.length == 0) erros.push("Peso não pode ficar em branco")

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválido")
    }
    if (paciente.altura.length == 0) {
        erros.push("Altura não pode ficar em branco")
    }

    if (paciente.gordura.length == 0) {
        erros.push("Gordura não pode ficar em branco")
    }
    return erros
}
