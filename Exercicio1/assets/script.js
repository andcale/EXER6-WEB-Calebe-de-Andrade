document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const textInput = document.getElementById('textInput').value; 
    const result = document.getElementById('resultado');
    if(textInput ==''){
        document.getElementById('resultado').textContent = 'Por favor, insira seu nome.'
    } else{
        result.textContent = `Olá, ${textInput}! Seja bem vindo à pagina do aluno.`;
    }
});