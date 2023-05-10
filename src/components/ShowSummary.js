import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowSummary = () => {
  const [summary, setSummary] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setSummary(data.summary));
  }, [id]);

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
      <Link to={`/booking/${id}`}>
        <button>Book Ticket</button>
      </Link>
    </div>
  );
};

export default ShowSummary;
