import axios from 'axios'

const API_URL = 'http://localhost:8000'  // Adjust this URL to match your backend API

const authService = {
  register: async (username, email, password) => {
    return axios.post(`${API_URL}/register`, {
      username,
      email,
      password
    })
  },
  // You can add more methods here for login, logout, etc.
}

export default authService