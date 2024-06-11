import axios from 'axios'
import { config } from '../config'

export async function createAgency(name, address, phone, email) {
  try {
    const body = { name, address, phone, email };
    const response = await axios.post(`${config.serverUrl}/agency`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}

export async function getAllAgencies() {
  try {
    const response = await axios.get(`${config.serverUrl}/agency`);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}
