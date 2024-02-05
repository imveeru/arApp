localStorage.setItem("hw_dis_clue",0)

let clues=["Which item poses an electrical hazard and should be avoided? ","What could cause a slip or fall?","Identify a harmful substance commonly found in households. ","Point out an object that may tip over and fall down easily.","Locate an item that can cause injury with a cutting edge.","What should you seek to hide under during an earthquake?","Identify the item crucial for tackling a small chemical fire. ","What would you feel are essentials for flood preparedness.","Identify an item used for both cooking and cleaning, causing a safe, volcano-like reaction.","What object experiences constant changes with exposure to air?","What object fizzles in water?","What object dissolves in water?","What would you use to make a swelling go down?","What all would you need when you injure yourself?","Which of these bins do you put paper in?","Which of these bins do you put plastic in?","Which of these bins do you put aluminum in?","Which of these bins do you put glass in?","Which of these bins do you put chemicals in?","Which of these bins do you put food waste in?","Which of these object are more energy-efficient?","How do you boost air quality indoors?","How do you clean without harming your health?"]

let models=["m41","m42","m43","m84","m45","m46","m85","m48","m50","m49","m51","m52","m53","m86","m55","m56","m57","m58","m59","m60","m61","m62","m87"]

let model_id=Math.floor(Math.random() * clues.length);
localStorage.removeItem("hw_modelId")
localStorage.setItem("hw_modelId",model_id);

let c=document.getElementById("clueText")
c.innerHTML=clues[model_id]

function changeClue(){
    localStorage.removeItem("hw_dis_clue")
    localStorage.setItem("hw_dis_clue",1);
    window.location.href="ar_hw_dis.html"
}