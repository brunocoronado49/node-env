const axios = require('axios');

const httpClientPlugin = {
  get: async (url) => {
    const response = await axios.get(url);
    return await response.data;
  },

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

module.exports = {
  http: httpClientPlugin,
};
