let marker1=document.getElementById('animated-marker')
let marker2=document.getElementById('animated-marker2')
let marker3=document.getElementById('animated-marker3')
let toast = document.getElementById("snackbar");

let test=document.getElementById("animated-marker3")
console.log(test.children[0].attr)

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

marker1.addEventListener("markerFound", (e)=>{ 
    stopStopwatch();
    successAudio.play();
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

    if (currModel==9){
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
    }else{
        popup.style.visibility="visible";
        failureAudio.play();
        capture()
    }


})

marker3.addEventListener("markerFound", (e)=>{ 
    
    const jsonData={
        "userId":localStorage.getItem("userId"),
        "gameId":"DD",
        "points":Math.ceil(100/minutes) 
    }

    if (currModel==6){
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
    }else{
        popup.style.visibility="visible";
        failureAudio.play();
        capture()
    }

})


