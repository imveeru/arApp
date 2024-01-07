let playerName=document.getElementById("playerName");
let playerScore=document.getElementById("playerScores");

const apiUrl = "https://gfsk-backend.onrender.com/login";

fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
    },
    mode: 'no-cors',
    body: JSON.stringify(jsonData),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    errorDiv.innerText=""
    localStorage.setItem("userName",data["name"]);
    localStorage.setItem("userEmail",data["email"]);
    localStorage.setItem("userId",data["userId"]);
    window.location.href = "home.html";
})
.catch(error => {
    console.error('Error:', error);
    errorDiv.innerText=error
});