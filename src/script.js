const textareaEL = document.querySelector('.textarea');
const wordsStatEl = document.querySelector('.stat__number--words');
const charactersStatEl = document.querySelector('.stat__number--characters');
const twitterStatEl = document.querySelector('.stat__number--twitter');
const facebookStatEl = document.querySelector('.stat__number--facebook');


textareaEL.addEventListener('input', () => {
  // words
  let numberOfWords = textareaEL.value.split(' ').length;
  if (textareaEL.value.length === 0 ) {
    numberOfWords = 0;
  }
  wordsStatEl.textContent = numberOfWords;
  
  // characters
  const numberOfCharacters = textareaEL.value.length;
  charactersStatEl.textContent = numberOfCharacters;

  // twitter
  const twitterCharLeft = twitterStatEl.innerHTML - numberOfCharacters;
  twitterStatEl.textContent = twitterCharLeft;

  // facebook
  const facebookCharLeft = facebookStatEl.innerHTML - numberOfCharacters;
  facebookStatEl.textContent = facebookCharLeft;

  // over limit styling
  if (twitterCharLeft < 0) {
    twitterStatEl.classList.add('stat__number--limit');
  } else {
    twitterStatEl.classList.remove('stat__number--limit');
  }

  if (facebookCharLeft < 0) {
    facebookStatEl.classList.add('stat__number--limit');
  } else {
    facebookStatEl.classList.remove('stat__number--limit');
  }
});