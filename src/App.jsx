/* eslint-disable no-constant-condition */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import IssueDetails from "./pages/issueDetails/IssueDetails";
import Navbar from "./pages/navbar/Navbar";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import Subscription from "./pages/substcription/Subscription";
import { getUser } from "./Redux/Auth/Action";
import { fetchProjects } from "./Redux/Project/Action";
import UpgradeSuccess from "./pages/substcription/UpgradeSuccess";
import AcceptInvitation from "./pages/project/AcceptInvitation";

function App() {
	const dispatch = useDispatch();
	const { auth } = useSelector(store => store)

	useEffect(() => {
		dispatch(getUser())
		dispatch(fetchProjects({}))
	}, [auth.jwt]);

	console.log("auth user in App: ", auth);

	return (
		<>
			{auth.user ? <div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project/:id" element={<ProjectDetails />} />
					<Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />} />
					<Route path="/upgrade_plan" element={<Subscription />} />
					<Route path="/upgrade_plan/success" element={<UpgradeSuccess />} />
					<Route path="/accept_invitation" element={<AcceptInvitation />} />
				</Routes>
			</div> : <Auth />
			}
		</>
	);
}

export default App;
