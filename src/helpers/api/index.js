import { axiosInstance as axios } from "./config";

const sendConfirmEmail = (email, password, userType) =>
   new Promise((resolve, reject) => {
      axios
         .post("/create-user", { email, password, userType })
         .then(response => {
            const resData = response.data;
            if (!resData.success) reject(resData);
            else resolve(resData);
         })
         .catch(reject);
   });

export { sendConfirmEmail };
