const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://chatapp-upo1.onrender.com/'
    : 'http://localhost:3000'; 

export default API_BASE_URL;