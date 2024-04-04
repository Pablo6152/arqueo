const actionAdd = document.getElementById("action-add")
const backBtn = document.getElementById("back-btn")
const doneBtn = document.getElementById("done-btn")

const paymentContainer = document.getElementById("payment-container")
const totalContainer = document.getElementById("total-amount")
const remainingContainer = document.getElementById("remaining-amount")
const addContainer = document.getElementById("add-container")
const addItem = document.getElementById("add-item")
const addItemInput = document.getElementById("add-item-input")


let payments = []
let paymentsBin = []
let total = 0
let fund = 100000

actionAdd.addEventListener("click", () => {
    addContainer.classList.add("show")
    addContainer.classList.remove("hide")
})

backBtn.addEventListener("click", () => {
    addContainer.classList.add("hide")
    addContainer.classList.remove("show")
})

doneBtn.addEventListener("click", () => {
    total = 0

    payments.push(
        {
            amount: Number(addItemInput.value),
            id: payments.length
        }
    )

    const itemsDisplay = payments

    let appData = ""

    for (let i = 0; i < itemsDisplay.length; i++) {
        appData += `
        <div class="item-container" id="${itemsDisplay[i].id}">

            <span id="e" class="material-symbols-outlined item-btn edit-btn item-btn-icon">
            edit
            </span>

            <div class="amount-container">
                    <p class="amount-text">${itemsDisplay[i].amount.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
            </div>
            
            <span class="material-symbols-outlined item-btn delete-btn item-btn-icon" id="r">
                delete
            </span>

        </div>
       `
    }
    
    saveItems()

    for (let i = 0; i < itemsDisplay.length; i++){
        total += itemsDisplay[i].amount
    }

    paymentContainer.innerHTML = appData
    totalContainer.innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    let remaining = fund - total
    remainingContainer.innerHTML = remaining.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    addItemInput.value = ""
    addContainer.classList.add("hide")
    addContainer.classList.remove("show")
})

function saveItems(){
    localStorage.setItem("itemsArray", JSON.stringify(payments))
}
    // Load items
function loadItems(){
    let loadedData = []
    if (localStorage.getItem("itemsArray") == null || loadedData.length < 0) {
    } else {
        loadedData = localStorage.getItem("itemsArray")
        payments = JSON.parse(loadedData)
    }
}


paymentContainer.addEventListener("click", itemSelector)

function itemSelector(e){
    // console.log(`
    // Item id=${e.target.parentNode.id}
    // Operation=${e.target.id}
    // `)
    console.log(e.target.parentNode.id)

    if (e.target.id == "e"){
        // editItems()
    } else if (e.target.id == "f"){
        // toFavoriteItem(e.target.parentNode.id)
        // console.log(`Trigger btn: ${e.target.parentNode.id}`)
    } else if (e.target.id == "r"){
        // e.target.parentNode.id is the id of the item, 0 is the origin "Items"
        removeItem(e.target.parentNode.id, 0)
    }

}

function removeItem(itemId, origin){
    let idSelected = parseInt(itemId)

    // console.log(itemId, origin)
    
        if(!isNaN(parseInt(itemId))  && origin == 0){
            let paymentsBinBuffer = []
            paymentsBinBuffer = payments.splice(parseInt(itemId), 1)
            
            for (let i = 0; i < paymentsBinBuffer.length; i++) {
                paymentsBinBuffer[i].id = paymentsBin.length
            }
    
            paymentsBin.push(paymentsBinBuffer[0])
    
            for (let i = idSelected; i < payments.length; i++) { 
                payments[i].id--
            }
            

            saveItems()
            renderItems()
        }


    // if (!isNaN(parseInt(itemId)) && origin == 1){
    //         let paymentsBinBuffer = []
    //         paymentsBinBuffer = favoritePayments.splice(parseInt(itemId), 1)
            
    //         // console.log(favoritePayments)
            
    //         for (let i = 0; i < paymentsBinBuffer.length; i++) {
    //             paymentsBinBuffer[i].id = paymentsBin.length
    //         }

    //         paymentsBin.push(paymentsBinBuffer[0])
    
    //         for (let i = idSelected; i < favoritePayments.length; i++) { 
    //             favoritePayments[i].id--
    //         }
    
    // }
}



function renderItems(){
    loadItems()

    const itemsDisplay = payments

    let appData = ""

    for (let i = 0; i < itemsDisplay.length; i++) {
        appData += `
        <div class="item-container" id="${itemsDisplay[i].id}">

            <span id="e" class="material-symbols-outlined item-btn edit-btn item-btn-icon">
            edit
            </span>

            <div class="amount-container">
                    <p class="amount-text">${itemsDisplay[i].amount.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
            </div>
            
            <span class="material-symbols-outlined item-btn delete-btn item-btn-icon" id="r">
                delete
            </span>

        </div>
       `
    }

    for (let i = 0; i < itemsDisplay.length; i++){
        total += itemsDisplay[i].amount
    }

    paymentContainer.innerHTML = appData
    totalContainer.innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    let remaining = fund - total
    remainingContainer.innerHTML = remaining.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    console.log(payments)
}

renderItems()