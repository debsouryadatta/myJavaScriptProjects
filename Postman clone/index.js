console.log('YO');

// Utility Function  
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}  


// Initialize no. of counts
let addedParamCount = 0;

// Hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user clicks on params box, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', ()=>{
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

// If the user clicks on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', ()=>{
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})

// If the user clicks on + button, add more Parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click',()=>{
    let params = document.getElementById('params');
    let string = `<div class="row g-3 my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
      <div class="col-md-4">
        <input type="type" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
      </div>
      <div class="col-md-4">
        <input type="type" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parametrer ${addedParamCount + 2} Value">
      </div>
      <button id="addParam" class="btn btn-primary col-md-1 deleteParam"> - </button>
    </div>`;
    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    // console.log(paramElement);
    params.appendChild(paramElement);
    // Add event listener to remove the parameter on clicking '-' button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e)=>{
            // TODO: Add a confirmation box to confirm parameter deletion
            e.target.parentElement.remove();
        })
    } 
    addedParamCount++;
})

// If the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    // Show please wait in the response box to request patience from the user
    document.getElementById('responsePrism').innerHTML = "Please wait... Fetching";

    // Fetch all the values user has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;


    // If user has used params option instead of json, collect all the parametersin an object
    if (contentType=='params') {
        data = {};
        for (let i = 0; i < addedParamCount+1; i++) {
            if (document.getElementById('parameterKey' + (i+1))!= undefined) {
                let key = document.getElementById('parameterKey'+ (i+1)).value;
                let value = document.getElementById('parameterValue'+ (i+1)).value;
                data[key] = value;
            }
            data = JSON.stringify(data);
        }
    }
    else{
        data = document.getElementById('requestJsonText').value;
    }

     // log all the values in the console for debugging
     console.log('Url is ', url);
     console.log('requestType is ', requestType);
     console.log('contentType is ', contentType);
     console.log('data is ', data);

    //  If the request type is get, invoke fetch api to create a get request
    if(requestType =='GET'){
        fetch(url, {
            method: 'GET',
        })
        .then(response=> response.text())
        .then((text)=>{
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }
        //  else the request type is post, invoke fetch api to create a post request
    else{
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
        .then(response=> response.text())
        .then((text)=>{
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }
} )