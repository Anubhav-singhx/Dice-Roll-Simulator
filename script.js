const buttonEL=document.getElementById('rollDice');
const diceFaceEl=document.getElementById('diceFace');
let historyList = [];
const rollHistoryEl = document.getElementById('rollHistory')
buttonEL.addEventListener("click",()=>{
    diceFaceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceFaceEl.classList.remove("roll-animation");  
    }, 1000);
    a=rollDice();
    b=diceFace(a);
    diceFaceEl.innerHTML=b;
    historyList.push(a);
    updateRollHistory();
})

function updateRollHistory(){
    rollHistoryEl.innerHTML="";
    for(i=0;i<historyList.length;i++){
        const listItem=document.createElement("li")
        listItem.innerHTML=`Roll ${i+1} : <span>${diceFace(historyList[i])}</span>`;
      
            rollHistoryEl.appendChild(listItem)

 
    }
}
function diceFace(a){
    switch(a){
        case 1:
            return "&#9856";
        case 2:
            return "&#9857";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
    }
}

function rollDice(){
    const a=Math.floor(Math.random()*6)+1;
    return(a);
}