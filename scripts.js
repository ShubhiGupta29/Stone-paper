//javascript code for the logic part of stone-paper-scissors

// user ans computer score tracking variable
let userscore=0;
let computerscore=0;

// access the html nodes/elements
const choices=document.querySelectorAll(".choice")
let scoreusers=document.querySelector("#user-score")
let scorecomp=document.querySelector("#computer-score")
const message=document.querySelector("#msg")

//Generate random choice from computer
const generateComputerChoice=()=>{
    //choice available 
    const compchoice=["rock","scissors","paper"];
    const ind=Math.floor(Math.random()*3);
    return compchoice[ind];
    //returns computer choice
};

//In case of draw
const gameDraw=()=>{
    console.log("drawn game");
    message.innerText="Draw";
    message.style.backgroundColor="#031a34";
   
};
// Updating score 
const updatescore=()=>{
    scoreusers.innerText=userscore;
    scorecomp.innerText=computerscore;
};

//incrementing the score and display who wins
const showWinner=(userwin,computerchoice,userchoice)=>{
    if(userwin){
       userscore++;
       message.innerText=`User choice ${userchoice } beats computer choice ${computerchoice}`;
        message.style.backgroundColor="green";
    }
    else{
        computerscore++;
        message.innerText=`computer choice ${computerchoice} beats users choice ${userchoice}`;
        message.style.backgroundColor="red";
    }
    updatescore();
}


// the game logic 
const playthegame=(userchoice)=>{
   console.log("user choice is",userchoice);

   const computerchoice=generateComputerChoice();
   console.log("computer choice is",computerchoice);

   if(userchoice===computerchoice){
    gameDraw();
   } 
   else{
    let userwin=true;
    if(userchoice==="rock"){
     userwin=computerchoice==="paper"?false:true;
    } else if(userchoice==="paper"){
        userwin=computerchoice==="rock"?true:false;
    }
    else{
        userwin=computerchoice==="paper"?true:false;
    }
    showWinner(userwin,computerchoice,userchoice);
   } 
};

//tracking events on html element/choices
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playthegame(userchoice);
    })
});