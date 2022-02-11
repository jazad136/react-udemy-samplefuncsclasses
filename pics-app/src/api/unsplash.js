import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 
            'Client-ID Lj_zHL_K7CFrtEIclKlCDqskD5tNdKbG2W-43LR0YCg'
    }
});