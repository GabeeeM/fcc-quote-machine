import { useState, useEffect } from 'react';
import './App.scss';

let quoteDB = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
let x = 0;

function App() {
  const [quote, setQuote] = useState("If you do what you’ve always done, you’ll get what you’ve always gotten.");
  const [author, setAuthor] = useState("Gabriel Mack");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotes, setQuotes] = useState(null);
  const [accentColor, setAccentColor] = useState("#FF6633");

  const fetchQuotes = async(url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setQuotes(parsedJSON.quotes);
  }
  
  useEffect(() => {
    fetchQuotes(quoteDB)
  }, [quoteDB])

  const genRandomNumber = () => {
    let index = Math.floor(Math.random() * quotes.length);
    x = (x + 1) % colorArray.length;
    setAccentColor(colorArray[x]);
    setQuote(quotes[index].quote);
    setAuthor(quotes[index].author);
  };

  var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColor, color: accentColor}}>
        <div id="quote-box">
        <p id="text" style={{color: accentColor}}>
          "{quote}"
        </p>
        <p id="author" style={{color: accentColor}}>
          -{author}
        </p>
        <a id="tweet-quote" style={{color: accentColor}} target="_blank" href={'https://twitter.com/intent/tweet?text=' + quote + " -" + author}>Tweet Quote</a>
        <button id="new-quote" style={{color: accentColor}} onClick={() => setRandomNumber(genRandomNumber())}>Generate a random quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
