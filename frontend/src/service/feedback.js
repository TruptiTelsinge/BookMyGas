import axios from 'axios'
import { config } from '../config'

export async function createFeedback(userId, agencyId, feedbackText, rating, feedbackDate) {
  try {
    const body = { userId, agencyId, feedbackText, rating, feedbackDate };
    const response = await axios.post(`${config.serverUrl}/feedback`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}

export async function getAllFeedback() {
  try {
    const response = await axios.get(`${config.serverUrl}/feedback`);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}
