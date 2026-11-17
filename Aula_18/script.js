const btnCalcular = document.getElementById("calculate2");
const campoNum1 = document.getElementById("num1");
const campoNum2 = document.getElementById("num2");
const campoOperacao = document.getElementById("operation");
const textoResultado = document.getElementById("result");

function Calcular() {
  const num1 = Number(campoNum1.value);
  const num2 = Number(campoNum2.value);
  const operation = campoOperacao.value;

  if (campoNum1.value === "" || campoNum2.value === "") {
    textoResultado.textContent = "Preencha os dois números.";
    return;
  }

  let result;
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      textoResultado.textContent = "Erro: divisão por zero.";
      return;
    }
    result = num1 / num2;
  }

  textoResultado.textContent = `Resultado: ${result}`;
}

btnCalcular.addEventListener("click", Calcular);