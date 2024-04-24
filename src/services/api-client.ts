import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
     key: '4bdaf0f7281f473fb915554396194342'
      // key: import.meta.env.VITE_REACT_APP_API_KEY
    // key: process.env.VITE_REACT_APP_API_KEY

  }
})
