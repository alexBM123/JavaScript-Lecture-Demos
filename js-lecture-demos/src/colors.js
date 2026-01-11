document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('#hello');

  // Buttons version: attach handlers to all buttons with data-color
  document.querySelectorAll('button').forEach((button) => {
    button.onclick = () => {
      heading.style.color = button.dataset.color;
    };
  });

  // Dropdown version: attach handler if a select exists on this page
  const selector = document.querySelector('#color-selector');
  if (selector) {
    selector.onchange = function () {
      heading.style.color = this.value;
    };
  }
});
