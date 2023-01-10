// 1. Create an empty array. For example: let shoppingList=[]
let shoppingList = []

// 2. Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
let form = document.createElement('form')

let textInput = document.createElement('input')
textInput.type = 'text'
form.appendChild(textInput)

let button = document.createElement('button')
button.textContent = 'Add Item'
button.type = 'button'
form.appendChild(button)

document.body.firstElementChild.appendChild(form)

// 3. Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
button.addEventListener("click", addItem)
function addItem() {
    if((text = textInput.value.trim()).length) {
        shoppingList.push(text)
    }
    textInput.value = ''
    console.log("Shopping List:", shoppingList)
}

// 4. Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function
let buttonClear = document.createElement('button')
form.appendChild(buttonClear)
buttonClear.textContent = 'Clear All'
buttonClear.type = 'button'
buttonClear.addEventListener('click', clearAll)

// 5. Create a function named clearAll() that should clear out all the items in the shopping list.
function clearAll() {
    shoppingList = [];
    console.log("Shopping List:", shoppingList)
}