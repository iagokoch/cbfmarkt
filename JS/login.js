
    
          // ve se tem algum campo vazio
          document.getElementById("login").addEventListener("click", function() {
            const cnpj = document.getElementById("cnpj").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;


            if (cnpj === "" || email === "" || senha === "") {
               window.alert("Dados inválidos");
            } else { 
                
                setTimeout(function() {
                    window.location.href = "login.html";
                }, 1000);
            }
        });

const senhaInput = document.getElementById('senha');
const verSenha = document.getElementById('ver_senha');

verSenha.addEventListener('click', () => {
    // 
    const tipo = senhaInput.type === 'password' ? 'text' : 'password';
    senhaInput.type = tipo;
    
    // Abre e fecha o olho
    verSenha.classList.toggle('fa-eye');
    verSenha.classList.toggle('fa-eye-slash');
});

//Botao volta
function volta(){
    window.location.href = "index.html";
}

function cadastro(){
    window.location.href = "cadastro.html";
}

