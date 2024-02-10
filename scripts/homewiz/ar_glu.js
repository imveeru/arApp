let models=["m74","m78","m76","m77","m88","m89","m80","m81","m90","m87"]


let model_names=["White Glue","Electrical tape","Super Glue","Magnets","Epoxy","Wood Glue","Double-sided tape","Putty","Velcro ","Duct tape"]

let badge_name=["Paper Permanence","Electrical Explorer","Surface Bonding Sage","Metal Marvel","Preserving Maestro","Wooden Wonder","Twin Twined","Moldable Marvel","Fastening Maestro","Handy Fixer"
]

let elements=new Array(model_names.length);
console.log(elements);

const currModel=localStorage.getItem("hw_modelId");
let toast=document.getElementById("snackbar");
let isDonno=localStorage.getItem("hw_glu_clue")

if(isDonno==1){
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
}

// for(i in models){

//     elements[i].addEventListener("markerFound", (e)=>{ 

//         // alert(models[i])
//         console.log("Scanned",models[i]);

//         if (currModel==i){
//             successAudio.play();
//             toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[i]}`;
//             toast.className = "show";
//             setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
//             const jsonData={
//                 "userId":localStorage.getItem("userId"),
//                 "gameId":"DD",
//                 "points":Math.ceil(100/minutes) 
//             }

//             const apiUrl = "https://gfsk-backend.onrender.com/add-points";
    
//             fetch(apiUrl,{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 mode: 'cors',
//                 body: JSON.stringify(jsonData),
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Success:', data);
//                 //window.location.href = "index.html";
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//         }else{
//             popup.style.visibility="visible";
//             failureAudio.play();
//             // capture()
//         }
    
//     })
// }

let m74=document.getElementById("animated-marker-m74");
let m78=document.getElementById("animated-marker-m78");
let m76=document.getElementById("animated-marker-m76");
let m77=document.getElementById("animated-marker-m77");
let m88=document.getElementById("animated-marker-m88");
let m89=document.getElementById("animated-marker-m89");
let m80=document.getElementById("animated-marker-m80");
let m81=document.getElementById("animated-marker-m81");
let m90=document.getElementById("animated-marker-m90");
let m87=document.getElementById("animated-marker-m87");


m74.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==0){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})

m78.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==1){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})

m76.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==2){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[i]}`;
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
        // capture()
    }

})

m77.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==3){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})

m88.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==4){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})

m89.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==5){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})

m80.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==6){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})

m81.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==7){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})

m90.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==8){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})

m87.addEventListener("markerFound", (e)=>{ 

    // alert(models[i])
    console.log("Scanned");

    if (currModel==9){
        successAudio.play();
        toast.innerHTML=`<img width="200" src="hw_badges/${badge_name[currModel]}.svg" alt=${badge_name[currModel]}/> <br/> ${model_names[currModel]}`;
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
        // capture()
    }

})