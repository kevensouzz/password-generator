const botaoCopiar = document.querySelector("#btncopiar")
const password = document.querySelector("#password")

botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(password.innerText)
    botaoCopiar.innerText = "Copiado"
})

setInterval(() => {
botaoCopiar.innerText = "Copiar"
}, 1500)