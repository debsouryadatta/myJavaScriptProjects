const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
quoteBtn = document.querySelector('button'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter');

// random quote function
async function randomQuote(){
    
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading Quote...';
    // fetching random quote/data from the API and parsing it into JS object
    try{
    const res = await fetch('http://api.quotable.io/random');
    const data = await res.json();
    // console.log(data);
    quoteText.innerText = data.content;
    authorName.innerText = data.author;
    quoteBtn.innerText = 'New Quote';
    quoteBtn.classList.remove('loading');
    }catch(err){
        console.log(`The error is ${err}`);
    }
}

soundBtn.addEventListener('click', ()=>{
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utterance
});
copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener('click', ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener('click', randomQuote);