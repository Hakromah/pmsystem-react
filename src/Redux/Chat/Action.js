import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const sendMessage = (messageData) => {
   return async (dispatch) => {
      dispatch({
         type: actionTypes.SEND_MESSAGES_REQUEST
      });
      try {
         const response = await api.post(
            "/api/messages/send", messageData);
         dispatch({
            type: actionTypes.SEND_MESSAGES_SUCCESS, message: response.data
         });
         console.log("Message sent successfully...", response.data);

      } catch (error) {
         console.log(error);

         dispatch({
            type: actionTypes.SEND_MESSAGES_FAILURE, payload: error.response.data
         });
      }
   }
}

export const fetchChatByProject = (projectId) => {
   return async (dispatch) => {
      dispatch({
         type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST
      });
      try {
         const response = await api.get(
            `/api/projects/${projectId}/chat`);
         console.log("fetch chat by project", response.data);

         dispatch({
            type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
            chat: response.data
         });
      } catch (error) {
         console.log(error);
         dispatch({
            type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
            error: error.response.data
         });
      }
   }
}

export const fetchChatMessages = (projectId) => {
   return async (dispatch) => {
      dispatch({
         type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST
      });
      try {
         const response = await api.get(
            `/api/messages/chat/${projectId}`);
         console.log("fetch chat messages", response.data);

         dispatch({
            type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS, projectId,
            messages: response.data
         });
      } catch (error) {
         console.log(error);
         dispatch({
            type: actionTypes.FETCH_CHAT_MESSAGES_FAILURE,
            error: error.response.data
         });
      }
   }
}

