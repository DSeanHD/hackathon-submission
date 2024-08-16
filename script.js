const officialPassword = localStorage.getItem("password");
const officialUsername = localStorage.getItem("username");
const password = document.getElementById("password");
const wrongPassword = document.getElementById("wrongPassword");
const submitBtn = document.getElementById("submitBtn");
const username = document.getElementById("username");
const wrongUsername = document.getElementById("wrongUsername");

const isPasswordIncorrect = () => {
    if (officialUsername === null && officialPassword === null) {
        wrongUsername.innerText = "Username and Password not available";
        return null;
    }

    if (password.value === "" && username.value === "") {
        wrongPassword.innerText = "Please enter a password";
        wrongUsername.innerText = "Please enter a username";
        return null;
    } else if (password.value === "") {
        wrongPassword.innerText = "Please enter a password";
    } else if (username.value === "") {
        wrongUsername.innerText = "Please enter a username";
    }

    if (username.value !== officialUsername && username.value !== "") {
        wrongUsername.innerText = "Wrong Username. Please enter the correct one";
    }

    if (password.value === officialPassword) {
        wrongPassword.innerText = "Password correct!. Please make it incorrect and the same length as your password to enter";
    } else if (password.value !== officialPassword && password.value.length < officialPassword.length && password.value !== "") {
        wrongPassword.innerText = "Incorrect, but, please make it the same length as your password";
    } else if (password.value !== officialPassword && password.value.length === officialPassword.length) {
        wrongPassword.innerText = "";
    }

    if (password.value !== officialPassword && username.value === officialUsername && password.value.length === officialPassword.length) {
        location.href = "passwords.html";
    }
}

submitBtn.addEventListener("click", isPasswordIncorrect);

password.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        isPasswordIncorrect();
    }
});

username.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        isPasswordIncorrect();
    }
});

window.addEventListener("load", () => {
    document.getElementsByTagName("header")[0].style.marginTop = "0px";
    document.body.style.opacity = "1";
});