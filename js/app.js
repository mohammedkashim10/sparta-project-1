document.addEventListener('DOMContentLoaded', () => {

  // Getting the board div
  const board = document.getElementById('board');
  // Getting the play button
  const play = document.getElementById('play');
  // Getting the instructions button
  const instructions = document.getElementById('instruct');
  // Getting the instructions modal
  const modal = document.getElementById('instructModal');
  // Getting the score modal
  const modal2 = document.getElementById('scoreModal');
  // Getting the <span> element that closes the modal (x button)
  const span = document.getElementsByClassName("close")[0];
  // Getting the <span> element that closes the scoremodal (x button)
  const span2 = document.getElementsByClassName("close2")[0];
   // Getting the game title
  const title = document.getElementById('title');

  // ========== Word text and color randomiser ==========
  const colorTextList = ['red', 'blue', 'green', 'pink', 'yellow', 'orange', 'grey', 'purple', 'black', 'cyan'];
  const colorFillList = ['red', 'blue', 'green', 'pink', 'yellow', 'orange', 'grey', 'purple', 'black', 'cyan'];

  let colorText = colorTextList[Math.floor(Math.random() * colorTextList.length)];
  let colorFill = colorFillList[Math.floor(Math.random() * colorFillList.length)];

  // ========== Task randomiser ==========
  let optionsList = ['text', 'color'];
  let option = optionsList[Math.floor(Math.random() * optionsList.length)];

  // ========== Array to hold score ==========
  const scoreArray = [];



  // Creating the function for the play button
  const playbtn = () => {
    const boardElementsArray = board.getElementsByClassName('board-elements');
    for (var i = 0; i < boardElementsArray.length; i++) {
      board.removeChild(boardElementsArray[i]);
    }
  }

  const timer = () => {
    const timerEl = document.getElementById('timer');
    timerEl.style.display = 'block';
    let currentTime = 20;
    var interval = setInterval(countdown,1000)
    function countdown(){
      timerEl.innerHTML = currentTime;
      currentTime--;
      if (currentTime === -1) {
        clearInterval(interval);
        end();
        const playAgain = document.createElement('button');
        playAgain.innerHTML = 'Play Again';
        document.body.appendChild(playAgain);
        playAgain.addEventListener('click', (event) => {
          window.location = window.location;
        })
      }
    }
  }

  // ========== END GAME MODAL ==========
  const end = () => {
    modal2.style.display = 'block';
    // When the user clicks on <span> (i.e. x button), close the modal
    span2.addEventListener('click', (event) => {
      modal2.style.display = "none";
    })
    const finalScore = document.getElementById('finalScore');
    finalScore.innerHTML = `You scored ${scoreArray.length}!`;
  }



  // Creating the function for the instructions button: displays instructions modal
  const instruct = () => {
    modal.style.display = 'block';
    // When the user clicks on <span> (i.e. x button), close the modal
    span.addEventListener('click', (event) => {
      modal.style.display = "none";
    })
    // Closing the modal when click anywhere outside of it
    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    })
  }

  const setElements = () => {
    const select = document.createElement('h1');
    select.setAttribute('class',`inGame`);
    select.innerHTML = `select ${option}`;
    board.appendChild(select);
    const color = document.createElement('h1');
    color.setAttribute('class',`inGame`);
    color.innerHTML = colorText;
    color.style.color = colorFill;
    if (colorText === colorFill){
      color.innerHTML = 'white';
    }
    board.appendChild(color);
    const text = document.createElement('button');
    text.setAttribute('class',`inGame`);
    text.innerHTML = color.innerHTML;
    board.appendChild(text);
    const fill = document.createElement('button');
    fill.setAttribute('class',`inGame`);
    fill.innerHTML = color.style.color;
    board.appendChild(fill);

    text.addEventListener('click', () => {
      // Pick random colors
      // ========== Word text and color randomiser ==========
      // const colorTextList = ['red', 'blue', 'green', 'pink', 'yellow', 'orange', 'grey', 'purple', 'black', 'cyan'];
      // const colorFillList = ['red', 'blue', 'green', 'pink', 'yellow', 'orange', 'grey', 'purple', 'black', 'cyan'];

      let colorText = colorTextList[Math.floor(Math.random() * colorTextList.length)];
      let colorFill = colorFillList[Math.floor(Math.random() * colorFillList.length)];

      // ========== Task randomiser ==========
      // let optionsList = ['text', 'color'];
      let option = optionsList[Math.floor(Math.random() * optionsList.length)];

      if (select.innerHTML == 'select text') {
        select.innerHTML = `select ${option}`;
        color.innerHTML = colorText;
        color.style.color = colorFill;
        if (colorText === colorFill){
          color.innerHTML = 'white';
        }
        text.innerHTML = color.innerHTML;
        fill.innerHTML = color.style.color;
        scoreArray.push('score');
        console.log('Correct');
      } else if (select.innerHTML == 'select color') {
        select.innerHTML = `select ${option}`;
        color.innerHTML = colorText;
        color.style.color = colorFill;
        if (colorText === colorFill){
          color.innerHTML = 'white';
        }
        text.innerHTML = color.innerHTML;
        fill.innerHTML = color.style.color;
        console.log('Incorrect');
      }
    })
    fill.addEventListener('click', () => {
      // ========== Word text and color randomiser ==========
      // const colorTextList = ['red', 'blue', 'green', 'pink', 'yellow', 'orange', 'grey', 'purple', 'black', 'cyan'];
      // const colorFillList = ['red', 'blue', 'green', 'pink', 'yellow', 'orange', 'grey', 'purple', 'black', 'cyan'];

      let colorText = colorTextList[Math.floor(Math.random() * colorTextList.length)];
      let colorFill = colorFillList[Math.floor(Math.random() * colorFillList.length)];

      // ========== Task randomiser ==========
      // let optionsList = ['text', 'color'];
      let option = optionsList[Math.floor(Math.random() * optionsList.length)];

      if (select.innerHTML == 'select color') {
        select.innerHTML = `select ${option}`;
        color.innerHTML = colorText;
        color.style.color = colorFill;
        if (colorText === colorFill){
          color.innerHTML = 'white';
        }
        text.innerHTML = color.innerHTML;
        fill.innerHTML = color.style.color;
        scoreArray.push('score');
        console.log('Correct');
      } else if (select.innerHTML == 'select text') {
        select.innerHTML = `select ${option}`;
        color.innerHTML = colorText;
        color.style.color = colorFill;
        if (colorText === colorFill){
          color.innerHTML = 'white';
        }
        text.innerHTML = color.innerHTML;
        fill.innerHTML = color.style.color;
        console.log('Incorrect');
      }
    })
  }

  // Adding a click event to the play button to run the playbtn function
  play.addEventListener('click', (event) => {
    timer();
    playbtn();
    setElements();
  })


  // Adding a click event to the instructions butto to run the instruct function
  instructions.addEventListener('click', (event) => {
    // Invoking the function for the instructions button
    instruct();
  })





});
