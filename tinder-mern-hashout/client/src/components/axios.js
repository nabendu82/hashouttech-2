import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-mern-hashout-backend.herokuapp.com"
})

export default instance