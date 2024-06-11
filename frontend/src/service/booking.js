import axios from 'axios'
import { config } from '../config'

export async function createBooking(gasConnectionId, agencyId, bookingDate, status, paymentStatus) {
  try {
    const body = { gasConnectionId, agencyId, bookingDate, status, paymentStatus };
    const response = await axios.post(`${config.serverUrl}/booking`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}

export async function getAllBookings() {
  try {
    const response = await axios.get(`${config.serverUrl}/booking`);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}
