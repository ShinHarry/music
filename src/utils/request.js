import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3001/api/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
export default request;
