let toDoInput = document.querySelectorAll(".to-do-input")[0];
let todoNum = document.querySelectorAll("#printed-num")[0];
let todoErrorPara = document.querySelectorAll("p")[0];

function strToNumberConverter() {
    toDoInputValue = parseInt(toDoInput.value);
    toDoNumValue = parseInt(todoNum.innerHTML);
}


function showError() {
    todoErrorPara.innerHTML = "Please Enter a valid Number";
    setTimeout(function () {
        todoErrorPara.innerHTML = "";
    }, 3000);
}

function incrementButtonHandler() {

    let currentNum = parseInt(todoNum.innerHTML);
    todoNum.innerHTML = currentNum + 1;

}

function decrementButtonHandler() {

    let currentNum = parseInt(todoNum.innerHTML);
    todoNum.innerHTML = currentNum - 1;

}




function addButtonHandler() {
    strToNumberConverter();
    if (!isNaN(toDoInputValue)) {
        let newAddTotal = toDoNumValue + toDoInputValue;
        todoNum.innerHTML = newAddTotal;
        toDoInput.value = "";
    }
    else {
        showError();
    }
}


function subButtonHandler() {
    strToNumberConverter();


    if (!isNaN(toDoInputValue)) {
        let newAddTotal = toDoNumValue - toDoInputValue;
        todoNum.innerHTML = newAddTotal;

        toDoInput.value = "";
    }
    
    else {
        showError();
    }
};




