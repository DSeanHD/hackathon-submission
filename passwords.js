const info = [
    {
        username: "dseanhd",
        url: "youtube.com",
        password: "testing"
    },
    {
        username: "codingwithlewis",
        url: "YouTube.com",
        password: "SUBSCRIBE TO CODING WITH LEWIS"
    }
]

let passwordContainer = document.getElementById("password-container");
let errorMessage = document.getElementById("error-message");

for (let i = 0; i < info.length; i++) {
    passwordContainer.innerHTML += `
        <div class="password-item">
            <h2>Password #${i + 1}</h2>
            <div class="input-area">
                <input id="getInput${i}" type="text">
                <button id="btn${i}">Enter</button>
            </div>
        </div>
    `;
}

for (let i = 0; i < info.length; i++) {
    let btn = document.getElementById(`btn${i}`);
    let getInput = document.getElementById(`getInput${i}`);
    
    const showInfo = () => {
        if (getInput.value !== "helloworld" && getInput.value !== "" && getInput.value.length === 10) {
            errorMessage.style.display = "none";

            passwordContainer.innerHTML = `
                <h1>Password #${i + 1}</h1><br>
                <h3>Username: ${info[i].username}</h3>
                <h3>URL: ${info[i].url}</h3>
                <h3>Password: ${info[i].password}</h3>
                <button class="go-back-btn" onclick="location.href = 'passwords.html'">Back</button>
            `;
        } else {
            errorMessage.style.display = "block";
        }
    }
    
    btn.addEventListener("click", showInfo);
    getInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            showInfo()
        }
    })
}
