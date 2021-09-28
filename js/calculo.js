function suma ()
{
    var Numero1=parseInt(document.getElementById('num1').value);
    console.log(Numero1);

    var Numero2=parseInt(document.getElementById('num2').value);
    console.log(Numero2);
    
    Resultado=Numero1+Numero2;
    alert("El resultado es:"+Resultado);
}

function resta ()
{
    var rest1=parseInt(document.getElementById('resta1').value);
    console.log(rest1);
    var rest2=parseInt(document.getElementById('resta2').value);
    console.log(rest2);
    Resultado1=rest1-rest2;
    alert("El resultado es:"+Resultado1);
}

function division()
{
var divi1=parseInt(document.getElementById('divicion1').value);
console.log(divi1);
var divi2=parseInt(document.getElementById('divicion2').value);
console.log(divi2);
Resultado1=divi1/divi2;
alert("El resultado es:"+Resultado1);
}

function multiplicacion()
{
var multi1=parseInt(document.getElementById('multiplicacion1').value);
console.log(multi1);
var multi2=parseInt(document.getElementById('multiplicacion2').value);
console.log(multi2);
Resultado1=multi1*multi2;
alert("El resultado es:"+Resultado1);
}