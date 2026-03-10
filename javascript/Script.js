document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.querySelector(".formulario");

  // cria e mostra mensagem
  function showToast(mensagem, tipo) {
    // Remove a mensagem anterior se ainda estiver na tela
    const toastExistente = document.getElementById("toast");
    if (toastExistente) toastExistente.remove();
    const toast = document.createElement("div");
    toast.id = "toast";
    toast.textContent = mensagem;
    toast.className = tipo === "erro" ? "toast toast-erro" : "toast toast-sucesso";
    document.body.appendChild(toast);

    // Animação de entrada
    setTimeout(() => toast.classList.add("toast-visivel"), 10);
    // tempo que a mensagem fica na tela
    setTimeout(() => {
      toast.classList.remove("toast-visivel");
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  // Validação
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nome  = document.querySelector('input[name="nome"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const jogo  = document.querySelector('select[name="jogo"]').value;
    const nick  = document.querySelector('input[name="login"]').value.trim();
    const senha = document.querySelector('input[name="senha"]').value;

    if (nome === "") {
      showToast("⚠️  Preencha o seu nome.", "erro"); return;
    }
    if (email === "") {
      showToast("⚠️  Preencha o seu e-mail.", "erro"); return;
    }
    if (jogo === "") {
      showToast("⚠️  Selecione um jogo.", "erro"); return;
    }
    if (nick === "") {
      showToast("⚠️  Preencha o seu nick.", "erro"); return;
    }
    if (senha.length < 8) {
      showToast("⚠️  A senha precisa ter pelo menos 8 caracteres.", "erro"); return;
    }
    if (!/[A-Z]/.test(senha)) {
      showToast("⚠️  A senha precisa ter pelo menos uma letra maiúscula.", "erro"); return;
    }
    if (!/[0-9]/.test(senha)) {
      showToast("⚠️  A senha precisa ter pelo menos um número.", "erro"); return;
    }
    showToast("✅  Cadastro realizado com sucesso!", "sucesso");
    formulario.reset();
  });

});