let dat = new Date();
let month = dat.getMonth() + 1;
let date = dat.getDate();
let length;
if (month==2) {
    length = 28;
}
else if (month==4 || month==6 || month==9 || month==11) {
    length = 30;
}
else{
    length = 31;
}
html='';
let notesObj = [];



// Display boxes
for (let i = 0; i < length; i++) {
    html += ` <button id='${i}' onclick='set(this.id)' class="btn bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 m-1" type="button"
    >${i+1}</button> ` ;
    rows.innerHTML = html;
}


// Setting Local Storage
function set(id) {
    let notes = localStorage.getItem('notes');
    if (notes == null){
        for (let i = 0; i < 31; i++) {
            notesObj[i] = {
                id: i,
                paint: false,
                m: month,
            }
        }
    }
    else{
        notesObj = JSON.parse(notes);
    }
    if (date == Number(id)+1) {
        notesObj[id] = {
            id: Number(id),
            paint: true,
            m: month,
        }
    }
    localStorage.setItem('notes', JSON.stringify(notesObj));
    window.location.reload();
}



// Color + Badge
function showColorBadge() {
    let count = 0;
    let notes = localStorage.getItem('notes');
    if (notes == null){
        for (let i = 0; i < 31; i++) {
            notesObj[i] = {
                id: i,
                paint: false,
                m: month,
            }
        }
    }
    else{
        notesObj = JSON.parse(notes);
    }
    btn = document.getElementsByClassName('btn');
    for (let i = 0; i < 31; i++) {
        if (notesObj[i].paint == true) {
            // btn[i].classList.add('colr');
            btn[i].style.backgroundColor='indigo';
            count++;
        }
        
    }
    // console.log(count);
    if (count >= 10){
        document.getElementById('img10').classList.add('opacity-100');
    }
    if (count >= 20) {
        document.getElementById('img20').classList.add('opacity-100');
    }
    if (count >= 30) {
        document.getElementById('img30').classList.add('opacity-100');
    }
}


// Check Month
function checkMonth() {
    let notes = localStorage.getItem('notes');
    if (notes == null){
        for (let i = 0; i < 31; i++) {
            notesObj[i] = {
                id: i,
                paint: false,
                m: month,
            }
        }
    }
    else{
        notesObj = JSON.parse(notes);
    }
    if (notesObj[0].m != month) {
        localStorage.clear();
        window.location.reload();
    }
}


checkMonth();
showColorBadge();