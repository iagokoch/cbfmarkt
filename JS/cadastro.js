
    
          // Verificação de campos vazios e redirecionamento
           document.getElementById("login").addEventListener("click", function() {
            const cnpj = document.getElementById("cnpj").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            // Verificação de campo vazio
            if (cnpj === "" || email === "" || senha === "") {
               window.alert("Dados inválidos")
            } else { 
                // manda para a tela de login
                setTimeout(function() {
                    window.location.href = "login.html";
                }, 1000);
            }
        });











const senhaInput = document.getElementById('senha');
const verSenha = document.getElementById('ver_senha');

verSenha.addEventListener('click', () => {
    // Alterna o tipo do input entre 'password' e 'text'
    const tipo = senhaInput.type === 'password' ? 'text' : 'password';
    senhaInput.type = tipo;
    
    // Alterna o ícone entre olho aberto e fechado
    verSenha.classList.toggle('fa-eye');
    verSenha.classList.toggle('fa-eye-slash');
});


function volta(){
    window.location.href = "index.html";
}

