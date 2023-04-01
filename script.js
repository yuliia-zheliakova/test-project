function loginMessage() {
  let email = document.querySelector("#input-email");
  alert(`Welcome, ${email.value}! 🎉`);
}

let loginButton = document.querySelector("#login-button");
loginButton.addEventListener("click", loginMessage);
