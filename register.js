const password = document.getElementById("password");
const wrongPassword = document.getElementById("wrongPassword");
const submitBtn = document.getElementById("submitBtn");
const username = document.getElementById("username");

const handleRegister = () => {
    if (password.value === "" && username.value === "") {
        return null;
    } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        location.href = "passwords.html";
    }
}

submitBtn.addEventListener("click", handleRegister);

password.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleRegister();
    }
});
