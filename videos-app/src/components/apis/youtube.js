import axios from 'axios'
const KEY = 'AIzaSyC6_nGICnzcaiUfNkWUAEc3TVQz2ILDBmY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});