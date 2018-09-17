document.addEventListener('DOMContentLoaded', () => {

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

  // Creating the function for the play button
  const playbtn = () => {
    const title = document.getElementById('title'); // Getting the game title
    title.style.display = 'none'; // Hides the title
    play.style.display = 'none'; // Hides the play button
    instructions.style.display = 'none'; // Hides the instructions button

    // const time = document.createElement('h4');
    // time.innerHTML = 'timer goes here'; // ========== TIMER HERE ==========
    // document.body.appendChild(time);
    function timer() {
      // const timeout = setTimeout(function(){document.body.style.display = 'none';}, 5000);
      const timerEl = document.getElementById('timer');
      timerEl.style.display = 'block';
      let currentTime = 5;
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
            select.style.display = 'none';
            color.style.display = 'none';
            text.style.display = 'none';
            fill.style.display = 'none';
            playAgain.style.display = 'none';
            playbtn();
          })
        }
      }
      // const time = document.createElement('p');
      // document.body.appendChild(timerEl);
    }
    timer();
    const select = document.createElement('h1'); // <h1 id="select"></h1>
    select.innerHTML = 'select -text/color-';
    document.body.appendChild(select);
    const color = document.createElement('h1'); // <h1 id="color"></h1>
    color.innerHTML = 'colored word appears here';
    document.body.appendChild(color);
    const text = document.createElement('button'); // <button id="text"></button>
    text.innerHTML = 'corresponds to text of colored word';
    document.body.appendChild(text);
    const fill = document.createElement('button'); // <button id="fill"></button>
    fill.innerHTML = 'corresponds to color of colored word';
    document.body.appendChild(fill);

  }


  // ========== END GAME MODAL ==========
  const end = () => {
    modal2.style.display = 'block';
    // When the user clicks on <span> (i.e. x button), close the modal
    span2.addEventListener('click', (event) => {
      modal2.style.display = "none";
    })
    // Closing the modal when click anywhere outside of it
    window.addEventListener('click', (event) => {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    })
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

  // Adding a click event to the play button to run the playbtn function
  play.addEventListener('click', (event) => {
    playbtn();
  })


  // Adding a click event to the instructions butto to run the instruct function
  instructions.addEventListener('click', (event) => {
    // Invoking the function for the instructions button
    instruct();
  })





});
