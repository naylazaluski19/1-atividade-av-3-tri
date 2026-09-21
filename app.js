
const form = document.getElementById("loginForm");
const login = document.getElementById("login");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const esqueciSenha = document.getElementById("esqueciSenha");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = login.value.trim();
    const password = senha.value.trim();
    if (usuario === "" || password === "") {

        mensagem.textContent = "Preencha todos os campos.";
        mensagem.className = "erro";

        return;
    }
    if (usuario === "admin" && password === "1234") {

        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.className = "sucesso";

    } else {

        mensagem.textContent = "Login ou senha incorretos.";
        mensagem.className = "erro";
    }
});

esqueciSenha.addEventListener("click", function(event) {

    event.preventDefault();

    mensagem.textContent =
        "Entre em contato com o administrador para recuperar sua senha.";

    mensagem.className = "aviso";
});