const form = document.getElementById("contactForm");
const formInfo = document.getElementById("formInfo");

const showMessage = (message) => {
    const text = document.createElement('p');
    text.textContent = message;
    formInfo.appendChild(text);
}

function clearMessage() {
    while(formInfo.firstChild){
        formInfo.removeChild(formInfo.firstChild);
    }
}

function sendMessage() {
    showMessage("Sending your message...");
    
    setTimeout(() => {
        clearMessage();
        showMessage("Message sent");
        setTimeout(() => {
            clearMessage();
        }, 1500);
    }, 3000);

} 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessage();
});

const experiences = document.getElementsByClassName("experience");
for(let x = 0; x < experiences.length; x++){
    const item = experiences[x];
    item.addEventListener("mouseenter", (event) => {
        event.target.style = "background-color: #cfcaca;";
    });
    item.addEventListener("mouseleave", (event) => {
        event.target.style = "";
    });
}


