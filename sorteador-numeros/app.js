//variáveis
function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let sorteados = [];
    let numeros;

    if (de >= ate) {
        alert("Opa! O número que começa é maior ou igual ao número que termina. Verifique os números e tente novamente");
        limparCampos();
        return;
    }
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        limparCampos();
        return;
    } else {


        for (let i = 0; i < quantidade; i++) {
            // sorteados[i] = numeroAleatorio(de,ate);
            numeros = numeroAleatorio(de, ate);

            while (sorteados.includes(numeros)) {
                numeros = numeroAleatorio(de, ate);
            }
            sorteados.push(numeros);
        }

        let textoSorteado = document.getElementById('resultado');
        textoSorteado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
        alterarstatusbotao('btn-reiniciar');
        alterarstatusbotao('btn-sortear');
        return;
    }


}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarstatusbotao(tag) {
    let botao = document.getElementById(tag);
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}

function limparCampos() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
}



function reiniciar() {
    limparCampos();
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarstatusbotao();
}