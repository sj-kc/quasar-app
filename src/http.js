import axios from "axios";

const http = axios.create({
  baseURL:
    "https://demoapi.thedenstore.com/api/service?Request=Stores&Language=en-us"
});

export default http;
