function togglePassword(){
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" :"password";
}