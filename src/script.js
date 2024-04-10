const textareaEL = document.querySelector('.textarea');
const charactersStatEl = document.querySelector('.stat__number--characters');

textareaEL.addEventListener('input', () => {
  // words
  
  // characters
  const numberOfCharacters = textareaEL.value.length;
  charactersStatEl.innerText = (numberOfCharacters);

  // twitter
  
  charactersStatEl.innerText = (numberOfCharacters);

  // facebook

});