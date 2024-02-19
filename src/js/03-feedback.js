// Import lodash.throttle
var throttle = require('lodash.throttle');

// Get form elements
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

// Function to update localStorage with form values
const updateLocalStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  // Save form state to local storage
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

// Function to fill form fields from localStorage
const fillFormFromLocalStorage = () => {
  const storedState = localStorage.getItem('feedback-form-state');

  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email || '';
    messageTextarea.value = formState.message || '';
  }
};

// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();

  // Clear localStorage
  localStorage.removeItem('feedback-form-state');

  // Display form fields and their current values in console
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log('Form fields and their values:', formState);

  // Clear form fields
  emailInput.value = '';
  messageTextarea.value = '';
};

// Event listeners
feedbackForm.addEventListener('input', updateLocalStorage);
feedbackForm.addEventListener('submit', handleSubmit);

// Load form state from localStorage on page load
fillFormFromLocalStorage();

