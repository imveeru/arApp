let marker1=document.getElementById('ar-marker-1')
let marker2=document.getElementById('ar-marker-2')
let marker3=document.getElementById('ar-marker-3')
let marker4=document.getElementById('ar-marker-4')
let marker5=document.getElementById('ar-marker-5')
let marker6=document.getElementById('ar-marker-6')
let marker7=document.getElementById('ar-marker-7')

let successAudio=new Audio('audio/success.ogg')

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
    successAudio.play();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "invId":"A",
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-inv";

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

marker2.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    successAudio.play();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "invId":"B",
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-inv";

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
    successAudio.play();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "invId":"C",
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-inv";

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

marker4.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    successAudio.play();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "invId":"D",
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-inv";

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

marker5.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    successAudio.play();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "invId":"E",
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-inv";

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

marker6.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    successAudio.play();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "invId":"F",
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-inv";

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

marker7.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    successAudio.play();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "invId":"G",
        //"points":Math.ceil(100/minutes) 
    }

    const apiUrl = "https://gfsk-backend.onrender.com/add-inv";

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
