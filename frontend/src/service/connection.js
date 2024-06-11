import axios from 'axios'
import { config } from '../config'


export async function createGasConnection(userId, connectionType, agencyId, connectionDate) {
  try {
    const body = { userId, connectionType, agencyId, connectionDate };
    const response = await axios.post(`${config.serverUrl}/connection`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}

export async function getAllGasConnections() {
  try {
    const response = await axios.get(`${config.serverUrl}/connection`);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
  }
  return null;
}
