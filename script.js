window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
    var bigWhiteText = this.document.querySelector(".big-white-text");
    bigWhiteText.classList.toggle("doNotDisplay",window.scrollY > 0);
});

const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const phone_no = document.getElementById("phone_no");
const comment = document.getElementById("comment");
const errorElement = document.getElementById("error-message");


window.addEventListener("submit", (e) => {
    let messages = [];
    if(first_name.value === '' || first_name.value == null){
        messages.push("This field cannot be left empty");
    }
    if(password.value.length <= 8){
        messages.push("Password must be longer than 8 characters");
    }
    if(password.value.length >= 30){
        messages.push("Password must be shorter than 30 characters");
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    } 
});