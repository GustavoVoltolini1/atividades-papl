document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById("calcularBtn");
    const salarioInput = document.getElementById("salario");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function() {
        const salario = parseFloat(salarioInput.value);

        if (isNaN(salario) || salario <= 0) {
            resultadoDiv.innerHTML = "Por favor, insira um salario valido.";
            return;
        }

        let taxaDesconto, faixaDesconto;
        if (salario <= 1000) {
            taxaDesconto = 0.08;
            faixaDesconto = "até R$ 1.000,00";
        } else if (salario <= 1500) {
            taxaDesconto = 0.085;
            faixaDesconto = "de R$ 1.000,01 a R$ 1.500,00";
        } else {
            taxaDesconto = 0.09;
            faixaDesconto = "acima de R$ 1.500,00";
        }

        const valorDesconto = salario * taxaDesconto;

        resultadoDiv.innerHTML = `
            <p>Salario: R$ ${salario.toFixed(2)}</p>
            <p>Taxa de desconto (${faixaDesconto}): ${taxaDesconto * 100}%</p>
            <p>Valor do desconto: R$ ${valorDesconto.toFixed(2)}</p>`;
    });
});
