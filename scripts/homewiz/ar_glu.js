let models=["m74","m78","m76","m77","m88","m89","m80","m81","m90","m87"]

let model_names=["White Glue","Electrical tape","Super Glue","Magnets","Epoxy","Wood Glue","Double-sided tape","Putty","Velcro ","Duck tape"]

let elements=new Array(model_names.length);
console.log(elements);

const currModel=localStorage.getItem("hw_modelId");
let toast=document.getElementById("snackbar");

let successAudio=new Audio('audio/success.mp3')
let failureAudio=new Audio('audio/failure.mp3')

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

let popup=document.getElementById("popupContainer")

for(i in models){
    elements[i]=document.getElementById("animated-marker-"+models[i]);
    console.log(models[i]+" - "+model_names[i]);

    elements[i].addEventListener("markerFound", (e)=>{ 

        alert(models[i])

        if (currModel==i){
        
        
        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"DD",
            "points":Math.ceil(100/minutes) 
        }
    
            successAudio.play();
            toast.innerHTML=model_names[i];
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
            popup.style.visibility="visible";
            failureAudio.play();
            capture()
        }
    
    })
}

