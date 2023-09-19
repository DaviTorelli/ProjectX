import axios from "axios";
import { URL } from "./variables";

const api = {
  call: async (requestType, path, data = null, opts = {}) => {
    try {
      const response = await axios[requestType](URL + path, data, opts);
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        throw error;
      }
    }
  },
};

export default api;
