document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const inputTexto = document.getElementById('texto-input').value; 
    document.getElementById('resultado').textContent = `Olá, ${inputTexto}! Seja bem vindo à pagina do aluno.`;
    if(inputTexto ==''){
        document.getElementById('resultado').textContent = 'Por favor, insira seu nome.'
    } 
});