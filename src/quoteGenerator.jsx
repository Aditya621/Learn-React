import React, { useState } from "react";

const quotes = [
  "if your are good enough, donot do it for free",
  "i am not afraid of a man who practice 1000 kicks 1 time, but rather 1 kicks 1000 times ",
  "discipline make you far away from distraction",
  "calm mind help you to achieve extraOrdernary things",
];

function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  function generatorFn() {
    // get the quotes from quotes array
    const getQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(getQuotes);
  }

  return (
    <div>
      <h1>Quote Of The Day</h1>

      <div>{quote}</div>
      <button onClick={generatorFn}>Click me</button>
    </div>
  );
}

export default QuoteGenerator;
