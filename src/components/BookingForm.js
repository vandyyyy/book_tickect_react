import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save the user details to local/session storage or send to the server
    const userDetails = {
      name: name,
      email: email,
      showId: id,
    };

    // Save user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to a success page or do other actions
    history.push('/success');
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Book Ticket</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
