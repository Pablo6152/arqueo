const bill500 = document.getElementById("500")
const bill200 = document.getElementById("200")
const bill100 = document.getElementById("100")
const bill50 = document.getElementById("50")
const bill20 = document.getElementById("20")
const bill10 = document.getElementById("10")
const bill5 = document.getElementById("5")
const bill2 = document.getElementById("2")
const bill1 = document.getElementById("1")
const documents = document.getElementById("documents")

const  testDebug = document.getElementById("test")
testDebug.addEventListener("click", () => {
    console.log(total)
})



let total = 0

bill500.addEventListener("keypress", () => {

    

    total = total + Number(bill500.value)

    console.log(total)
})
bill200.addEventListener("keypress", () => {
    console.log(bill200.value)
})
bill100.addEventListener("keypress", () => {
    console.log(bill100.value)
})
bill50.addEventListener("keypress", () => {
    console.log(bill50.value)
})
bill20.addEventListener("keypress", () => {
    console.log(bill20.value)
})
bill10.addEventListener("keypress", () => {
    console.log(bill10.value)
})
bill5.addEventListener("keypress", () => {
    console.log(bill5.value)
})
bill2.addEventListener("keypress", () => {
    console.log(bill2.value)
})
bill1.addEventListener("keypress", () => {
    console.log(bill1.value)
})
documents.addEventListener("keypress", () => {
    console.log(documents.value)
})

