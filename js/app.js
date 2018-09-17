document.addEventListener('DOMContentLoaded', () => {

  // Getting the play button
  const play = document.getElementById('play');
  // Getting the instructions button
  const instructions = document.getElementById('instruct');
  // Getting the instructions modal
  const modal = document.getElementById('instructModal');
  // Getting the <span> element that closes the modal (x button)
  const span = document.getElementsByClassName("close")[0];

  // Creating the function for the play button
  const playbtn = () => {
    const title = document.getElementById('title'); // Getting the game title
    title.style.display = 'none'; // Hides the title
    play.style.display = 'none'; // Hides the play button
    instructions.style.display = 'none'; // Hides the instructions button

    const time = document.createElement('h4');
    time.innerHTML = 'timer goes here';
    document.body.appendChild(time);

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
