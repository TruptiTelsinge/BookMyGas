import axios from 'axios'
import { config } from '../config'

export async function createStaff(firstName, lastName, email, password, phone, role, agencyId) {
  try {
    const body = { firstName, lastName, email, password, phone, role, agencyId };
    const response = await axios.post(`${config.serverUrl}/staff`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}

export async function getAllStaff() {
  try {
    const response = await axios.get(`${config.serverUrl}/staff`);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}
