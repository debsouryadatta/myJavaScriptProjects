console.log('yo');
showNotes();
// If user adds a note, add it to the local storage 
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value ='';
    // console.log(notesObj);
    showNotes();
});


// function to show elements from local storage 
function showNotes() {
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html ='';
    notesObj.forEach(function(element, index){

        html += `
        <div class="noteCard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index +1}</h5>
          <p class="card-text">${element}</p>
          <button id='${index}' onclick= "deleteNote(this.id)" href="#" class="btn btn-primary">Delete </button>
        </div>
      </div> 
      `
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length !=0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Add a note to show!!`;
    }
}

// Function to delete a note 
function deleteNote(index) {
    // console.log('I am deleting this note');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


// Searcing Option 
let search = document.getElementById('searchTxt');
search.addEventListener('input', function() {

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTx = element.getElementsByTagName('p')[0].innerText;
        let cardTxt = cardTx.toLocaleLowerCase();
        if(cardTxt.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }


    })
})

// Further features to be added:
// 1.Add Title
// 2.Mark a note as important
// 3.Separate Notes by user
// 4.Sync & host to web server
