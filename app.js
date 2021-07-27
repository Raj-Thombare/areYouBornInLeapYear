var inputName = document.querySelector("#input-name")
var btnContinue = document.querySelector("#btn-continue")
var userName =document.querySelector("#username")
var inputDate =document.querySelector("#input-date")
var sections =document.querySelectorAll(".section")

var Hi = "Hi ";
var wishes = " !have a good day :D ";


function continueBtnHandler() {
    if(inputName.value){
        var userInput = inputName.value;
        userName.innerText = Hi + userInput + wishes;
        sections[0].style.display = "none"; 
        sections[1].style.display = "block"; 
    }else {
        alert("Please enter name to continue")
    }
    
};

btnContinue.addEventListener("click", continueBtnHandler)

