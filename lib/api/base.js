const axios = require('axios');

const BASE_URL = 'https://www.xv-videos1.com';

const createRequest = (options = {}) => {
  return axios.create({ baseURL: BASE_URL, ...options });
};

const base = {
  BASE_URL,
  createRequest,
};

module.exports = base;
