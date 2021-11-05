import { getUserAuth } from "..";
import { axiosInstance as axios } from "../../config/api";

const sendConfirmationEmail = (email, password, userType) =>
   new Promise((resolve, reject) => {
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

const updateUserProfile = userData =>
   new Promise((resolve, reject) => {
      axios
         .put("/update-user", userData, {
            headers: { Authorization: getUserAuth() },
         })
         .then(response => {
            const resData = response.data;
            if (!resData.success) reject(resData);
            else resolve(resData);
         })
         .catch(err => reject(err.response.data));
   });

const getUserData = userId =>
   new Promise((resolve, reject) => {
      axios
         .get("/get-user/" + userId)
         .then(response => {
            const resData = response.data;
            if (!resData.success) reject(resData);
            else resolve(resData);
         })
         .catch(err => reject(err.response.data));
   });

const loginUser = ({ email, password }) =>
   new Promise((resolve, reject) => {
      axios
         .post("/login-user", { email, password })
         .then(response => {
            const resData = response.data;
            if (!resData.success) reject(resData);
            else resolve(resData);
         })
         .catch(err => reject(err.response.data));
   });

export {
   sendConfirmationEmail,
   confirmAccount,
   updateUserProfile,
   getUserData,
   loginUser,
};
