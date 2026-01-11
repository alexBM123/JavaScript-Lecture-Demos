document.addEventListener('DOMContentLoaded', () => {
  // Initialize counter in localStorage if it does not exist
  if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
  }

  const heading = document.querySelector('h1');
  const button = document.querySelector('#count');

  // Display stored counter on page load
  heading.innerHTML = localStorage.getItem('counter');

  button.onclick = () => {
    let counter = parseInt(localStorage.getItem('counter'), 10);
    counter++;

    // Update DOM
    heading.innerHTML = counter;

    // Persist to localStorage
    localStorage.setItem('counter', counter);

    // Alert on multiples of 10
    if (counter % 10 === 0) {
      alert(`The count is now ${counter}`);
    }
  };
});
