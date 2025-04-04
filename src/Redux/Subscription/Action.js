/* eslint-disable no-unused-vars */

import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const getUserSubscription = () => {

   return async (dispatch) => {
      dispatch({ type: actionTypes.GET_USER_SUBSCRIPTION_REQUEST });
      try {
         const response = await api.get(`/api/subscription/user`, {
            headers: {
               "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
         });
         dispatch({
            type: actionTypes.GET_USER_SUBSCRIPTION_SUCCESS,
            payload: response.data
         });
         console.log("getUserSubscription -> response ", response.data);

      } catch (error) {
         dispatch({
            type: actionTypes.GET_USER_SUBSCRIPTION_FAILURE,
            payload: error.message
         });
      }
   }
}

export const upgradeSubscription = ({ planType }) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.UPGRADE_SUBSCRIPTION_REQUEST });
      try {
         const response = await api.patch(`/api/subscription/upgrade`, null, {
            headers: {
               "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            params: {
               planType: planType,
            }
         });

         dispatch({
            type: actionTypes.UPGRADE_SUBSCRIPTION_SUCCESS,
            payload: response.data
         });

         const checkoutUrl = response.data.payment_link_url; // Ensure the backend sends this
         console.log("Subscription upgraded successfully", response.data);
         if (checkoutUrl) {
            window.location.href = checkoutUrl; // Redirect to Stripe Checkout
         }
         console.log("Checkout success==> ", checkoutUrl);

      } catch (error) {
         console.log(error.response.data);

         dispatch({
            type: actionTypes.UPGRADE_SUBSCRIPTION_FAILURE,
            payload: error.message
         });
      }
   }
}

