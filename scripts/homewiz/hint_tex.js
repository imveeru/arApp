let clues=["Identify an object in the room that is known for efficiently conducting heat, making it suitable for tasks like cooking. What is this item","Pick an object that resists the flow of heat and is commonly used to handle hot items without transmitting the heat. What item fits this description?","Pick an object that feels even and lacks roughness, making it suitable for applications where a sleek surface is desired. What is this item? ","Pick an object that feels even and lacks roughness, making it suitable for applications where a sleek surface is desired. What is this item? ","Identify an item that, when rubbed against another surface, creates resistance or traction. This object is commonly used in various applications to generate friction. What is it?","Select an item that allows the flow of electricity through it. This material is commonly used in electronic circuits. What is this object?","Recognize an object in the room that is delicate and easily broken. This item requires careful handling to prevent damage. What is it? ","Choose an item known for its sturdiness and ability to withstand wear and tear. This material is often used for long-lasting products. What is this item?","Identify an object that enhances the volume or intensity of sound. This item is commonly used to make audio louder. What is it?","Select an item that reduces or absorbs vibrations or impacts. This object is often used to minimize the effects of shock. What is this item?"]

let models=["m64","m65","m66","m67","m68","m69","m70","m71","m72","m73"]

let model_id=Math.floor(Math.random() * clues.length);
localStorage.removeItem("hw_modelId")
localStorage.setItem("hw_modelId",model_id);

let c=document.getElementById("clueText")
c.innerHTML=clues[model_id]