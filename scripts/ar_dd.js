let marker1=document.getElementById('animated-marker')
let marker2=document.getElementById('animated-marker2')
let marker3=document.getElementById('animated-marker3')

marker2.addEventListener("markerFound", (e)=>{ 
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":password
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
})
