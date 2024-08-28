// JavaScript básico para validação do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Valida os campos
    if (name === '' || email === '' || message === '') {
        alert('Todos os campos são obrigatórios.');
        return;
    }

    // Caso os campos estejam preenchidos
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar código para enviar os dados do formulário para um servidor
});
