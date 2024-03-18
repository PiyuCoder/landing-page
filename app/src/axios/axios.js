import axios from "axios";

const url = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const subscribeApi = async (email) => {
  try {
    const res = await axios.post(`${url}/api/subscriber`, { email });
    return res;
  } catch (error) {
    return error.response;
  }
};
