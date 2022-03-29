import axios from 'axios'

const apiCodeBurger = axios.create({
    baseUrl: 'http://localhost:3001/'
})

export default apiCodeBurger