const botaoGerar = document.querySelector("#btngerar")
const botaoCopiar = document.querySelector("#btncopiar")
const password = document.querySelector("#password")
const inputRange = document.querySelector("#lenght")

const checkLower = document.querySelector('#lower')
const checkUpper = document.querySelector('#upper')
const checkNumber = document.querySelector('#number')
const checkSymbol = document.querySelector('#symbol')

const caracters = Array.from(Array(26)).map((_, i) => i + 97)
const caractersLower = caracters.map((item) => String.fromCharCode(item))
const caractersUpper = caractersLower.map((item) => item.toUpperCase())
const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const Symbols = ["!", "@", "#", "$", "%", "&", "*"]

botaoGerar.addEventListener("click", () => {
    generatePassword(
        checkLower.checked,
        checkUpper.checked,
        checkNumber.checked,
        checkSymbol.checked,
        inputRange.value
    )
})

const generatePassword = (
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
) => {
    const newArray = [
        ...(hasLower ? caractersLower : []),
        ...(hasUpper ? caractersUpper : []),
        ...(hasNumber ? Numbers : []),
        ...(hasSymbol ? Symbols : []),
    ] 

    let passwordResult = ""

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length)
        passwordResult += newArray[randomIndex]
    }

    if (newArray.length === 0) {
    passwordResult = ""}

    password.innerHTML = passwordResult
}

botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(password.innerText)
    botaoCopiar.innerText = "Copiado"
})

setInterval(() => {
botaoCopiar.innerText = "Copiar"
}, 1500)