let loginForm = document.getElementById("loginForm");
let errorDiv = document.getElementById("errDiv");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let mail = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;

    const jsonData={
        "email":mail,
        "password":password
    }

    const apiUrl = "https://gfsk-backend.onrender.com/login";

    fetch(apiUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        errorDiv.innerText="";
        localStorage.setItem("userName",data["name"]);
        localStorage.setItem("userEmail",data["email"]);
        localStorage.setItem("userId",data["userId"]);
        window.location.href = "home.html";
    })
    .catch(error => {
        console.error('Error:', error);
        errorDiv.innerText=error;
    });

});