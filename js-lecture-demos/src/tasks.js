document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector('#submit');
  const taskInput = document.querySelector('#task');
  const tasksList = document.querySelector('#tasks');
  const form = document.querySelector('form');

  // Disable submit by default
  submit.disabled = true;

  // Enable/disable submit based on whether input has content
  taskInput.onkeyup = () => {
    submit.disabled = taskInput.value.length === 0;
  };

  form.onsubmit = () => {
    const task = taskInput.value;

    const li = document.createElement('li');
    li.innerHTML = task;
    tasksList.append(li);

    // Clear input and disable submit again
    taskInput.value = '';
    submit.disabled = true;

    // Prevent actual form submission
    return false;
  };
});
