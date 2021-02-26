import Axios from 'axios';

const url = Axios.create({
  baseURL: 'http://192.168.1.9:8000/api',
});

export default url;
