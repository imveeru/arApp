localStorage.setItem("hw_dis_clue",0)

let clues=["What type of glue is commonly used to stick paper together permanently?","What type of tape is recommended for repairing electrical items due to its insulating properties?","What adhesive is commonly used to securely bond two surfaces, providing strong and lasting adhesion?","Choose an object that exhibits the seemingly magical property of sticking to metal surfaces","What type of glue is versatile enough to bond both metal and plastic materials?","What type of glue is recommended for joining pieces of wood together?","What type of tape has adhesive on both sides, making it useful for various applications?","Identify a material that can be shaped and molded to fill gaps or spaces.","What object is known for its unique fastening mechanism, consisting of two components - one with tiny hooks and the other with loops, creating a strong yet detachable bond?"]
// ,"What strong and versatile adhesive is often used for quick fixes, repairs, and even creative DIY projects?"

let models=["m74","m78","m76","m77","m88","m89","m80","m81","m90"]
// ,"m87"

let model_id=Math.floor(Math.random() * clues.length);
localStorage.removeItem("hw_modelId")
localStorage.setItem("hw_modelId",model_id);

let c=document.getElementById("clueText")
c.innerHTML=clues[model_id]

function changeClue(){
    localStorage.removeItem("hw_glu_clue")
    localStorage.setItem("hw_glu_clue",1);
    window.location.href="ar_hw_glu.html"
}