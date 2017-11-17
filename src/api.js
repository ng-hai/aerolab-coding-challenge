import axios from 'axios'

/**
 * Setup Global axios config
 */
const config = {
  url: {
    production: 'https://aerolab-challenge.now.sh',
    development:
      'https://private-anon-44766ffeb2-aerolabchallenge.apiary-proxy.com',
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBkMmM4ZDUyZGQ5NjAwN2I2ZWIyODEiLCJpYXQiOjE1MTA4MTI4MTN9.C5FGg-Nj5t9ap1J9NYtN1_iqbe7dja1ECL74v4CSUY4',
}

axios.defaults.baseURL = config.url[process.env.NODE_ENV]
axios.defaults.headers.common['Authorization'] = `Bearer ${config.token}`
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

/**
 * Get personal user information
 *
 * @author Hai Nguyen <nghai.dev@gmail.com>
 * @returns User Object
 */
function getUser () {
  return axios.get('/user/me').then(response => response.data)
}

/**
 * Add points to user
 *
 * @author Hai Nguyen <nghai.dev@gmail.com>
 *
 * Amount of points to add. Must be 1000, 5000 or 7500. Any other value will be rejected.
 * @param {number, required} amount
 * @returns New Points
 */
function addPoints (amount) {
  return axios.post('/user/points', { amount }).then(response => response.data)
}

/**
 * Get user redeem history
 * If user didn’t redeem any product, you’ll get an empty array as a response.
 *
 * @author Hai Nguyen <nghai.dev@gmail.com>
 * @returns Array of Redeem History
 */
function getRedeemHistory () {
  return axios.get('/user/history').then(response => response.data)
}

/**
 *  Get all the products available
 *
 * @author Hai Nguyen <nghai.dev@gmail.com>
 * @returns Array of Products
 */
function getAllProducts () {
  return axios.get('/products').then(response => response.data)
}

export { getUser, addPoints, getRedeemHistory, getAllProducts }
