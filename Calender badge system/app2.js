function submitFunc() {
    let name = localStorage.getItem('name');
    if (name == null){
        name = '';
    }
    else{
        name = JSON.parse(name);
    }
    name = document.querySelector('input').value;
    localStorage.setItem('name', JSON.stringify(name));
    document.querySelector('i').innerHTML=`${name} Dashboard`;
    console.log(name);
}

function showName(){
    let name = localStorage.getItem('name');
    if (name == null){
        name = '';
    }
    else{
        name = JSON.parse(name);
    }
    document.querySelector('i').innerHTML=`${name} Dashboard`;
}

showName();