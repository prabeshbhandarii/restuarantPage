window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
    var bigWhiteText = this.document.querySelector(".big-white-text");
    bigWhiteText.classList.toggle("doNotDisplay",window.scrollY > 0);
});

function validateForm(){
    let password = document.forms["myForm"]["password"].value;
    if (password.length < 8) {
        document.getElementById("psw").innerHTML = "Password must contain at least 8 characters.";
    }
}