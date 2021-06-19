import axios from 'axios';

const port = process.env.PORT || '3000'

let url = null;
switch (process.env.NODE_ENV){
    case 'development':
        url = 'http://localhost:' + port
        break;
    case 'production':
        url = process.env.baseURL
        break;
}

const apiClient = axios.create({
    baseURL: url
});

export default apiClient;
