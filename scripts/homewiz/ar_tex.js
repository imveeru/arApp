let models=["m64","m65","m66","m67","m68","m69","m70","m71","m72","m73"]

let model_names=["Metal tumbler","wooden ladle","sandpaper","Polished glass","comb","Aluminum foil","Ceramic","Plastic","Toy Drum","Sponge"]

let badge_name=["Thermal Conductor","Thermal resistor ","Friction Forager","Sleek Surface Seeker","Abrasive Ally","Electrical Explorer","Delicate Guardian","Sturdy Sentinel","Vibration Voyager","Sound Sculptor"]

let elements=new Array(model_names.length);
console.log(elements);

const currModel=localStorage.getItem("hw_modelId");
let toast=document.getElementById("snackbar");
let isDonno=localStorage.getItem("hw_tex_clue")

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

let m64=document.getElementById("animated-marker-m64")
let m65=document.getElementById("animated-marker-m65")
let m66=document.getElementById("animated-marker-m66")
let m67=document.getElementById("animated-marker-m67")
let m68=document.getElementById("animated-marker-m68")
let m69=document.getElementById("animated-marker-m69")
let m70=document.getElementById("animated-marker-m70")
let m71=document.getElementById("animated-marker-m71")
let m72=document.getElementById("animated-marker-m72")
let m73=document.getElementById("animated-marker-m73")

m64.addEventListener("markerFound", (e)=>{ 

    if (currModel==0){

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

m65.addEventListener("markerFound", (e)=>{ 

    if (currModel==1){

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

m66.addEventListener("markerFound", (e)=>{ 

    if (currModel==2){

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

m67.addEventListener("markerFound", (e)=>{ 

    if (currModel==2){

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

m68.addEventListener("markerFound", (e)=>{ 

    if (currModel==4){

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

m69.addEventListener("markerFound", (e)=>{ 

    if (currModel==5){

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

m70.addEventListener("markerFound", (e)=>{ 

    if (currModel==6){

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

m71.addEventListener("markerFound", (e)=>{ 

    if (currModel==7){

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

m72.addEventListener("markerFound", (e)=>{ 

    if (currModel==8){

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

m73.addEventListener("markerFound", (e)=>{ 

    if (currModel==9){

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