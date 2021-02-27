


function addItem() {


    const toDoBoxParent = document.getElementsByClassName('to-do-box')[0];
    const input = document.getElementsByClassName('input')[0];

    const errorMessageDiv = document.createElement('div');
    errorMessageDiv.className = 'error-message-div'

    const errorMessage = document.createElement('p');
    errorMessage.innerHTML = 'Please enter an item before submitting';
    errorMessage.style.color = 'red';
    errorMessageDiv.appendChild(errorMessage);



    if (document.getElementById('input-field').value === '') {
       if (document.getElementsByClassName('error-message-div').length === 0) {
        toDoBoxParent.insertBefore(errorMessageDiv, input)
        }
}
    else {
    const createItemBox = document.createElement('div');
createItemBox.className = 'item-box';

const itemsParagraph = document.createElement('p');
itemsParagraph.innerHTML = document.getElementById('input-field').value;
//itemsParagraph.innerHTML = 'hello'

const iconsDiv = document.createElement('div');
iconsDiv.className = 'icons'

const checkIcon = document.createElement('i');
checkIcon.className = 'material-icons';
checkIcon.style.color = 'lime';
checkIcon.innerHTML = 'check_circle_outline';
checkIcon.id = 'task-finished'
checkIcon.addEventListener('click',taskFinished);


const editIcon = document.createElement('i');
editIcon.className = 'material-icons';
editIcon.style.color = '#428bca';
editIcon.innerHTML = 'create'

const deleteIcon = document.createElement('i');
deleteIcon.className = 'material-icons';
deleteIcon.style.color = 'red';
deleteIcon.innerHTML = 'delete';
deleteIcon.id = 'delete-task';
deleteIcon.addEventListener('click', deleteTask);

    const itemList = document.getElementsByClassName('item-list')[0];
    itemList.appendChild(createItemBox);
    createItemBox.appendChild(itemsParagraph);
    createItemBox.appendChild(iconsDiv);
    iconsDiv.appendChild(checkIcon);
    iconsDiv.appendChild(editIcon);
    iconsDiv.appendChild(deleteIcon);
    console.log('hello world');

    if (document.getElementsByClassName('error-message-div')[0]) {
        toDoBoxParent.removeChild(document.getElementsByClassName('error-message-div')[0]);
    }
    }
}

function clearItems() {

    const itemsList = document.getElementsByClassName('item-list')[0];

    while (itemsList.firstChild) {
        itemsList.removeChild(itemsList.firstChild)
    }
}



function taskFinished() {

    const checkIcon = document.getElementById('task-finished');

    this.parentNode.parentNode.style.backgroundColor = 'lime';
    
    //console.log('task finished');
    
}

function deleteTask() {
    const deleteIcon = document.getElementById('delete-task');

    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}