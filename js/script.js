
// Selecting the div with the id of 'quote-box'


const quoteBox = document.getElementById('quote-box');


// Creating an array filled with 5 objects with diffrent key value pairs
const colors = ['#740001', '#1a472a', '#ecb939', '#0e1a40'];
const quotes = [
  {
    quote: "”I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.”",
    source: "Hermione Granger, Harry Potter and the Sorcerer's Stone",
    movieYear: 'The first Movie'
  },
  {
    quote: "“It does not do well to dwell on dreams and forget to live.”",
    source: "Albus Dumbledore, Harry Potter and the Sorcerer's Stone",
    year: "Year: Unknown"
  },
  {
    quote: "“You're a little scary sometimes, you know that? Brilliant ... but scary“",
    source: " Ron Weasley, Harry Potter and the Sorcerer's Stone"
  },
  {
    quote: "“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.“",
    source: " Albus Dumbledore, Harry Potter and the Sorcerer's Stone",
    citation: "Movie"
  },
  {
    quote: "“If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.“",
    source: " Sirius Black, Harry Potter and the Goblet of Fire",
    movieYear: 'The fourth Movie'
  }

];

// A function that will get a random quote from the array and then return it

function getRandomQuote() {
  const randomNumb = quotes[Math.floor(Math.random() * quotes.length)];
  return randomNumb;
}

function getRandomColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}


// This will print the random quote using some html manipulation and acessing the diffrent object properties

function printQuote() {
  const randomSaying = getRandomQuote();
  const randomHouseColor = getRandomColor();
  let html = `
  <p class="quote"> ${randomSaying.quote} </p>
  <p class="source"> ${randomSaying.source}`
  if(randomSaying.hasOwnProperty('citation')) {
    html += `<span class="citation"> ${randomSaying.citation} </span>`

  }
  if(randomSaying.hasOwnProperty('year')) {
    html += `<span class="year"> ${randomSaying.year} </span>`
  }
  if(randomSaying.hasOwnProperty('movieYear')) {
    html += `<span class="movie-year"> ${randomSaying.movieYear} </span>`
  }
  `
  </p>
  `;
  document.body.style.backgroundColor = randomHouseColor;
  quoteBox.innerHTML = html;

}
printQuote();

setInterval(printQuote, 4000);


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
