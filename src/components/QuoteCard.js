import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote, onSave, fetchNewQuote }) {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <div className="buttons">
        <button onClick={onSave}>Save to List</button>
        <button onClick={fetchNewQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default QuoteCard;
