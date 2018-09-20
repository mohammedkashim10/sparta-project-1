document.addEventListener('DOMContentLoaded', () => {
  // Background sound playing constantly
  backgroundSound = new Audio('sounds/background.wav');
  backgroundSound.addEventListener('ended', function() {
    backgroundSound.currentTime = 0;
    backgroundSound.play();
  }, false);
  backgroundSound.play();

  var x = document.getElementById('correctSound');
  function playCorrect() {
    x.play();
  }

  var y = document.getElementById('incorrectSound');
  function playIncorrect() {
    y.play();
  }

  var z = document.getElementById('complete');
  function playComplete() {
    z.play();
  }

  // Getting the different elements from html
  const board = document.getElementById('board');
  const play = document.getElementById('play');
  const instructions = document.getElementById('instruct');
  const modal = document.getElementById('instructModal');
  const modal2 = document.getElementById('scoreModal');
  const span = document.getElementsByClassName("close")[0];
  const span2 = document.getElementsByClassName("close2")[0];
  const title = document.getElementById('title');

  // ========== Word text and colour randomiser ==========
  const colorTextList = ['red', 'blue', 'green', 'magenta', 'yellow', 'orange', 'grey', 'purple', 'black', 'cyan'];
  const colorFillList = ['red', 'blue', 'green', 'magenta', 'yellow', 'orange', 'grey', 'purple', 'black', 'cyan'];

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
      board.removeChild(boardElementsArray[i]); // Gets rid of the elements
    }
    play.style.display = 'none'; // For reasons unknown, removeChild function did not remove the play button so this hides it
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

  // ========== END GAME MODAL ==========
  const end = () => {
    modal2.style.display = 'block';
    // When the user clicks on <span> (i.e. x button), close the modal
    span2.addEventListener('click', (event) => {
      modal2.style.display = "none";
    })
    const finalScore = document.getElementById('finalScore');
    finalScore.innerHTML = `You scored ${scoreArray.length}!`;
    playComplete();
  }

  // Creating the function for the timer
  const timer = () => {
    const timerEl = document.getElementById('timer');
    timerEl.innerHTML = 'Time remaining: 20s'; // Setting an innerHTML at 20 and starting the countdown from 19 so there is no delay of waiting for the element to appear when the function is called
    timerEl.style.display = 'block';
    let currentTime = 19;
    var interval = setInterval(countdown,1000)
    function countdown(){
      timerEl.innerHTML = `Time remaining: ${currentTime}s`;
      currentTime--;
      if (currentTime === -1) {
        clearInterval(interval);
        end();
        const homebtn = document.createElement('button');
        homebtn.innerHTML = 'Home';
        homebtn.setAttribute('id', 'homebtn');
        document.body.appendChild(homebtn);
        homebtn.addEventListener('click', (event) => {
          window.location = window.location;
        })
      }
    }
  }

  // Creating the elements to play the game
  const setElements = () => {
    const select = document.createElement('h1');
    select.setAttribute('class','inGame');
    select.setAttribute('id','task');
    select.innerHTML = `Select ${option}`;
    board.appendChild(select);
    const color = document.createElement('h1');
    color.setAttribute('class','inGame');
    color.setAttribute('id','coloring');
    color.innerHTML = colorText;
    color.style.color = colorFill;
    if (colorText === colorFill) {
      color.innerHTML = 'white';
    } // The if statement prevents the text and colour being the same by making the text 'white' (the colour white is not in the array of colours)
    board.appendChild(color);
    const text = document.createElement('button');
    text.setAttribute('class','inGame');
    text.setAttribute('id','textbtn');
    text.innerHTML = color.innerHTML;
    board.appendChild(text);
    const fill = document.createElement('button');
    fill.setAttribute('class','inGame');
    fill.setAttribute('id','colorbtn');
    fill.innerHTML = color.style.color;
    board.appendChild(fill);
    const liveScore = document.getElementById('liveScore');
    liveScore.innerHTML = `Score: ${scoreArray.length}`;
    liveScore.style.display = 'block';

    // Click event for when the button corresponding to the word's text is clicked
    text.addEventListener('click', () => {
      let colorText = colorTextList[Math.floor(Math.random() * colorTextList.length)];
      let colorFill = colorFillList[Math.floor(Math.random() * colorFillList.length)];
      let option = optionsList[Math.floor(Math.random() * optionsList.length)];

      if (select.innerHTML == 'Select text') {
        select.innerHTML = `Select ${option}`; // Creates a new task for the next round (i.e. select text or select color)
        color.innerHTML = colorText; // Creates a new word
        color.style.color = colorFill; // Creates a new colour
        if (colorText === colorFill) {
          color.innerHTML = 'white';
        } // The if statement prevents the text and colour being the same by making the text 'white' (the colour white is not in the array of colours)
        text.innerHTML = color.innerHTML;
        fill.innerHTML = color.style.color;
        scoreArray.push('score'); // Puts a component in the array
        liveScore.innerHTML = `Score: ${scoreArray.length}`; // Score appears as the length of the array i.e. number of components (which increases with every correct answer)
        playCorrect(); // 'Correct answer' sound
      } else if (select.innerHTML == 'Select color') {
        select.innerHTML = `Select ${option}`; // Creates a new task for the next round (i.e. select text or select color)
        color.innerHTML = colorText; // Creates a new word
        color.style.color = colorFill; // Creates a new colour
        if (colorText === colorFill) {
          color.innerHTML = 'white';
        } // The if statement prevents the text and colour being the same by making the text 'white' (the colour white is not in the array of colours)
        text.innerHTML = color.innerHTML;
        fill.innerHTML = color.style.color;
        playIncorrect(); // 'Incorrect answer' sound
      }
    })
    // Click event for when the button corresponding to the word's colour is clicked
    fill.addEventListener('click', () => {
      let colorText = colorTextList[Math.floor(Math.random() * colorTextList.length)];
      let colorFill = colorFillList[Math.floor(Math.random() * colorFillList.length)];
      let option = optionsList[Math.floor(Math.random() * optionsList.length)];

      if (select.innerHTML == 'Select color') {
        select.innerHTML = `Select ${option}`;
        color.innerHTML = colorText;
        color.style.color = colorFill;
        if (colorText === colorFill) {
          color.innerHTML = 'white';
        }
        text.innerHTML = color.innerHTML;
        fill.innerHTML = color.style.color;
        scoreArray.push('score');
        liveScore.innerHTML = `Score: ${scoreArray.length}`;
        playCorrect();
      } else if (select.innerHTML == 'Select text') {
        select.innerHTML = `Select ${option}`;
        color.innerHTML = colorText;
        color.style.color = colorFill;
        if (colorText === colorFill) {
          color.innerHTML = 'white';
        }
        text.innerHTML = color.innerHTML;
        fill.innerHTML = color.style.color;
        playIncorrect();
      }
    })
  }

  // Adding a click event to the play button i.e. starts the game
  play.addEventListener('click', (event) => {
    timer();
    playbtn();
    setElements();
  })

  // Adding a click event to the instructions button to run the instruct function
  instructions.addEventListener('click', (event) => {
    instruct();
  })
});
