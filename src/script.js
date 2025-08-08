const form = document.querySelector('.card__form');

function handleSubmit(e) {
  e.preventDefault();

  const rating = document.querySelector('.card__radio:checked');

  if (!rating) {
    alert('Please select a rating before submitting the survey.');
    return;
  }

  const value = encodeURIComponent(rating.value);

  window.location.href = `message.html?rating=${value}`;
}

form.addEventListener('submit', handleSubmit);
