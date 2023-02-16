// change email button 
let emailInput = document.querySelector(".general-info input[type='email']");
let changeEmailButton = document.querySelector(".general-info input[type='email'] + a");

changeEmailButton.addEventListener("click",() => {
    emailInput.disabled = !emailInput.disabled;
})