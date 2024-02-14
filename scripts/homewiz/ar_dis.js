let models=["m41","m42","m43","m84","m45","m46","m85","m48","m50","m49","m52","m53","m86","m55","m56","m57","m58","m59","m60","m61","m62"]

let model_names=["Loose electrical cord","Slippery tile","Harmful chemical","Unstable furniture","Sharp object","Earthquake-resistant furniture","Fire extinguisher","Emergency supplies kit and an evacuation plan","Baking soda and vinegar","Rusting of metal objects","Salt","Ice pack","Detol and bandaid","Blue bin","Yellow bin","Brown bin","White bin","Red bin","Green bin","LED bulbs with star rating","Have plants"]

let badge_name=["Electric Odyssey","Slick Showdown","Chemical-Conundrum","Furniture Frenzy","Sharper-Quest","Quake-Quest","Inferno-Expedition","Emergency-Evasion","Culinary-Cascade","Atmospheric-Metamorphosis","Fizz Fusion","Saline-Sojourn","Healing-Harmony","Cut-Care","Paper-Palette","Plastic Prism","Aluminum Alloy","Glass Gallery","Chemical Canvas","Biodegradable Bounty","Energy Emissary","Air Alchemist"]

let elements=new Array(model_names.length);
console.log(elements);

const currModel=localStorage.getItem("hw_modelId");
let toast=document.getElementById("snackbar");
let isDonno=localStorage.getItem("hw_dis_clue")

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

let m41=document.getElementById("animated-marker-m41")
let m42=document.getElementById("animated-marker-m42")
let m43=document.getElementById("animated-marker-m43")
let m84=document.getElementById("animated-marker-m84")
let m45=document.getElementById("animated-marker-m45")
let m46=document.getElementById("animated-marker-m46")
let m85=document.getElementById("animated-marker-m85")
let m48=document.getElementById("animated-marker-m48")
let m50=document.getElementById("animated-marker-m50")
let m49=document.getElementById("animated-marker-m49")
let m52=document.getElementById("animated-marker-m52")
let m53=document.getElementById("animated-marker-m53")
let m86=document.getElementById("animated-marker-m86")
let m55=document.getElementById("animated-marker-m55")
let m56=document.getElementById("animated-marker-m56")
let m57=document.getElementById("animated-marker-m57")
let m58=document.getElementById("animated-marker-m58")
let m59=document.getElementById("animated-marker-m59")
let m60=document.getElementById("animated-marker-m60")
let m61=document.getElementById("animated-marker-m61")
let m62=document.getElementById("animated-marker-m62")

m41.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==0){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m42.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==1){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m43.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==2){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m84.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==3){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m45.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==4){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m46.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==5){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m85.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==6){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m48.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==7){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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


m50.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==8){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m49.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==9){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m52.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==10){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m53.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==11){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m86.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==12){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m55.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==13){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m56.addEventListener("markerFound", (e)=>{ 
    

    // alert(models[i])

    if (currModel==14){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m57.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==15){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m58.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==16){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m59.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==17){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m60.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==18){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m61.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==19){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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

m62.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])

    if (currModel==20){
    

        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        const jsonData={
            "userId":localStorage.getItem("userId"),
            "gameId":"HW",
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