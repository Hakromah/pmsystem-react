/* eslint-disable no-unused-vars */
import api from "@/config/api";

export const createPayment = async ({ planType, jwt }) => {

   try {
      const { data } = await api.post(`/api/subscription/${planType}`);
      if (data.payment_link_url) {
         window.location.href = data.payment_link_url;
      }

   } catch (error) {
      console.log(error.response.data);
   }
}
