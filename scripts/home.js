let playerName=document.getElementById("playerName");
let playerScore=document.getElementById("playerScore");

playerName.innerText=localStorage.getItem("userName");

if(localStorage.getItem("userName")==undefined || localStorage.getItem("userName")=="Guest" || localStorage.getItem("userName")==null){
    localStorage.setItem("userName","Guest")
    playerName.innerText=localStorage.getItem("userName");
}else{

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

    console.log(localStorage.getItem("userName"));
}


let navOpen=document.getElementById("navOpen")
let navClose=document.getElementById("navClose")
let navBar=document.getElementById("navBar")

function openNav(){
    navBar.style.visibility="visible"
}

function closeNav(){
    navBar.style.visibility="hidden"
}