import React, { useState } from 'react';
import '../styles/CinemaHall.css';

const CinemaHall = ({ movieId }) => {
  const rows = 7;
  const seatsPerRow = 7;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 0; row < rows; row++) {
      for (let seat = 0; seat < seatsPerRow; seat++) {
        const seatId = `${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatId);
        seats.push(
          <div
            key={seatId}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => toggleSeat(seatId)}
            title={`Ряд ${row + 1}, Місце ${seat + 1}`}
          >
            {seat + 1}
          </div>
        );
      }
    }
    return seats;
  };

  return (
    <div className="cinema-container">
      <div className="screen">Екран</div>
      <div className="hall-grid">{renderSeats()}</div>
      <div className="summary">
        Обрані місця: <strong>{selectedSeats.join(', ') || 'немає'}</strong>
      </div>
    </div>
  );
};

export default CinemaHall;
