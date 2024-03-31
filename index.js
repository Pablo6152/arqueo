const actionAdd = document.getElementById("action-add")
const backBtn = document.getElementById("back-btn")
const doneBtn = document.getElementById("done-btn")

const paymentContainer = document.getElementById("payment-container")
const addContainer = document.getElementById("add-container")
const addItem = document.getElementById("add-item")
const addItemInput = document.getElementById("add-item-input")

let payments = []
let total = 0

actionAdd.addEventListener("click", () => {
    console.log("add")
    addContainer.classList.add("show")
    addContainer.classList.remove("hide")
})

backBtn.addEventListener("click", () => {
    console.log("back")
    addContainer.classList.add("hide")
    addContainer.classList.remove("show")
})

doneBtn.addEventListener("click", () => {
    console.log()

    payments.push(
        {
            amount: Number(addItemInput.value),
            id: payments.length
        }
    )

    // console.log(payments)

    const itemsDisplay = payments

    let appData = ""

    for (let i = 0; i < itemsDisplay.length; i++) {
        appData += `
        <div class="item-container">
            <button id="edit" class="item-btn edit-btn">
                <span class="material-symbols-outlined item-btn-icon">
                    edit
                    </span>
            </button>

            <div class="amount-container">
                <span class="material-symbols-outlined amount-icon">
                    attach_money
                    </span>
                    <p class="amount-text">${itemsDisplay[i].amount}</p>
            </div>
            
            <button id="delete" class="item-btn delete-btn">
                <span class="material-symbols-outlined item-btn-icon">
                    delete
                    </span>
            </button>

        </div>
       `

       total += itemsDisplay[i].amount
    }
    
    paymentContainer.innerHTML = appData
    console.log(total)

    addItemInput.value = ""
    addContainer.classList.add("hide")
    addContainer.classList.remove("show")
})