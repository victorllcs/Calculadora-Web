function somenteNumeros(evento)
{
    campoAltura= document.getElementById("altura");

    var campo = evento.keyCode;

if(campo <48 || campo> 57)
    return false;

    mascaraAlt(campoAltura)
}

function somenteNum(evento)
{

    campoPeso= document.getElementById("peso");

    var campo = evento.keyCode;

if(campo<48 || campo>57)
    return false;

    mascaraPeso(campoPeso)

}

function mascaraAlt(elemento)
{
    var conteudo = elemento.value;

    if (conteudo.length == 1){
        var texto = conteudo.charAt(0)+"."+conteudo.substring(1);
        elemento.value = texto;
    }
}

function mascaraPeso(elemento)
{
    var conteudo = elemento.value;

    if (conteudo.length == 2){
        var texto = conteudo.charAt(0)+conteudo.charAt(1)+"."+conteudo.substring(2);
        elemento.value = texto;
    }
}

function calcularIMC(){
    var text = "";
    var resultimc = "";
    var linkimg = "";
    var textend = "";
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var imc = (peso/(altura*altura)).toFixed(1);

    if(imc<=18.5)
    {
        text = "Abaixo de 18.5"
        resultimc = "Abaixo do peso"
        linkimg = "./img/abaixo.png"
        textend = "isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição, procure um profissional de saúde."
    }

    else if(imc> 18.5 && imc<=24.9)
    {
        text = "de 18.5 até 24.9"
        resultimc = "Normal"
        linkimg = "./img/saudável.png"
        textend = "Seu IMC está dentro da normalidade, as suas medidas estão boas, mas lembre-se que isso não é um sinal de saúde."
    }

    else if(imc>24.9 && imc<= 29.9)
    {
        text = "de 24.9 até 29.9"
        resultimc = "Sobrepeso"
        linkimg = "./img/sobrepeso.png"
        textend = "isso pode ser apenas uma característica pessoal, mas também pode ser um indicativo de uma possível obesidade, procure um profissional de saúde."
    }

    else if(imc>29.9 && imc < 34.9)
    {
        text = "de 29.9 até 34.9"
        resultimc = "Obesidade"
        linkimg = "./img/obesidade.png"
        textend = "isso pode ser apenas uma característica pessoal, mas é recomendado que você procure um profissional."
    }

    else if(imc>34.9 && imc<=39.9)
    {
        text = "de 34.9 até 39.9"
        resultimc = "Obesidade Grau 2"
        linkimg = "./img/obesidade2.png"
        textend = "É importante você buscar um profissional de saúde com urgência, o seu caso já gera riscos de doenças."
    }

    else if(imc>39.9)
    {
        text = "acima de 39.9"
        resultimc = "Obesidade grau 3"
        linkimg = "./img/obesidade3.png"
        textend = "Alerta Vermelho!!! Procure imediatamente um profissional de saúde, o seu caso traz diversos riscos para a sua saúde."
    }

    document.getElementById("texto").innerHTML = `
    <div class="row" style="padding: 15px;">
        <div class="col-12 col-md-8 pt-2">
            <p class="text-center">Seu IMC é: <strong>${imc} </strong></p>
            <p class="text-center">IMC ${text} <br> <strong>${resultimc} </strong></p>
            <p class="text-center">${textend}</p>
        </div>
        <div class="col-12 col-md-4 pt-2 pb-1 justify-content-center align-self-center">
            <img src="${linkimg}" style="width:200px; height: 250px;" class="rounded mx-auto d-block">
        </div>
    </div>
    `
    window.alert("Resultado: " + resultimc)
}