var botaoLimpar = document.getElementById('botaoLimpar');
var atendimento = document.getElementById('functionAtendimento');
var formAtendimento = document.getElementById('formAtendimento');
var inputAtendimento = document.getElementById('Atendimento');
var inputPessoa = document.getElementById('Pessoa');
var inputIdade = document.getElementById('Idade');
var inputEndereco = document.getElementById('Endereco');
var inputeCivil = document.getElementById('eCivil');

const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();
const dataAtual = `${dia}/${mes}/${ano}`;

var divMensagemErro = document.getElementById('mensagemErro');
var tabelaAtendimentos = document.getElementById('tabelaAtendimentos');

var Atendimento = inputAtendimento.value;
var Pessoa = inputPessoa.value;
var Idade = inputIdade.value;
var Endereco = inputEndereco.value;
var eCivil = inputeCivil.value;
var Data = dataAtual;

var listaAtendimentos = [];
listaAtendimentos.push();

function removerAtendimento() {
    var posicao = event.target.getAttribute('data-atendimento');
    //listaAtendimentos.splice(posicao, 1);
    var risca = document.getElementById("linha"+posicao);
    risca.classList.add('textoDeletado');
    //atualizaListaAtendimentos();
    var botaoAtendido = document.getElementById("button"+posicao);
    botaoAtendido.disabled = true;
    botaoAtendido.innerText = "Atendido";
    botaoAtendido.classList.remove('btn-warning');
    botaoAtendido.classList.add('btn-success');
}

function atualizaListaAtendimentos() {
    if (listaAtendimentos.length === 0) {
        tabelaAtendimentos.innerHTML = '<tr><td colspan="3">Nenhum atendimento</td></tr>';
        return;
    }
    tabelaAtendimentos.innerHTML = '';
    for (var i = 0; i < listaAtendimentos.length; i++) {
        var evento = listaAtendimentos[i];
        var linha = document.createElement('tr');
        linha.setAttribute("id","linha"+i);
        var celulaAtendimento = document.createElement('td');
        var celulaNome = document.createElement('td');
        var celulaIdade = document.createElement('td');
        var celulaEndereco = document.createElement('td');
        var celulaeCivil = document.createElement('td');
        var celulaData = document.createElement('td');
        var celulaAcoes = document.createElement('td');
        var botaoAtendido = document.createElement('button');
        botaoAtendido.setAttribute('data-atendimento', i);
        botaoAtendido.classList.add('btn');
        botaoAtendido.classList.add('btn-warning');
        botaoAtendido.classList.add('btn-sm');
        botaoAtendido.addEventListener('click', removerAtendimento);
        botaoAtendido.setAttribute("id","button"+i);
        celulaAtendimento.innerText = evento.atendimento;
        celulaNome.innerText = evento.nome;
        celulaIdade.innerText = evento.idade;
        celulaEndereco.innerText = evento.endereco;
        celulaeCivil.innerText = evento.eCivil;
        celulaData.innerText = evento.data;
        botaoAtendido.innerText = "Atender";
        celulaAcoes.appendChild(botaoAtendido);
        linha.appendChild(celulaAtendimento);
        linha.appendChild(celulaNome);
        linha.appendChild(celulaIdade);
        linha.appendChild(celulaEndereco);
        linha.appendChild(celulaeCivil);
        linha.appendChild(celulaData);
        linha.appendChild(celulaAcoes);
        tabelaAtendimentos.appendChild(linha);
    }
}


function limparFormulario() {
    inputAtendimento.value = 'Reiki';
    inputPessoa.value = '';
    inputIdade.value = '';
    inputEndereco.value = '';
    inputeCivil.value = 'Solteiro(a)';
    inputAtendimento.classList.remove('is-invalid');
    inputPessoa.classList.remove('is-invalid');
    inputIdade.classList.remove('is-invalid');
    inputEndereco.classList.remove('is-invalid');
    inputeCivil.classList.remove('is-invalid');
    divMensagemErro.classList.add('d-none');
    divMensagemErro.innerHTML = '';
}

function limpar() {
    limparFormulario();
}

function salvarAtendimento(event) {
    event.preventDefault();
    listaAtendimentos.push({
        atendimento: inputAtendimento.value,
        nome: inputPessoa.value,
        idade: inputIdade.value,
        endereco: inputEndereco.value,
        eCivil: inputeCivil.value,
        data: dataAtual
    });
    atualizaListaAtendimentos();
    limparFormulario();
}


botaoLimpar.addEventListener('click', limpar);
formAtendimento.addEventListener('submit', salvarAtendimento);
window.addEventListener('load', atualizaListaAtendimentos);