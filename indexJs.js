
var numb;
function calcular(valor){
    document.getElementById('display').value += valor;
    numb = document.getElementById('display').value;    
}

function limpar(){
    document.getElementById('display').value = '0';
}
function resultado(){
    //eval = Função nativa que interpreta uma string como uma função javascript
    document.getElementById('display').value = eval(numb);
}