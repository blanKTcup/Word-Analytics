const textareaEL = document.querySelector('.textarea');
const wordsStatEl = document.querySelector('.stat__number--words');
const charactersStatEl = document.querySelector('.stat__number--characters');
const twitterStatEl = document.querySelector('.stat__number--twitter');
const facebookStatEl = document.querySelector('.stat__number--facebook');


textareaEL.addEventListener('input', () => {
  // words
  
  // characters
  const numberOfCharacters = textareaEL.value.length;
  charactersStatEl.textContent = numberOfCharacters;

  // twitter
  const twitterCharLeft = 280 - numberOfCharacters;
  twitterStatEl.textContent = twitterCharLeft;

  // facebook
  const facebookCharLeft = 2200 - numberOfCharacters;
  facebookStatEl.textContent = facebookCharLeft;

  // over limit styling
  if (twitterCharLeft < 0 && facebookCharLeft < 0) {
    twitterStatEl.classList.add('stat__number--limit');
    facebookStatEl.classList.add('stat__number--limit');
  }
});