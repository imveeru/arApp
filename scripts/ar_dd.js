let marker1=document.getElementById('animated-marker')
let marker2=document.getElementById('animated-marker2')
let marker3=document.getElementById('animated-marker3')
let toast = document.getElementById("snackbar");

let test=document.getElementById("animated-marker3")
console.log(test.children[0].attr)

let currModel=localStorage.getItem("modelId")
console.log(currModel);

let timerInterval;
let totalSeconds = 0;
let minutes;

function startStopwatch() {
    timerInterval = setInterval(updateStopwatch, 1000);
}

function updateStopwatch() {
    totalSeconds++;

    const hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
    document.getElementById('timer').textContent = formattedTime;
}

function stopStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    stopStopwatch();
    totalSeconds = 0;
    document.getElementById('timer').textContent = '00:00:00';
}

function formatTimeComponent(timeComponent) {
    return timeComponent < 10 ? `0${timeComponent}` : timeComponent;
}

document.addEventListener('DOMContentLoaded', function() {
    startStopwatch();
});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

marker1.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

    if (currModel==9){
        //alert("Watha");
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        const apiUrl = "https://gfsk-backend.onrender.com/add-points";

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
            //window.location.href = "index.html";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }else{
        
    }


})

marker2.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-points";

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
        //window.location.href = "index.html";
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

marker3.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-points";

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
        //window.location.href = "index.html";
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
