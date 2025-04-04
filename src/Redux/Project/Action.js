import api from "@/config/api";
import {
   ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS,
   CREATE_PROJECTS_REQUEST, CREATE_PROJECTS_SUCCESS, DELETE_PROJECTS_REQUEST,
   DELETE_PROJECTS_SUCCESS, FETCH_PROJECTS_BY_ID_REQUEST,
   FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST,
   FETCH_PROJECTS_SUCCESS, INVITE_PROJECTS_REQUEST, INVITE_PROJECTS_SUCCESS,
   SEARCH_PROJECTS_REQUEST, SEARCH_PROJECTS_SUCCESS
} from "./ActionTypes";

export const fetchProjects = ({ category, tag }) => async (dispatch) => {
   dispatch({ type: FETCH_PROJECTS_REQUEST });
   try {
      const { data } = await api.get("/api/projects", { params: { category, tag } });
      console.log("all Projects :", data);
      dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data });
   } catch (error) {
      console.log("fetchProjects -> error", error);
   }
}

export const searchProjects = (keyword) => async (dispatch) => {
   dispatch({ type: SEARCH_PROJECTS_REQUEST });
   try {
      const { data } = await api.get("/api/projects/search?keyword=" + keyword);
      console.log("search Projects :", data);
      dispatch({ type: SEARCH_PROJECTS_SUCCESS, projects: data });
   } catch (error) {
      console.log("search project -> error", error);
   }
}



export const fetchProjectById = (projectId) => async (dispatch) => {
   dispatch({ type: FETCH_PROJECTS_BY_ID_REQUEST });
   try {
      const { data } = await api.get("/api/projects/" + projectId);
      console.log("project by ID :", data);
      dispatch({ type: FETCH_PROJECTS_BY_ID_SUCCESS, project: data });
   } catch (error) {
      console.log("fetch project by ID -> error", error);
   }
}

export const createProject = (projectData) => async (dispatch) => {
   dispatch({ type: CREATE_PROJECTS_REQUEST });
   try {
      const { data } = await api.post("/api/projects", projectData);
      console.log("CREATE Projects :", data);
      dispatch({ type: CREATE_PROJECTS_SUCCESS, project: data });
   } catch (error) {
      console.log("create project -> error", error);
   }
}

export const deleteProject = ({ projectId }) => async (dispatch) => {
   dispatch({ type: DELETE_PROJECTS_REQUEST });
   try {
      const { data } = await api.delete("/api/projects/" + projectId);
      console.log("delete project :", data);
      dispatch({ type: DELETE_PROJECTS_SUCCESS, projectId });
   } catch (error) {
      console.log("delete project -> error", error);
   }
}

export const inviteToProject = ({ email, projectId }) => async (dispatch) => {
   dispatch({ type: INVITE_PROJECTS_REQUEST });
   try {
      const { data } = await api.post("/api/projects/invite", { email, projectId });
      console.log("Invite To project :", data);
      dispatch({ type: INVITE_PROJECTS_SUCCESS, payload: data });
   } catch (error) {
      console.log("invite to project -> error", error);
   }
}

export const acceptInvitation = ({ token, navigate }) => async (dispatch) => {
   dispatch({ type: ACCEPT_INVITATION_REQUEST });
   try {
      const { data } = await api.get("/api/projects/accept_invitation", {
         params: {
            token
         }
      });
      navigate("/project/" + data.projectId);
      console.log("accept Invitation :", data);
      dispatch({ type: ACCEPT_INVITATION_SUCCESS });
   } catch (error) {
      console.log("accept Invitation -> error", error);
   }
}
