const form = document.querySelector("#form")
const password = document.querySelector("#password")
const errorMessage = document.querySelector(".error")
const loginContainer = document.querySelector(".login-container")
const loginBtn = document.querySelector("#login")

form.addEventListener("submit", e => {
    const message = new Array()

    if (password.value !== "password123") {
        message.push("The username or password you have entered is incorrect")
    }

    if (message.length > 0) {
    e.preventDefault()
    errorMessage.innerText = message.join(", ")
    loginContainer.style.height = "450px"
    loginBtn.style.marginBottom = "10px"
    }
})