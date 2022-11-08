// const { stringify } = require("postcss");

let dateTime = new Date();
let day = dateTime.getDay();
let date = dateTime.getDate();
let month = dateTime.getMonth();
let year = dateTime.getFullYear();
console.log(day);
let notesOb;





// SHowing Date
function dateOnScreen() {
    let showDate = document.querySelector('.date');
    let dayMod;
    if (day == 0) dayMod = 'Sunday';
    if (day == 1) dayMod = 'Monday';
    if (day == 2) dayMod = 'Tuesday';
    if (day == 3) dayMod = 'Wednesday';
    if (day == 4) dayMod = 'Thursday';
    if (day == 5) dayMod = 'Friday';
    if (day == 6) dayMod = 'Saturday';
    showDate.innerText = dayMod + ' ' + date + '-' + (month + 1) + '-' + year;
}

dateOnScreen();






// Onchange Code
let button = document.getElementsByClassName('countries');
let buttonArr = Array.from(button);

buttonArr.forEach(function (element, index, arr) {


    element.addEventListener('change', () => {
        let notes = localStorage.getItem('notes');
        // console.log(notes);
        // Initial storing of Local Storage
        if (notes == null) {
            notesOb = [
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                }
            ]
            console.log(notesOb);
        }
        else {
            notesOb = JSON.parse(notes);
        }
        // let option = document.getElementById('${index}');
        if (index == 0) option = document.getElementById('neel0');
        if (index == 1) option = document.getElementById('neel1');
        if (index == 2) option = document.getElementById('neel2');
        if (index == 3) option = document.getElementById('neel3');
        if (index == 4) option = document.getElementById('neel4');
        if (index == 5) option = document.getElementById('neel5');
        if (index == 6) option = document.getElementById('neel6');
        if (index == 7) option = document.getElementById('neel7');
        if (index == 8) option = document.getElementById('neel8');
        if (index == 9) option = document.getElementById('neel9');

        // console.log(option);
        // console.log(option.value);

        if (option.value == 'P') {
            notesOb[index].done += 1;
            notesOb[index].total += 1;
        }
        else if (option.value == 'A') {
            notesOb[index].total += 1;
        }
        localStorage.setItem('notes', JSON.stringify(notesOb));
        showFunc();
    })
})








// Showing function
function showFunc() {
    // Show Attended
    let attended = document.getElementsByClassName('attended');
    let attendedArr = Array.from(attended);
    attendedArr.forEach(function (element, index, arr) {
        
        let notes = localStorage.getItem('notes');
        // console.log(notes);
        if (notes == null) {
            notesOb = [
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                }
            ]
            console.log(notesOb);
        }
        else {
            notesOb = JSON.parse(notes);
        }
        element.innerHTML = `${notesOb[index].done}/${notesOb[index].total} `;
    })



    // Show Percentage
    let perc = document.getElementsByClassName('perc');
    let percArr = Array.from(perc);
    percArr.forEach(function (element, index, arr) {
        
        let notes = localStorage.getItem('notes');
        // console.log(notes);
        if (notes == null) {
            notesOb = [
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                },
                {
                    done: 0,
                    total: 0,

                }
            ]
            console.log(notesOb);
        }
        else {
            notesOb = JSON.parse(notes);
        }
        calculation = (notesOb[index].done/notesOb[index].total)*100;
        console.log(calculation);
        element.innerHTML = Math.round(calculation);
    })
}


// Clear Function
clear = document.getElementById('clear');
clear.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.reload();
})


showFunc();
