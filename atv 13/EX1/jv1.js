document.addEventListener("DOMContentLoaded", function() {
    
    const var1Input = document.getElementById("var1");
    const var2Input = document.getElementById("var2");
    const calcularBtn = document.getElementById("calcularBtn");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function() {
        
        const variavel1 = parseInt(var1Input.value);
        const variavel2 = parseInt(var2Input.value);

        if (isNaN(variavel1) || isNaN(variavel2)) {
            resultadoDiv.innerHTML = "Por favor, insira dois numeros validos.";
            return;
        }
       
        const diferenca = variavel1 - variavel2;

        const expressao = (2 * variavel1) + (3 * variavel2);
     const produto = variavel1 * variavel2;

        resultadoDiv.innerHTML = `
            <p>Diferenca entre as variaveis: ${diferenca}</p>
            <p>O dobro da primeira mais o triplo da segunda variavel: ${expressao}</p>
            <p>Multiplicacao das variaveis: ${produto}</p>
            <p>Valor das variaveis do maior para o menor: ${Math.max(variavel1, variavel2)}, ${Math.min(variavel1, variavel2)}</p>`;
    });
});
