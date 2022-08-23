// Select Each Element 

const cart = []

function addToCart(element){
    const playerName = element.parentNode.children[0].innerText
    const ol = document.getElementById('ol')
    const li = document.createElement('li')
    li.innerText = playerName

    element.setAttribute("disabled", true)
    
    cart.push(li.innerText = playerName)

    let count = cart.length

    const stop = document.getElementById('stop')
    if(count == 5) {
        disableBtn()
        stop.style.display = 'block'
    }
    if(count <= 5){
        ol.appendChild(li)
        element.style.backgroundColor = 'green'
        element.innerText = "Selected"
        element.classList.add("active")
        element.classList.remove("deactive")
    }else{
        stop.style.display = 'block'
    }

}

function disableBtn() {
    let elements = document.getElementsByClassName("deactive")
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled =true;
        elements[i].innerText = "Select";
      }
}


// Common function start 


function getValue(elementId){
    const element = document.getElementById(elementId)
    const elementString = element.value
    const elementCost = parseFloat(elementString)
    return elementCost
}


function orderList(elementId){
    const element = document.getElementById(elementId)
    const elementChild = element.children.length
    return elementChild
}



// common function end 

document.getElementById('calculate').addEventListener('click', function(){

    const playerCost = getValue('player')
    const olChild = orderList('ol')
    const playerExpense = playerCost * olChild


    const expenses = document.getElementById('expenses')
    
    const playerValidation = document.getElementById('player-validation')

    if(isNaN(playerExpense)){
        playerValidation.style.display = 'block'
    }else {
        expenses.innerText = playerExpense
        playerValidation.style.display = 'none'
    }
    
})


document.getElementById('calculate-total').addEventListener('click', function(){
    // manager cost 
    const managerCost = getValue('manager')

    // coach cost 
    const coachCost = getValue('coach')

    manager.value = '';
    coach.value = '';
    // manager coach total 
    const newTotal = managerCost + coachCost

    // player cost 
    const playerCost = getValue('player')
    player.value = '';


    const olChild = orderList('ol')
    
    const playerExpense = playerCost * olChild

    // total 
    const previousTotal = document.getElementById('total')

    const totalValidation = document.getElementById('total-validation')

    if(isNaN(newTotal && playerExpense)){
        totalValidation.style.display = 'block'
    }
    else {
        previousTotal.innerText = playerExpense + newTotal
        totalValidation.style.display = 'none'
    }
})




