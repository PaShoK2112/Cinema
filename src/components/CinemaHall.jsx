import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBookings, saveBooking } from '../services/BookingService';
import '../styles/CinemaHall.css';

const CinemaHall = ({ movieId }) => {
  const rows = 7;
  const seatsPerRow = 7;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const bookings = getBookings(movieId);
    const booked = Object.keys(bookings);
    setBookedSeats(booked);
  }, [movieId]);

  const toggleSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Ім'я є обов'язковим";
    if (!formData.phone) newErrors.phone = "Телефон є обов'язковим";
    if (!formData.email) newErrors.email = "Email є обов'язковим";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Некоректний формат email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      toast.error('Виберіть принаймні одне місце');
      return;
    }

    if (!validateForm()) {
      toast.error('Заповніть усі поля коректно');
      return;
    }

    selectedSeats.forEach((seatId) => {
      saveBooking(movieId, seatId, formData);
    });

    setBookedSeats((prev) => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
    setFormData({ name: '', phone: '', email: '' });
    toast.success('Бронювання успішне!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const formatSeatId = (seatId) => {
    const [row, seat] = seatId.split('-').map(Number);
    return `Ряд ${row + 1}, Місце ${seat + 1}`;
  };

  const renderSeats = () => {
    const seats = [];

    for (let row = 0; row < rows; row++) {
      for (let seat = 0; seat < seatsPerRow; seat++) {
        const seatId = `${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatId);
        const isBooked = bookedSeats.includes(seatId);

        seats.push(
          <div
            key={seatId}
            className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
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
        Обрані місця: <strong>{selectedSeats.map(formatSeatId).join(', ') || 'немає'}</strong>
      </div>

      <div className="booking-form">
        <input
          type="text"
          name="name"
          placeholder="Ім'я"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <small>{errors.name}</small>}

        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <small>{errors.phone}</small>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <small>{errors.email}</small>}

        <button onClick={handleBooking}>Забронювати</button>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default CinemaHall;
