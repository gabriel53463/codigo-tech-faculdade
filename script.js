"use strict";

// Função para aguardar o evento DOMContentLoaded antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    // Inicializa o botão de alteração de texto
    initChangeTextButton();
});

// Função para inicializar o botão de alteração de texto
function initChangeTextButton() {
    // Obtém o botão de alteração de texto pelo ID
    var changeTextBtn = document.getElementById("changeTextBtn");

    // Verifica se o botão existe
    if (changeTextBtn) {
        // Adiciona um ouvinte de evento de clique ao botão
        changeTextBtn.addEventListener("click", function() {
            // Obtém o elemento de conteúdo pelo ID
            var content = document.getElementById("content");

            // Verifica se o elemento de conteúdo existe
            if (content) {
                // Altera o conteúdo quando o botão é clicado
                content.innerHTML = "<h2>Texto alterado!</h2><p>O texto foi alterado com sucesso.</p>";
            }
        });
    }
}

index.js

document.addEventListener("DOMContentLoaded", function() {
    // Inicializa o botão de alteração de texto
    initChangeTextButton();

    // Inicializa o formulário de contato
    initContactForm();
});

// Função para inicializar o botão de alteração de texto
function initChangeTextButton() {
    var changeTextBtn = document.getElementById("changeTextBtn");

    if (changeTextBtn) {
        changeTextBtn.addEventListener("click", function() {
            var content = document.getElementById("content");

            if (content) {
                content.innerHTML = "<h2>Texto alterado!</h2><p>O texto foi alterado com sucesso.</p>";
            }
        });
    }
}

// Função para inicializar o formulário de contato
function initContactForm() {
    var contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Obtém os valores dos campos do formulário
            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var message = document.getElementById("message").value.trim();

            // Verifica se os campos obrigatórios foram preenchidos
            if (name === "" || email === "" || message === "") {
                alert("Por favor, preencha todos os campos do formulário.");
                return; // Aborta o envio do formulário se houver campos vazios
            }

            // Envia os dados do formulário para o servidor (simulação)
            console.log("Nome: " + name + ", Email: " + email + ", Mensagem: " + message);

            // Exibe uma mensagem de sucesso ao usuário
            alert("Obrigado por entrar em contato!");
        });
    }
}