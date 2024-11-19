/* 
          
          // Verificação de campos vazios e redirecionamento
           document.getElementById("botao1").addEventListener("click", function() {
            var cnpj = document.getElementById("barra1").value;
            var email = document.getElementById("barra2").value;
            var senha = document.getElementById("barra3").value;

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



//minimo tam de senha 

if(document.getElementById("barra3") >=6){
    return "Senha criada.";
}else{
    return "Mínimo 6 caracteres";
}
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


if(document.getElementById('senha')>7){
    return "Senha Criada"
}else{
    return "Crie outra senha ou clique para gerar uma aleatória"
}