// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// STOPPED AT 7:05 ////// 
// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click',clearItems)
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    
    if(value  && !editFlag){ // shortened from:     if(value !== '' && editFlag === false){
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn"> <i class="fas fa-edit"></i></button>
          <button type="button" class="delete-btn"> <i class="fas fa-trash"></i></button>
        </div>`

//set up editing and deleting the function here, bc you can access it from here, bc we're adding items dynamically
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');

        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

// append child
        list.appendChild(element);
//display alert
        displayAlert('item added','sucess');
        container.classList.add('show-container');
        // add to local storage
        addToLocalStorage(id, value);
        
        // set back to default
        setBackToDefault();
    } else if(value && editFlag){ // shortened from  else if(value !== '' && editFlag == true){

        // editing
    } else {
        displayAlert('enter value', 'danger');
    }
}

//display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

// remove alert
    setTimeout(function(){//setTimeout(function(){},1000): setTiomeout: two parameters, a callback function and when it's called (in miliseconds)
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
    },1000) 
    
}

//clear items
        
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container'); //after clearing the list, this removes the button as well
    displayAlert("empty list", "danger");
    setBackToDefault();
    //localStorage.removeItem('list');
}

//edit
function editItem(){
    console.log('edeting item');
}
//delete
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();

    //remove from local storage
    removeFromLocalStorage(id);
}


// set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    console.log('in local storage');
}

function removeFromLocalStorage(id){

}
// ****** SETUP ITEMS **********
