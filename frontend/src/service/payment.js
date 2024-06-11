import axios from 'axios'
import { config } from '../config'


export async function createPayment(bookingId, paymentDate, amount, paymentMethod, paymentStatus) {
  try {
    const body = { bookingId, paymentDate, amount, paymentMethod, paymentStatus };
    const response = await axios.post(`${config.serverUrl}/payment`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}

export async function getAllPayments() {
  try {
    const response = await axios.get(`${config.serverUrl}/payment`);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}
