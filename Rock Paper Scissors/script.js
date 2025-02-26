let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");

const userScoreId=document.getElementById("user-score");
const compScoreId=document.getElementById("comp-score");

const finalWinner = (userScore,compScore) => {
    userScoreId.innerText=0;
    compScoreId.innerText=0;
    if(userScore==compScore){
        msg.innerText="No Winner";
        msg.style.backgroundColor="black";
    }else if(userScore>compScore){
        msg.innerText="You Won the Game!! :)";
        msg.style.backgroundColor="green";
    }else{
        msg.innerText="Computer Won the Game!! :(";
        msg.style.backgroundColor="red";
    }
}

const showMessage= (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreId.innerText=userScore;
        msg.innerText=`You Won. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreId.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    let compChoice= getCompChoice();
    if(userChoice===compChoice){
        msg.innerText="Its a Draw. Play again!!"
        msg.style.backgroundColor="black";
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=(compChoice==="paper")?false:true;
        }else if(userChoice==="paper"){
            userWin=(compChoice==="rock")?true:false;
        }else{
            userWin=(compChoice==="rock")?false:true;
        }
        showMessage(userWin,userChoice,compChoice);
    }
}

const getCompChoice= () =>{
    let options=["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)];
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

let endGame=document.getElementById("endgame");
console.log(endgame);
endGame.addEventListener("click", ()=>{
    finalWinner(userScore,compScore);
});