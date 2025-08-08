const params = new URLSearchParams(window.location.search);
const rating = params.get('rating');

console.log('Message:', rating);

const ratingOutputElement = document.querySelector('.message-card__number');

ratingOutputElement.textContent = rating;
