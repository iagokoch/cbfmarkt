function comprarJogador() {
    document.getElementById('proposal-container').style.display = 'none';
    document.getElementById('mensagem').innerText = 'Jogador comprado com sucesso!';
}

function mostrarProposta() {
    document.getElementById('proposal-container').style.display = 'flex';
    document.getElementById('mensagem').innerText = '';
}

function enviarProposta() {
    const valor = document.getElementById('proposta-valor').value;
    if (valor) {
        document.getElementById('proposal-container').style.display = 'none';
        document.getElementById('mensagem').innerText = 'Proposta enviada: €' + valor;
    } else {
        document.getElementById('mensagem').innerText = 'Por favor, insira um valor válido.';
    }
}

function navigateTo(section) {
    alert("Navegar para: " + section);
}
