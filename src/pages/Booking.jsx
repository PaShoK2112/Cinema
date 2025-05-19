import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';

const Booking = () => {
  const { id } = useParams();

  return (
    <div className="page-container">
      <h2 className="page-title">Бронювання місць</h2>
      <CinemaHall movieId={id} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/">
          <button className="back-button">На головну</button>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
