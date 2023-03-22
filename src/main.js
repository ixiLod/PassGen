const btnGenerate = document.querySelector('.generate');
const btnCopy = document.querySelector('.copy');
const input = document.querySelector('input');
const range = document.querySelector('.range');
const visuNumber = document.querySelector('.visualisation-range');
const excludeSymbols = document.querySelector('.symbolCase');

let characs =
  '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%-_=+[}{]:.,?/"`˜±§';
let passwordLength = 12;

// Exclude symbols
excludeSymbols.addEventListener('change', (e) => {
  if (e.target.checked) {
    characs = characs.slice(0, 62);
  } else {
    characs =
      '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%-_=+[}{]:.,?/"`˜±§';
  }
});

// Range
visuNumber.innerHTML = passwordLength;
range.addEventListener('change', (e) => {
  visuNumber.innerText = range.value;
  passwordLength = range.value;
});

// Function generate password
const generatePassword = () => {
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characs.length);
    password += characs.substring(randomNumber, randomNumber + 1);
  }
  document.querySelector('input').value = password;
};

// Btn generate
btnGenerate.addEventListener('click', () => {
  input.classList.remove('active');
  generatePassword();
});

// Btn copy
btnCopy.addEventListener('click', () => {
  input.classList.add('active');
  navigator.clipboard.writeText(input.value);
});
