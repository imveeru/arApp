let models=["m74","m78","m76","m77","m88","m89","m80","m81","m90","m87"]

let model_names=["White Glue","Electrical tape","Super Glue","Magnets","Epoxy","Wood Glue","Double-sided tape","Putty","Velcro ","Duck tape"]

let badge_name=["Paper Permanence","Electrical Explorer","Surface Bonding Sage","Metal Marvel","Preserving Maestro","Wooden Wonder","Twin Twined","Moldable Marvel","Fastening Maestro","Handy Fixer"]

let elements=new Array(model_names.length);
console.log(elements);

const currModel=localStorage.getItem("hw_modelId");
let toast=document.getElementById("snackbar");
let isDonno=localStorage.getItem("hw_glu_clue")

if(isDonno==1){
    console.log("aamaa")
    toast.innerHTML = `Find <br/> <img width="150" src="markers/${models[currModel]}.png" alt=${model_names[currModel]}/> <br/> ${model_names[currModel]}`;
    toast.className = "show";
}

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

        // alert(models[i])

        if (currModel==i){
            successAudio.play();
            toast.innerHTML=`<img width="100" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[i]}`;
            toast.className = "show";
            setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
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
        }else{
            popup.style.visibility="visible";
            failureAudio.play();
            capture()
        }
    
    })
}

