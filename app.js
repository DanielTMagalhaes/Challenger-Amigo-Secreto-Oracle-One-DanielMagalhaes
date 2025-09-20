const listaAmigo = [];
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!nome) {
        mostrarMensagem("Insira um nome válido, por favor.");
        return;
    }

    if (listaAmigo.includes(nome)) {
        mostrarMensagem("Esse nome já foi adicionado.");
        return;
    }

    exibirLista(nome);
    input.value = ""; // aqui ele limpa o campo depois de adicionar
}


function limparLista() {
    listaAmigo.length = 0; // esvazia o array
    lista.innerHTML = "";  // limpa a lista no HTML
    resultado.textContent = ""; // limpa resultado do sorteio
}

function exibirLista(amigo) {
    listaAmigo.push(amigo);

    const novoAmigo = document.createElement("li");
    novoAmigo.textContent = amigo;
    lista.appendChild(novoAmigo);
}

function sortearAmigo() {
    if (listaAmigo.length === 0) {
        mostrarMensagem("Por favor, insira ao menos um amigo para sortear.");
        return;
    }

    const sorteio = Math.floor(Math.random() * listaAmigo.length);
    resultado.textContent = `O seu amigo secreto sorteado é: ${listaAmigo[sorteio]}`;
}

function mostrarMensagem(msg) {
    resultado.textContent = msg;
}
