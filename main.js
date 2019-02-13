     function view() {
            document.getElementById('a').setAttribute('style', 'display:block');//this is to display the three buttons
            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
                }                                                                       //once start is clicked
        
      function computerPlay() {
               var myArray = [
                            "rock",                //this function helps the computer to display any randomly
                            "paper",               // rock,paper or scissors
                            "scissors"
                        ];
                        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
                     //   document.body.innerHTML = randomItem;
                        return randomItem;
                            }
                                                                  
      function playerPlay(){
                const playerchoice = "paper";
                if (playerchoice.toLocaleLowerCase() ==="paper"){   //make any string enter to be case insensitive
                    return "paper";
                }else {
                    alert("invalide selection,enter paper or rock or scissors")
                }  
            }  
     function player2Play(){
            const playerchoice = "rock";
            if (playerchoice.toLocaleLowerCase() ==="rock"){   //make any string enter to be case insensitive
                return "rock";
            }else {
                alert("invalide selection,click on paper or rock or scissors")
            }  
        } 

     function player3Play(){
            const playerchoice = "scissors";
            if (playerchoice.toLocaleLowerCase() ==="scissors"){   //make any string enter to be case insensitive
                return "scissors";
            }else {
                alert("invalide selection,click on paper or rock or scissors")
            }  
         } 
            
     function playRound(playerSelection, computerSelection){
            if((playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="scissors" && computerSelection==="paper") || (playerSelection==="rock" && computerSelection==="scissors")) {
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
               document.getElementById("container").innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
            }else if(playerSelection==computerSelection) {  
                console.log('Draw game');
                document.getElementById("container").innerHTML = "Draw game";
            }else {  
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                document.getElementById("container").innerHTML =  `You lose! ${computerSelection} beats ${playerSelection}`
            }
            } 

     function game(){
                const finalplay = playRound(playerPlay(), computerPlay());
                
            }
     function game2(){
                const finalplay = playRound(player2Play(), computerPlay());
            }  
     function game3(){
                const finalplay = playRound(player3Play(), computerPlay());
            } 

     function reloadPage() {
                location.reload();
              }