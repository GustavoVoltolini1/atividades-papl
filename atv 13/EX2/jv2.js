document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById("calcularBtn");
    const nomeInput = document.getElementById("nome");
    const salarioInput = document.getElementById("salario");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function() {
        const nomeFuncionario = nomeInput.value;
        const salario = parseFloat(salarioInput.value);

        if (isNaN(salario) || salario <= 0) {
            resultadoDiv.innerHTML = "Por favor, insira um salário válido.";
            return;
        }

        const taxaINSS = 0.08;
        const valorINSS = salario * taxaINSS;

        const salarioLiquido = salario - valorINSS;

        resultadoDiv.innerHTML = `
            <p>Nome do Funcionario: ${nomeFuncionario}</p>
            <p>Salario bruto: R$ ${salario.toFixed(2)}</p>
            <p>Valor do INSS: R$ ${valorINSS.toFixed(2)}</p>
            <p>Salario liquido: R$ ${salarioLiquido.toFixed(2)}</p>`;
    });
});
