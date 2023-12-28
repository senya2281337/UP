document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var log = document.getElementById("log").value;
    var pass = document.getElementById("pass").value;
  
    if (log === "admin" && pass === "admin123") {
      window.location.href = "Админ панель.html";
    } else if (log === "klient" && pass === "klient") {
      window.location.href = "lk.html";
    } else {
      alert("Неверный логин или пароль, попробуйте еще раз.");
    }
});