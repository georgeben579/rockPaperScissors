// the code below shows when json.parse() becoes a null value when we reset the score, 
    // it is given a defualt value using the || operator
    let score =JSON.parse(localStorage.getItem('score')) || {
      wins:0,
      losses:0,
      ties:0
    };;
    function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`wins: ${score.wins} , losses: ${score.losses} , ties: ${score.ties} ` ;
    }
    function resetScoreElement(){
      score.wins=0;
      score.losses=0;
      score.ties=0;
      updateScoreElement();
    }
    updateScoreElement();



 


  function playGame(playerMove){
    const computerMove= pickComputerMove();
    let result = '';
    
    if (playerMove === 'rock'){
      if (computerMove === 'rock'){
        result = 'TIE!';
      } else if (computerMove == 'paper'){
        result= 'U LOSE!';
      } else {
        result = 'U WIN!';
      }
    } else if (playerMove === 'paper'){
      if (computerMove === 'rock'){
        result = 'U WIN!';
      } else if (computerMove == 'paper'){
        result= 'TIE!';
      } else {
        result = 'U LOSE!';
      }
    } else {
      if (computerMove === 'rock'){
        result = 'U LOSE!';
      } else if (computerMove == 'paper'){
        result= 'U WIN!';
      } else {
        result = 'TIE!';
      }
    }

    if (result === 'U WIN!'){
      score.wins++;
    }else if (result === 'U LOSE!'){
      score.losses++;
    } else {
      score.ties++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML=`${result}`;
    document.querySelector('.js-compareMove').innerHTML=`You-<img src="images/${playerMove}.png" >  Computer-<img src="images/${computerMove}.png" >.`;



//       alert(`you picked ${playerMove} and i picked ${computerMove}. ${result} 
// wins: ${score.wins} , losses: ${score.losses} , ties: ${score.ties} `);
  }
  


  function pickComputerMove(){
    let randomNumber=Math.random();
    console.log(randomNumber);
    if (randomNumber<1/3 && randomNumber>0)
    {
      computerMove = 'rock';
    } else if (randomNumber<2/3 && randomNumber>1/3)
    {
      computerMove = 'paper';
    } else 
    {
      computerMove = 'scissors';
    }

    return(computerMove);
  }