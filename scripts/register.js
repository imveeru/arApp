let regForm = document.getElementById("registrationForm");
let errorDiv = document.getElementById("errDiv");
let successText = document.getElementById("successText");

regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name=document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;

    const jsonData={
        "name":name,
        "email":mail,
        "password":password
    }

    const apiUrl = "https://gfsk-backend.onrender.com/register";

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
        successText.style.display="block";
        //window.location.href = "index.html";
    })
    .catch(error => {
        console.error('Error:', error);
        errorDiv.innerText=error;
    });

});