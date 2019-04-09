import './style.css';

const quotes = [
  {quote: "Jeszcze będzie pięknie mimo wszystko, tylko załóż wygodne buty, bo masz do przejścia całe życie", author: "Jan Paweł II"},
  {quote: "Be yourself; everyone else is already taken ", author: "Oscar Wilde"},
  {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", author: "Albert Einstein"},
  {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind", author: "Bernard M. Baruch"},
  {quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth", author: "William W. Purkey"},
  {quote: "You only live once, but if you do it right, once is enough", author: "Mae West"},
  {quote: "Be the change that you wish to see in the world", author: "Mahatma Gandhi"},
  {quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost"},
  {quote: "No one can make you feel inferior without your consent", author: "Eleanor Roosevelt"},
  {quote: "Always forgive your enemies; nothing annoys them so much", author: "Oscar Wilde"},
];

const text = document.querySelector('#text');
const author = document.querySelector('#author');

const quoteBox = document.querySelector('#quote-box');
const body = document.querySelector('body');
const newQuoteButton = document.querySelector('#new-quote');



(function onLoad(){
  changeQuote();
  initButtons();
})()

function changeQuote() {
  const randomId = Math.floor(Math.random() * quotes.length);
  let quoteItem =  quotes[randomId];
  text.textContent = quoteItem.quote;
  author.textContent = quoteItem.author;
  changeColorTheme();
}

function initButtons() {
  newQuoteButton.addEventListener('click', changeQuote);
}

function changeColorTheme() {
  let boxColor = "rgba(";
  for (let i = 0; i < 3; i++) {
    boxColor += Math.floor(Math.random() * 256) + ',';
  }
  let bgColor = boxColor + '0.3)';
  boxColor += '0.7)'
  quoteBox.style.backgroundColor = boxColor;
  newQuoteButton.style.color = boxColor;
  body.style.backgroundColor = bgColor;
}