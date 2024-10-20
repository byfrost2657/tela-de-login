function toggleForms() {
    const loginBox = document.querySelector('.login-box');
    const registerBox = document.querySelector('.register-box');
    if (loginBox.style.display === "none") {
        loginBox.style.display = "flex";
        registerBox.style.display = "none";
    } else {
        loginBox.style.display = "none";
        registerBox.style.display = "flex";
    }
}