
import api from '@/config/api';
import * as actionTypes from './ActionTypes';

// Action to create comment
export const createComment = (commentData) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.CREATE_COMMENT_REQUEST });
      try {
         const response = await api.post('/api/comments', commentData);
         console.log("comment created ---> ", response.data);

         dispatch({
            type: actionTypes.CREATE_COMMENT_SUCCESS, comment: response.data
         });
      } catch (error) {
         dispatch({
            type: actionTypes.CREATE_COMMENT_FAILURE,
            error: error.message,
         });
      }
   };
};

// Action to delete a comment
export const deleteComment = (commentId) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.DELETE_COMMENT_REQUEST });
      try {
         const response = await api.delete(`/api/comments/${commentId}`);
         console.log("comment deleted ---> ", response.data);

         dispatch({
            type: actionTypes.DELETE_COMMENT_SUCCESS, commentId
         });
      } catch (error) {
         console.log("error", error);

         dispatch({
            type: actionTypes.DELETE_COMMENT_FAILURE,
            error: error.message,
         });
      }
   };
}

// Action to fetch comments
export const fetchComments = (issueId) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.FETCH_COMMENTS_REQUEST });
      try {
         const response = await api.get(`/api/comments/${issueId}`);
         dispatch({
            type: actionTypes.FETCH_COMMENTS_SUCCESS, comments: response.data
         });
         console.log("comments fetched ---> ", response.data);
      } catch (error) {
         dispatch({
            type: actionTypes.FETCH_COMMENTS_FAILURE,
            error: error.message,
         });
      }
   };
};

