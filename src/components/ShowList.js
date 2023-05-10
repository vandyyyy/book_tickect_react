import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      {shows.map(show => (
        <div key={show.show.id}>
          <h2>{show.show.name}</h2>
          <p>{show.show.summary}</p>
          <Link to={`/summary/${show.show.id}`}>
            <button>View Summary</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
