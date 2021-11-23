import { getUserAuth } from "..";
import { axiosInstance as axios } from "../../config/api";

const sendProposal = proposalData =>
   new Promise((resolve, reject) => {
      axios
         .post("/developer/create-proposal", proposalData, {
            headers: { Authorization: getUserAuth() },
         })
         .then(response => {
            const resData = response.data;
            if (!resData.success) reject(resData);
            else resolve(resData);
         })
         .catch(err => reject(err.response.data));
   });

export { sendProposal };
