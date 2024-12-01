
    /*
          // Verificação de campos vazios e redirecionamento
           document.getElementById("login").addEventListener("click", function() {
            var cnpj = document.getElementById("cnpj").value;
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;

            // Verificação de campo vazio
            if (cnpj === "" || email === "" || senha === "") {
                document.getElementById("erro-login").style.display = 'block';
            } else { 

                document.getElementById("erro-login").style.display = 'none';
                // manda para a tela de login
                setTimeout(function() {
                    window.location.href = "login.html";
                }, );
            }
        });


    // Fechar o modal quando o usuário clicar no "x"
    document.querySelector(".close").addEventListener("click", function() {
            document.getElementById("erro-login").style.display = "none";
        });

        // Fechar o modal se o usuário clicar fora do modal
        window.addEventListener("click", function(event) {
            if (event.target == document.getElementById("erro-login")) {
                document.getElementById("erro-login").style.display = "none";
            }
        });  

*/







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