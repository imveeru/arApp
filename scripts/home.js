let playerName=document.getElementById("playerName");
let playerScore=document.getElementById("playerScore");

playerName.innerText=localStorage.getItem("userName");

const apiUrl = "https://gfsk-backend.onrender.com/get-points/"+localStorage.getItem("userId");

fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
    },
    mode: 'cors'
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data["points"]);
    playerScore.innerText=data["points"];
})
.catch(error => {
    console.error('Error:', error);
});