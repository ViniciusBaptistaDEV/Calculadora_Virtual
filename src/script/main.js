document.addEventListener('DOMContentLoaded', function(){

    let primeiroNumero = document.getElementById('primeiro-numero');
    let segundoNumero = document.getElementById('segundo-numero');
    let resultado = document.getElementById('resultado-final');

    document.getElementById('soma').addEventListener('click', function(){

        let num1 = parseFloat(primeiroNumero.value);
        let num2 = parseFloat(segundoNumero.value);

        let resultadofinal =  num1 + num2;
        resultado.innerText = resultadofinal;

    })

    document.getElementById('subtrair').addEventListener('click', function(){

        let num1 = parseFloat(primeiroNumero.value);
        let num2 = parseFloat(segundoNumero.value);

        let resultadofinal =  num1 - num2;
        resultado.innerText = resultadofinal;

    })

    document.getElementById('multiplicar').addEventListener('click', function(){

        let num1 = parseFloat(primeiroNumero.value);
        let num2 = parseFloat(segundoNumero.value);

        let resultadofinal =  num1 * num2;
        resultado.innerText = resultadofinal;

    })

    document.getElementById('dividir').addEventListener('click', function(){

        let num1 = parseFloat(primeiroNumero.value);
        let num2 = parseFloat(segundoNumero.value);

        let resultadofinal =  num1 / num2;
        resultado.innerText = resultadofinal;

    })


        // document.querySelector('.resultado').style.display = 'block'

})
