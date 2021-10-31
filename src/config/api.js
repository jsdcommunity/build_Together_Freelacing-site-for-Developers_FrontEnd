import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "https://but-jsd-3.herokuapp.com/api/v1",
});

export { axiosInstance };
