document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const numero = parseInt(document.getElementById('inputNumber').value); 
    const listaResultado = document.getElementById('listaResultado'); 
    

    for (let i = 0; i < numero; i++) {
        let li = document.createElement('li');
        li.innerText = 'Calebe Andrade'; 
        listaResultado.appendChild(li);
    }
});