
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