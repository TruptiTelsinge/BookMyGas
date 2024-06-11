import axios from 'axios'
import { config } from '../config'


export async function createInventory(agencyId, cylinderType, quantityAvailable, lastUpdated) {
  try {
    const body = { agencyId, cylinderType, quantityAvailable, lastUpdated };
    const response = await axios.post(`${config.serverUrl}/inventory`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}

export async function getAllInventory() {
  try {
    const response = await axios.get(`${config.serverUrl}/inventory`);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}
