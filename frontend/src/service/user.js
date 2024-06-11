import axios from 'axios'
import { config } from '../config'

export async function register(firstName, lastName, email, password, role) {
  try {
    // post body
    const body = { firstName, lastName, email, password, role }

    // send the post request
    const response = await axios.post(
      `${config.serverUrl}/user/register`,
      body
    )

    // return the json body from response object
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}

export async function login(email, password, role) {
  const body = { email, password, role }
  try {
    const response = await axios.post(`${config.serverUrl}/user/login`, body)
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
  return null
}
