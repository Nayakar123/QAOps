import apiClient from './client';

export const bookingsApi = {
  /** GET /bookings?eventId=&status=&page=&limit= */
  getBookings: (params = {}) =>
    apiClient.get('/bookings', { params }),

  /** GET /bookings?eventId=&status=&page=&limit= */
  getAll: (params = {}) =>
    apiClient.get('/bookings', { params }),

  /** GET /bookings/:id */
  getBookingById: (id) =>
    apiClient.get(`/bookings/${id}`),

  /** GET /bookings/:id */
  getById: (id) =>
    apiClient.get(`/bookings/${id}`),

  /** GET /bookings/ref/:ref */
  getBookingByRef: (ref) =>
    apiClient.get(`/bookings/ref/${ref}`),

  /** GET /bookings/ref/:ref */
  getByRef: (ref) =>
    apiClient.get(`/bookings/ref/${ref}`),

  /** POST /bookings */
  createBooking: (data) =>
    apiClient.post('/bookings', data),

  /** POST /bookings */
  create: (data) =>
    apiClient.post('/bookings', data),

  /** DELETE /bookings/:id (cancel) */
  cancelBooking: (id) =>
    apiClient.delete(`/bookings/${id}`),

  /** DELETE /bookings/:id (cancel) */
  cancel: (id) =>
    apiClient.delete(`/bookings/${id}`),

  /** DELETE /bookings */
  clearAll: () =>
    apiClient.delete('/bookings'),

  /** DELETE /bookings */
  clearBookings: () =>
    apiClient.delete('/bookings'),
};
