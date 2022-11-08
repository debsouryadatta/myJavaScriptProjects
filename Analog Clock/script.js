setInterval(() => {
    d= new Date();
    htime= d.getHours();
    mtime= d.getMinutes();
    stime= d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;


    // The below steps are not req. but you can also use them,it will not affect anything.
    // hour= document.querySelector('#hour');
    // minute= document.querySelector('#minute');
    // second= document.querySelector('#second');

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);

setTimeout(function() { hour.style.transform = 'rotate(0deg)'; }, 1000);