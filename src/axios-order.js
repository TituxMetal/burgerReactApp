import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-react-app-6e6f5.firebaseio.com/'

})

export default instance
