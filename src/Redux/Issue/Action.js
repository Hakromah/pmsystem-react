import api from '@/config/api';
import * as actionTypes from './ActionTypes';

export const fetchIssues = (projectId) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
      try {
         const response = await api.get(`/api/issues/project/${projectId}`);
         console.log("fetchIssues -> response ", response.data);

         dispatch({ type: actionTypes.FETCH_ISSUES_SUCCESS, issues: response.data });

      } catch (error) {
         dispatch({ type: actionTypes.FETCH_ISSUES_FAILURE, error: error.message });
      }
   }
}

export const fetchIssuesById = (issueId) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST });
      try {
         const response = await api.get(`/api/issues/${issueId}`);
         console.log("fetchIssuesById -> response ", response.data);
         dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS, issue: response.data })

      } catch (error) {
         dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE, error: error.message });
      }
   }
}

export const updateIssueStatus = ({ id, status }) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
      try {
         const response = await api.put(`/api/issues/${id}/status/${status}`);
         console.log("updateIssueStatus -> response ", response.data);

         dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS, issues: response.data });

      } catch (error) {
         dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE, error: error.message });
      }
   }
}

export const assignedUserToIssue = ({ userId, issueId }) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.ASSIGNED_ISSUES_TO_USER_REQUEST });
      try {
         const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`);
         console.log("assigned User ------> response ", response.data);

         dispatch({ type: actionTypes.ASSIGNED_ISSUES_TO_USER_SUCCESS, issue: response.data });

      } catch (error) {
         console.log("assignedUserToIssue -> error ", error);

         dispatch({ type: actionTypes.ASSIGNED_ISSUES_TO_USER_FAILURE, error: error.message });
      }
   }
}

export const createIssue = (issueData) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST });
      try {
         const response = await api.post(`/api/issues`, issueData);
         dispatch({ type: actionTypes.CREATE_ISSUE_SUCCESS, issue: response.data });
         console.log("Issue Created Successfully ", response.data);

      } catch (error) {
         dispatch({ type: actionTypes.CREATE_ISSUE_FAILURE, error: error.message });
      }
   }
}

export const deleteIssue = (issueId) => {
   return async (dispatch) => {
      dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
      try {
         const response = await api.delete(`/api/issues/${issueId}`);
         console.log("deleteIssue -> response ", response.data);

         dispatch({ type: actionTypes.DELETE_ISSUE_SUCCESS, issue: response.data });

      } catch (error) {
         dispatch({ type: actionTypes.DELETE_ISSUE_FAILURE, error: error.message });
      }
   }
}
