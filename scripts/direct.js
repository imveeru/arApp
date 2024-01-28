let marker1=document.getElementById('animated-marker')
let marker2=document.getElementById('animated-marker2')
let marker4=document.getElementById('animated-marker4')
let marker5=document.getElementById('animated-marker5')
let marker23=document.getElementById('animated-marker23')
let marker32=document.getElementById('animated-marker32')
let marker34=document.getElementById('animated-marker34')
// let marker8=document.getElementById('animated-marker8')
let marker16=document.getElementById('animated-marker16')
let marker18=document.getElementById('animated-marker18')
let marker9=document.getElementById('animated-marker9')
let marker7=document.getElementById('animated-marker7')
let marker11=document.getElementById('animated-marker11')
let marker10=document.getElementById('animated-marker10')

let toast = document.getElementById("snackbar");

// let marker3=document.getElementById("animated-marker3")
// console.log("attr",marker3.children[0].attr)

let currModel=localStorage.getItem("modelId")
console.log(currModel);

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
    // document.getElementById('timer').textContent = formattedTime;
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

// const shareSS=async(imgFile)=>{
//     // if (!navigator.canShare({files:imgFile})) {
//     //     alert(`Your browser doesn't support the Web Share API.`);
//     //     return;
//     // }

//     // if (navigator.canShare({ imgFile })) {
//         try {
//           await navigator.share({
//             imgFile,
//             title: "Images",
//             text: "Beautiful images",
//           });
//           alert("Shared!");
//         } catch (error) {
//           alert(`Error: ${error.message}`);
//         }
//     //   } else {
//     //     output.textContent = `Your system doesn't support sharing these files.`;
//     //   }
// }

function shareMe(){
    let imgData
    html2canvas(document.body).then(canvas => {
        let a = document.createElement("a");
        a.download = "ss.png";
        a.href = canvas.toDataURL("image/png");
        imgData = canvas.toDataURL("image/png");
        console.log(imgData);
      });

    navigator.share({
        files:[imgData],
        title: 'GSFK AR Connect',
        text: 'Hey all, I\'ve unlocked an achievement in GSFK AR Connect game!',
        url: '',
    })
    .then( _ => console.log('Successful share'))
    .catch( error => console.log('Error sharing', error));
    
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
let mosquitoAudio=new Audio("audio/MosquitoBat.mp3");
let matchBoxAudio=new Audio("audio/Match Box.mp3");

marker1.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    successAudio.play();
    mosquitoAudio.play();

    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

    // if (currModel==1){
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }


})

marker1.addEventListener("markerLost",(e)=>{
    mosquitoAudio.pause()
});

marker2.addEventListener("markerFound", (e)=>{ 
    
    matchBoxAudio.play();

    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker2.addEventListener("markerLost",(e)=>{
    matchBoxAudio.pause();
})

marker4.addEventListener("markerLost",(e)=>{
    let vid=document.getElementById("pressure-cooker")
    vid.pause();
})

marker4.addEventListener("markerFound", (e)=>{ 

    successAudio.play();
    let vid=document.getElementById("pressure-cooker")
    vid.play();
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker5.addEventListener("markerFound", (e)=>{ 

    let vid=document.getElementById("flask")
    vid.play();
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker5.addEventListener("markerLost",(e)=>{
    let vid=document.getElementById("flask")
    vid.pause();
})

marker7.addEventListener("markerFound", (e)=>{ 

    let vid=document.getElementById("fan")
    vid.play();
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker7.addEventListener("markerLost",(e)=>{
    let vid=document.getElementById("fan")
    vid.pause();
})

// marker8.addEventListener("markerFound", (e)=>{ 

//     alert("adfsasdf")
//     let vid=document.getElementById("flushtank")
//     vid.play();
    
//     const jsonData={
//         "userId":localStorage.getItem("userId"),
//         "gameId":"DD",
//         "points":Math.ceil(100/minutes) 
//     }

//         successAudio.play();
//         toast.innerHTML="Wow, correct!"
//         toast.className = "show";
//         setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
//         shareMe();

//         const apiUrl = "https://gfsk-backend.onrender.com/add-points";

//         fetch(apiUrl,{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             mode: 'cors',
//             body: JSON.stringify(jsonData),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             //window.location.href = "index.html";
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     // }else{
//     //     popup.style.visibility="visible";
//     //     failureAudio.play();
//     //     capture()
//     // }

// })

// marker8.addEventListener("markerLost",(e)=>{
//     let vid=document.getElementById("flushtank")
//     vid.pause();
// })

marker9.addEventListener("markerFound", (e)=>{ 

    let vid=document.getElementById("flushtank")
    vid.play();
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker9.addEventListener("markerLost",(e)=>{
    let vid=document.getElementById("flushtank")
    vid.pause();
})

marker10.addEventListener("markerFound", (e)=>{ 
    successAudio.play();
    let vid=document.getElementById("tap")
    vid.play();
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        
        // toast.innerHTML="Wow, correct!"
        // toast.className = "show";
        // setTimeou    t(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        // shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker10.addEventListener("markerLost",(e)=>{
    let vid=document.getElementById("tap");
    vid.pause();
})

marker11.addEventListener("markerFound", (e)=>{ 

    let vid=document.getElementById("detergent")
    vid.play();

    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker11.addEventListener("markerLost",(e)=>{
    let vid=document.getElementById("detergent")
    vid.pause();
})

let panAudio=new Audio("audio/Non-Stick Pan.mp3")
marker16.addEventListener("markerFound", (e)=>{ 

    
    panAudio.play();

    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker16.addEventListener("markerLost",(e)=>{
    panAudio.pause()
})

let sprayAudio=new Audio("audio/Insect Spray.mp3")
marker18.addEventListener("markerFound", (e)=>{ 

    
    sprayAudio.play();

    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker18.addEventListener("markerLost",(e)=>{
    sprayAudio.pause()
})

marker23.addEventListener("markerFound", (e)=>{ 

    let vid=document.getElementById("lock")
    vid.play();
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker23.addEventListener("markerLost",(e)=>{
    let vid=document.getElementById("lock")
    vid.pause();
})

marker32.addEventListener("markerFound", (e)=>{ 

    let vid=document.getElementById("knife")
    vid.play();
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker32.addEventListener("markerLost",(e)=>{
    let vid=document.getElementById("knife")
    vid.pause();
})

marker34.addEventListener("markerFound", (e)=>{ 

    let vid=document.getElementById("flowering-plant")
    vid.play();
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

        successAudio.play();
        toast.innerHTML="Wow, correct!"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    
        shareMe();

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
    // }else{
    //     popup.style.visibility="visible";
    //     failureAudio.play();
    //     capture()
    // }

})

marker34.addEventListener("markerLost",(e) => {
    let vid=document.getElementById("flowering-plant")
    vid.pause();
});