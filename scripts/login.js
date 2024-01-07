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

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

});