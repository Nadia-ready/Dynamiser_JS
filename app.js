let globalFirstPlayer = 0;
let globalSecondPlayer = 0;
let roundFirstPlayer = 0;
let roundSecondPlayer = 0;
let activePlayer = 1;


//Changement de joueur

let nextRound = () => {
    if (activePlayer==1) {
      firstPlayer.style.opacity = "1";
      secondPlayer.style.opacity = "0";
    } else {
      firstPlayer.style.opacity = "0";
      secondPlayer.style.opacity = "1";
  }
  }


//Initialise à 0
let newGame = document.querySelector('#newGame');
newGame.addEventListener('click',() => {
    document.querySelector('#globalFirstPlayer').textContent = globalFirstPlayer
    document.querySelector('#globalSecondPlayer').textContent = globalSecondPlayer
    document.querySelector('#roundFirstPlayer').textContent = roundFirstPlayer
    document.querySelector('#roundSecondPlayer').textContent = roundSecondPlayer
    
}) 



//Lancer les dés - score du round - passe au joueur 2 si joueur 1 = 1
let btnRollDice = document.querySelector('#roll');
btnRollDice.addEventListener('click',() => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let dice = document.querySelector('#dice');
    dice.style.display = 'block';  
    dice.src = '/images/dice-' + randomNumber + '.png';  
    
    
    if ((activePlayer==1)&&(randomNumber > 1)) {
        roundFirstPlayer=roundFirstPlayer+randomNumber;
        document.querySelector('#roundFirstPlayer').textContent = roundFirstPlayer;
        firstPlayer.style.opacity = "1";
        secondPlayer.style.opacity = "0";

    } else if((activePlayer==1)&&(randomNumber==1)){
        roundFirstPlayer = 0;
        activePlayer = activePlayer+1;
        document.querySelector('#roundFirstPlayer').textContent = roundFirstPlayer;
        firstPlayer.style.opacity = "0";
        secondPlayer.style.opacity = "1"
        alert('Dommage! Vous avez fait 1. Au joueur suivant')

      } else if((activePlayer==2)&&(randomNumber==1)){
        roundSecondPlayer = 0;
        activePlayer = 1;
        document.querySelector('#roundSecondPlayer').textContent = roundSecondPlayer;
        firstPlayer.style.opacity = "1";
        secondPlayer.style.opacity = "0"
        alert('Dommage! Vous avez fait 1. Au joueur suivant')

    } else if((activePlayer==2)&&(randomNumber>1)) {
        roundSecondPlayer=roundSecondPlayer+randomNumber;
        document.querySelector('#roundSecondPlayer').textContent = roundSecondPlayer;
        firstPlayer.style.opacity = "0";
        secondPlayer.style.opacity = "1";

    } else {
        roundSecondPlayer = 0;
        activePlayer = 0;
        document.querySelector("#roundSecondPlayer").textContent = roundSecondPlayer;
        firstPlayer.style.opacity = "1";
        secondPlayer.style.opacity = "0";
    }
})


//Ajoute le score du round au global et passe au joueurs suivant

let btnHold = document.querySelector('#hold');
btnHold.addEventListener('click',() => {
   if ((activePlayer==1)&&(globalFirstPlayer+roundFirstPlayer<100)){ 
    globalFirstPlayer=roundFirstPlayer + globalFirstPlayer;
    roundFirstPlayer=0;
    document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer;
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
    firstPlayer.style.opacity = "1";
    secondPlayer.style.opacity = "0";
    activePlayer= 2
    nextRound();
    
  } else if ((activePlayer==1)&&(globalFirstPlayer+roundFirstPlayer>=100)){
    activePlayer=1
    alert('Victoire du joueur 1!');
    newGame();

   } else if ((activePlayer==2)&&(globalSecondPlayer+roundSecondPlayer < 100)){
    globalSecondPlayer=roundSecondPlayer + globalSecondPlayer;
    roundSecondPlayer=0;
    document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
    document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
    activePlayer=1;
    nextRound();

  } else if ((activePlayer==2)&&(globalSecondPlayer+roundSecondPlayer>= 100)) {
    activePlayer=2
    alert('Victoire du joueur 2!');
    newGame();

  }
})

