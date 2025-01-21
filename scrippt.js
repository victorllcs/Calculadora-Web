function somenteNumeros(evento) {
  campoAltura = document.getElementById("altura");

  var campo = evento.keyCode;

  if (campo < 48 || campo > 57) return false;

  mascaraAlt(campoAltura);
}

function somenteNum(evento) {
  campoPeso = document.getElementById("peso");

  var campo = evento.keyCode;

  if (campo < 48 || campo > 57) return false;

  mascaraPeso(campoPeso);
}

function mascaraAlt(elemento) {
  var conteudo = elemento.value;

  if (conteudo.length == 1) {
    var texto = conteudo.charAt(0) + "." + conteudo.substring(1);
    elemento.value = texto;
  }
}

function mascaraPeso(elemento) {
  var conteudo = elemento.value;

  if (conteudo.length >3) {
    var texto =
      conteudo.substring(0,conteudo.length-3)+"."+conteudo.substring(conteudo.length-3);
    elemento.value = texto;
  }else if(conteudo.length>2)
  {
    var texto =
        conteudo.charAt(0) + conteudo.charAt(1) + "." + conteudo.substring(1);
    elemento.value = texto;
  }
}

function calcularIMC() {
  var text = "";
  var resultimc = "";
  var linkimg = "";
  var textend = "";
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;
  var imc = (peso / (altura * altura)).toFixed(1);

  if (imc <= 18.5) {
    text = "Abaixo de 18.5";
    resultimc = "Abaixo do peso";
    linkimg = "https://cdn-icons-png.flaticon.com/512/3499/3499553.png";
    textend =
      "isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição, procure um profissional de saúde.";
  } else if (imc > 18.5 && imc <= 24.9) {
    text = "de 18.5 até 24.9";
    resultimc = "Normal";
    linkimg = "https://cdn-icons-png.flaticon.com/512/706/706204.png";
    textend =
      "Seu IMC está dentro da normalidade, as suas medidas estão boas, mas lembre-se que isso não é um sinal de saúde.";
  } else if (imc > 24.9 && imc <= 29.9) {
    text = "de 24.9 até 29.9";
    resultimc = "Sobrepeso";
    linkimg = "https://cdn-icons-png.flaticon.com/512/5571/5571794.png";
    textend =
      "isso pode ser apenas uma característica pessoal, mas também pode ser um indicativo de uma possível obesidade, procure um profissional de saúde.";
  } else if (imc > 29.9 && imc < 34.9) {
    text = "de 29.9 até 34.9";
    resultimc = "Obesidade";
    linkimg = "https://cdn-icons-png.flaticon.com/512/5862/5862774.png";
    textend =
      "isso pode ser apenas uma característica pessoal, mas é recomendado que você procure um profissional.";
  } else if (imc > 34.9 && imc <= 39.9) {
    text = "de 34.9 até 39.9";
    resultimc = "Obesidade Grau 2";
    linkimg = "https://cdn-icons-png.flaticon.com/512/6450/6450170.png";
    textend =
      "É importante você buscar um profissional de saúde com urgência, o seu caso já gera riscos de doenças.";
  } else if (imc > 39.9) {
    text = "acima de 39.9";
    resultimc = "Obesidade grau 3";
    linkimg =
      "data:image/png;base64,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";
    textend =
      "Alerta Vermelho!!! Procure imediatamente um profissional de saúde, o seu caso traz diversos riscos para a sua saúde.";
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
    `;
  window.alert("Resultado: " + resultimc);
}
