import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 181707eef14358bbd7c69e59f303f467c0d02d8377e8465594e743a9e70a58d2'
  }
});