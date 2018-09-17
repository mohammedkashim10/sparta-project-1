document.addEventListener('DOMContentLoaded', () => {

  // Getting the instructions button
  const instructions = document.getElementById('instruct');
  // Getting the instructions modal
  const modal = document.getElementById('instructModal');
  // Getting the <span> element that closes the modal (x button)
  const span = document.getElementsByClassName("close")[0];

  // Adding a click event to the instructions button to display the instructions modal
  instructions.addEventListener('click', (event) => {
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
  })





});
