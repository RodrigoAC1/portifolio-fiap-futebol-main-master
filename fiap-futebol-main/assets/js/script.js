//manipulação do DOM
//ECMAScript

console.log("calculando orçamento")
document.querySelector("#qtde").addEventListener("change", calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento)

function calcularOrcamento(){

    let preco = qtde.value * 100
    if (js.checked) preco *= 1.1
    if (layout_sim.checked) preco += 500

    let taxadeUergencia = preco * (1.1 - prazo.value * 0.1)
    preco += taxadeUergencia

    label_prazo.innerHTML = `prazo (${prazo.value} semanas)`

    output.innerHTML = "R$" + preco.toFixed(2)
}
