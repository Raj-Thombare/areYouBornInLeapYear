var inputName = document.querySelector("#input-name")
var btnContinue = document.querySelector("#btn-continue")
var userName = document.querySelector("#username")
var inputDate = document.querySelector("#input-date")
var sections = document.querySelectorAll(".section")
var btnCheck = document.querySelector("#btn-check")
var output = document.querySelector("#output-div")

var Hi = "Hi ";
var leapYearMessage ="Your Birth year is a Leap Year!😁😁😁";
var notLeapYearMessage ="Your Birth year is not a Leap Year!☹️☹️☹️";
const monthDays =[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(y){
    if(y%4===0){
        if(y%100===0){
            if(y%400===0){
                return true
            }else{
                return false
            }
        }
        return true
    }
    return false
};

function continueBtnHandler() {
    if (inputName.value) {
        var userInput = inputName.value;
        userName.innerText = Hi + userInput + "!";
        sections[0].style.display = "none";
        sections[1].style.display = "block";
    } else {
        alert("Please enter name to continue")
    }
};

function checkBtnHandler() {
    var date = inputDate.value;

    if (date) {
        var dateArray = date.split(['/'])
        const day = dateArray[0]
        const month = dateArray[1]
        const year = dateArray[2]
        /* checks if user entered a string, if yes returns true otherwise false*/
        if(isNaN(day) || isNaN(month) || isNaN(year)){
            output.innerText = "Please enter an integer in a valid format (DD/MM/YY)";
        }  /* checks if user entered a number, returns false cause used not operator*/        
        else if(!Number.isInteger(Number(day)) ||!Number.isInteger(Number(month)) || !Number.isInteger(Number(year)) ){
            output.innerText = "Please enter an integer in a valid format (DD/MM/YY)";
        }          /* checks if day, month, year is valid, returns false*/
        else if(31<day || 12<month || 2021<year || month<=0 || day<=0 || year<=0){
            output.innerText = "Please enter an integer in a valid format (DD/MM/YY)";
        }   /*checks if april,june,september,november shouldn't have 31 days, if it has it returns true*/
        else if(day>monthDays[month-1]){
            output.innerText = "Sorry!, the month you've entered should only have 30 or less days: format (DD/MM/YY)";
        }else{

            if(day==29 && month==2){
                if(isLeapYear(year))
                output.innerText = leapYearMessage;

                else
                output.innerText = notLeapYearMessage;
                              
            }
            else{
                if(isLeapYear(year))
                output.innerText = leapYearMessage;

                else
                output.innerText = notLeapYearMessage;
                
            }
        }
    }
};

btnContinue.addEventListener("click", continueBtnHandler)
btnCheck.addEventListener("click", checkBtnHandler)

