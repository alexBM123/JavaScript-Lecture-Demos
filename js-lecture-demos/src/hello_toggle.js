document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1');
  const button = document.querySelector('#toggle');

  button.onclick = () => {
    if (heading.innerHTML === 'Hello') {
      heading.innerHTML = 'Goodbye';
    } else {
      heading.innerHTML = 'Hello';
    }
  };
});
