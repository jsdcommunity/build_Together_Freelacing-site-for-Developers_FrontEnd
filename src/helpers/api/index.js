import { axiosInstance as axios } from "./config";

const sendConfirmationEmail = (email, password, userType) =>
   new Promise((resolve, reject) => {
      console.log({ email, password, userType });
      axios
         .post("/create-user", { email, password, userType })
         .then(response => {
            const resData = response.data;
            if (!resData.success) reject(resData);
            else resolve(resData);
         })
         .catch(err => reject(err.response.data));
   });

const confirmAccount = token =>
   new Promise((resolve, reject) => {
      axios
         .post("/confirm-email", { token })
         .then(response => {
            const resData = response.data;
            if (!resData.success) reject(resData);
            else resolve(resData);
         })
         .catch(err => reject(err.response.data));
   });

export { sendConfirmationEmail, confirmAccount };
