document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "raghu@aithcloud.com" && password === "12345678") {
        alert("Welcome, raghu! You are logedin");
        
    } 
     else {
        alert("Invalid username or password!");
        
    }
});