let clueTitle=document.getElementById("clueTitle")
let clueText=document.getElementById("clueText")
let nextBtn=document.getElementById("nextBtn")

let models=[1,3,6,8,9,19,10,11,13,16,18]
let model_id=Math.floor(Math.random() * models.length);
localStorage.removeItem("modelId")

let clues;

const cKeys=["c1","c2","c3","c4"]
let cIndex=0;

let apiUrl = `https://gfsk-backend.onrender.com/clue/DD/${model_id}`;

fetch(apiUrl,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors',
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    console.log(data);
    localStorage.setItem("gameId",data["gameId"])
    localStorage.setItem("modelId",data["modelId"])
    clues=data["clue"][0];

    clueText.innerHTML=clues[cKeys[cIndex]]

    //window.location.href = "index.html";
})
.catch(error => {
    console.error('Error:', error);
});

function changeClue(){
    if(cIndex<3){
        cIndex++;
    }
    clueTitle.innerHTML="Clue #"+(cIndex+1);
    clueText.innerHTML=clues[cKeys[cIndex]]
    if(cIndex==3){
        nextBtn.innerHTML="Start Game"
    }
    console.log(cIndex);
}