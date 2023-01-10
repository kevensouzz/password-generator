const botaoGerar = document.querySelector("#btngerar")
const botaoCopiar = document.querySelector("#btncopiar")
const password = document.querySelector("#password")
const inputRange = document.querySelector("#lenght")

inputRange.addEventListener("input", function inputValueNow() {
    var inputRangeValueNow = this.value
})

botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(password.innerText)
    botaoCopiar.innerText = "Copiado"
})

setInterval(() => {
botaoCopiar.innerText = "Copiar"
}, 1500)