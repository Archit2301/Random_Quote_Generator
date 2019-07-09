/******************************************
TechDegree Project 1 - A Random Quote Generator
******************************************/

/*
Array of objects with properties (quote, source, citation, year and tags).
tags property categorizes quotes
*/

var quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source:'Walt Disney'
  },
  {
    quote: 'Knowing is not enough, we must apply. Wishing is not enough, we must do.',
    source:'Johann Wolfgang Von Goethe'
  },
  {
    quote: 'Don\'t let yesterday take too much of today.',
    source:'Will Rogers'
  },
  {
    quote: 'It\'s not whether you get knocked down, it\'s whether you get up.',
    source:'Vince Lombardi',
    category: 'Motivational'
  },
  {
    quote: 'Whether you think you can or think you can\'t, you\'re right.',
    source:'Henry Ford'
  },
  {
    quote: 'Instead of worrying about what you cannot control, shift your energy to what you can create.',
    source: 'Roy T. Bennett',
    citation: 'The Light in the Heart',
    category: 'Motivational'
  },
  {
    quote: 'Anyone who has never made a mistake has never tried anything new.',
    source: 'Albert Einstein'
  },
  {
    quote: 'If you\'re walking down the right path and you\'re willing to keep walking, eventually you\'ll make progress.',
    source: 'Barack Obama'
  },
  {
    quote: 'Even the darkest night will end and the sun will rise.',
    source: 'Victor Hugo',
    citation: 'Les Miserables',
    year: '1892'
  },
  {
    quote: 'You are not your resume, you are your work.',
    source: 'Seth Godin',
    category: 'Business'
  },
  {
    quote: 'Everybody wants to go to heaven, but nobody wants to die',
    source: 'Albert King',
    category: 'Humor'
  },
  {
    quote: 'A ceiling is simply a floor from below',
    source: 'Elon Musk',
    citation: 'Twitter',
    year: '2017',
    category: 'Humor'
  }
];

for( var i = 0; i < quotes.length; i += 1 ) {
  console.log(quotes[i].quote);
}


// function definition to create a random number and return it.

function getRandomQuote() {
  var randNum = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[randNum-1]; //Subtracting one from the random number to match the index value of the quote array.
}


//function definition to create random color for the background.

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = 'rgb(' + x + ',' + y + ',' + z +')';
  document.body.style.background = bgColor;
  document.getElementById('loadQuote').style.background = bgColor;
}


/*
function definition to print the quote and respective fields to the browser.
The html to be rendered is stored in the variable named message.
The function also calls the function to change the background color of the document
*/

function printQuote() {
  var randomQuote = getRandomQuote();
  var message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  if ( randomQuote.citation ) {
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if ( randomQuote.year ) {
    message += '<span class="year">'+ randomQuote.year + '</span>';
  }
  if ( randomQuote.category ){
    message += '<span class="category">'+ randomQuote.category +'</span>'
  }
  message += '</p>';
  var html = document.getElementById('quote-box');
  html.innerHTML = message;
  randomColor();
}


//The line below will introduce a random quote whenever the browser loads
printQuote();

//When the "Show another quote" button is clicked, the event listener will be tiggered and printQuote function will be called.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//A new quote is displayed after every 20 seconds
setInterval(printQuote, 20000);
