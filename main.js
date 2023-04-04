const form  = document.querySelector(".age-calculator-inputs");
const submitButton = document.querySelector("#submit-btn");
const dayErrorText = document.querySelector("#day-error");
const monthErrorText = document.querySelector("#month-error");
const yearErrorText = document.querySelector("#year-error");

let formLabels = document.querySelector("form > div > label");

let dayTextField = document.querySelector("#day-input");
let monthTextField = document.querySelector("#month-input");
let yearTextField = document.querySelector("#year-input");

let currentYear, currentMonth, currentDay;


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    validatingForm();
        console.log("hi");

        if (isNaN(dayTextField.value) || isNaN(monthTextField.value) || isNaN(yearTextField.value) || dayTextField.value < 1 || dayTextField.value > 31 || monthTextField.value < 1 || monthTextField.value > 12 || yearTextField.value === "") {
            defaultValueOfOutput();
            return;
        }     else if (yearTextField.value > currentYear) {
            defaultValueOfOutput()
            return;
        }   else {
            console.log(currentMonth);
            console.log(currentYear - yearTextField.value);
            console.log(currentDay);

            countYear();    
            countMonth();
            countDay();
        }
        

});


// creating a function for validation;
function validatingForm() {
    const today = new Date();


    let dayValue = dayTextField.value;
    let monthValue = monthTextField.value;
    let yearValue = yearTextField.value;

    if (dayValue == "" || monthValue == "" || yearValue == "") {
        // Check for empty fields and set error text and border for each field
        if (dayValue === "") {
            dayErrorText.innerText = "This field is required";
            dayTextField.classList.add('error');
            dayTextField.focus();
        } else {
            dayTextField.classList.remove('error');
            dayErrorText.innerText = "";
        }

        if (monthValue === "") {
            monthErrorText.innerText = "This field is required";
            monthTextField.classList.add('error');
            // If day field is not empty, focus on month field
            if (dayValue !== "") {
                monthTextField.focus();
            }
        } else {
            monthErrorText.innerText = "";
            monthTextField.classList.remove('error');
        }

        if (yearValue === "") {
            yearErrorText.innerText = "This field is required";
            yearTextField.classList.add('error');
            // If day and month fields are not empty, focus on year field
            if (dayValue !== "" && monthValue !== "") {
                yearTextField.focus();
            }
        } else {
            yearErrorText.innerText = "";
            yearTextField.classList.add('error');
        }
    } else {
        if (dayValue >= 1 && dayValue <= 31) {
            dayErrorText.innerText = "";
            dayTextField.style.border = "0.124rem solid var(--line)";

            currentDay = today.getDate() - dayTextField.value;
            if (currentDay < 0) {
            let daysInmonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
            currentDay = daysInmonth + currentDay;
            }

        } else {
            dayErrorText.innerText = "Must be a valid day";
            dayTextField.style.border = "0.124rem solid var(--red)";
            
            dayTextField.focus();
        }

        if (monthValue >= 1 && monthValue <= 12) {
            monthErrorText.innerText = "";
            monthTextField.style.border = "0.124rem solid var(--line)";

            currentMonth = today.getMonth() - monthTextField.value;
            if (currentMonth < 0) {
            currentMonth = 12 + currentMonth;
            currentYear -= 1;
            }


        } else {
            monthErrorText.innerText = "Must be a valid month";
            monthTextField.style.border = "0.124rem solid var(--red)";

            if (dayValue !== "") {
                monthTextField.focus();
            }
        } 
        if (yearValue > currentYear) {
            yearErrorText.innerText = "Must be in present year";
            yearTextField.style.border = "0.124rem solid var(--red)";
          } else {
            yearErrorText.innerText = "";
            yearTextField.style.border = "0.124rem solid var(--line)";

            currentYear = today.getFullYear();
          }
    }
}


    function countYear() {
        let year = 0;

        for (let i = 0; i < currentYear - yearTextField.value; i++) {
            setTimeout(() => {
              year++;
              document.querySelector('.year').innerText = year;

                console.log(year);
            }, 100 * (i + 1));
        }
    }

    function countMonth() {
        let month = 0;

        for (let i = 0; i < currentMonth; i++) {
            setTimeout(() => {
                month++;
               document.querySelector('.month').innerText = month;

                console.log(month);
            }, 100 * (i + 1));
        }
    }

    function countDay() {
        let day = 0;

        for (let i = 0; i < currentDay; i++) {
            setTimeout(() => {
                day++;
                document.querySelector('.days').innerText = day;

                console.log(day);
            }, 100 * (i + 1));
        }
    }

        //removing input of textfield value after submitting it.
        function removeValueOfTextField() {
            dayTextField.value = "";
            monthTextField.value = "";
            yearTextField.value = "";
        }

        function defaultValueOfOutput() {
            document.querySelector('.year').innerText = "--";
            document.querySelector('.month').innerText = "--";
            document.querySelector('.days').innerText = "--";
        }
