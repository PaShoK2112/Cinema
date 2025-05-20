const getBookings = (movieId) => {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '{}');
  return bookings[movieId] || {};
};

const saveBooking = (movieId, seatId, userDetails) => {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '{}');

  if (!bookings[movieId]) {
    bookings[movieId] = {};
  }

  bookings[movieId][seatId] = userDetails;
  localStorage.setItem('bookings', JSON.stringify(bookings));
};

export { getBookings, saveBooking };
