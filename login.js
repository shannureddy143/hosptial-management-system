function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Dummy credentials
    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Invalid Username or Password";
    }
}
