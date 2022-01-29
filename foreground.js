const ce_main_container = document.createElement('DIV');
const ce_name = document.createElement('DIV');
const ce_input = document.createElement('INPUT');
const text = document.createTextNode(document.all[0].innerText)
const ce_button = document.createElement('DIV');

ce_main_container.classList.add('ce_main');
ce_name.id = 'ce_name';
//ce_button.id = 'ce_button';

ce_name.innerHTML = `Bad Ingredients`;
//ce_button.innerHTML = `test`;

ce_main_container.appendChild(ce_name);
ce_main_container.appendChild(text);
//ce_main_container.appendChild(ce_button);


document.querySelector('body').appendChild(ce_main_container);

chrome.runtime.sendMessage({ 
    message: "get_name" 
}, response => {
    if (response.message === 'success') {
        ce_name.innerHTML = `Ingredients`;
    }
});

ce_button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ 
        message: "HELLO",
        payload: ce_input.value
    }, response => {
        if (response.message === 'success') {
            ce_name.innerHTML = `test`;
        }
    });
});

function getText(){
    return document.body.innerText
}
console.log(getText());
function getHTML(){
    return document.body.outerHTML
}