


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

        // only add an error message if there is not already one
       if (document.getElementsByClassName('error-message-div').length === 0) {
        toDoBoxParent.insertBefore(errorMessageDiv, input)
        }
}
    else {

//creating and configuring elements...

    const createItemBox = document.createElement('div');
createItemBox.className = 'item-box';

const itemsParagraph = document.createElement('p');
itemsParagraph.innerHTML = document.getElementById('input-field').value;
itemsParagraph.contentEditable = 'true';
itemsParagraph.id = 'item-name';
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
editIcon.innerHTML = 'create';
editIcon.id = 'edit-icon';
editIcon.addEventListener('click', editItem)

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


    //error message gets removed when valid item is submitted
    if (document.getElementsByClassName('error-message-div')[0]) {
        toDoBoxParent.removeChild(document.getElementsByClassName('error-message-div')[0]);
    }
    }
}

function clearItems() {
    const itemsList = document.getElementsByClassName('item-list')[0];

    //checks and deletes element(child) if its existence === true
    while (itemsList.firstChild) {
        itemsList.removeChild(itemsList.firstChild)
    }
}



function taskFinished(taskFinished) {

    const checkIcon = document.getElementById('task-finished');
    const hardcodedCheckIcon = document.getElementById('task-finished-hard')

    /* making a difference between the hardcoded initial task
     and the self entered one since for some reason the dynamically
     created ones and the hardcoded one work differently */

    if (taskFinished === hardcodedCheckIcon) {
        taskFinished.parentNode.parentNode.style.backgroundColor = 'lime'
    }
    else if (checkIcon) {
        
        this.parentNode.parentNode.style.backgroundColor = 'lime';
    }
    
   // console.log('task finished');
    
}

function deleteTask(deleteTask) {

    const deleteIcon = document.getElementById('delete-task');
    const hardcodedDeleteIcon = document.getElementById('delete-task-hard')

/* making a difference between the hardcoded initial task
     and the self entered one since for some reason the dynamically
     created ones and the hardcoded one work differently */

    if (deleteTask === hardcodedDeleteIcon){
        deleteTask.parentNode.parentNode.parentNode.removeChild(deleteTask.parentNode.parentNode)
    }
    else if (deleteIcon) {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

    }
}

function editItem(editItem) {
    //const itemName = document.getElementById('item-name');
    const editIcon = document.getElementById('edit-icon')
    const hardcodedEditIcon = document.getElementById('task-edit-hard')

    /* making a difference between the hardcoded initial task
     and the self entered one since for some reason the dynamically
     created ones and the hardcoded one work differently */

    if (editItem === hardcodedEditIcon) {
      
        const respectiveParagraph = editItem.parentNode.parentNode.children[0];

        console.log(respectiveParagraph)
        respectiveParagraph.focus();
        //respectiveParagraph.select();

    }
    else if (editIcon)
    {
        //this is getting crazy
        const respectiveParagraph = this.parentNode.parentNode.firstChild;
        console.log(respectiveParagraph)
        respectiveParagraph.focus();
        //respectiveParagraph.select();

    }
}