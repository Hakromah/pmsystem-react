/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getUserSubscription, upgradeSubscription } from "@/Redux/Subscription/Action"
import { CheckCircleIcon } from "lucide-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const UpgradeSuccess = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { subscription } = useSelector(store => store)

	const queryParams = new URLSearchParams(location.search);
	const paymentId = queryParams.get("payment_id");
	const planType = queryParams.get("planType");

	useEffect(() => {
		dispatch(upgradeSubscription({ planType }))
		dispatch(getUserSubscription())
	}, [])

	return (
		<div className="flex justify-center items-center">
			<Card className="mt-20 p-5 space-y-5 flex flex-col items-center w-[20rem]">
				<div className="flex items-center gap-4">
					<CheckCircleIcon className="w-10 h-10 text-green-500" />
					<h1>Subscription Upgraded Successfully! 🎉</h1>
				</div>
				<div className="space-y-3">
					<p className="text-green-500">Start date : {subscription.userSubscription?.subscriptionStartDate}
					</p>
					<p className="text-red-500">End date : {subscription.userSubscription?.subscriptionEndDate}
					</p>
					<p>Plan type : {subscription.userSubscription?.planType}</p>
				</div>

				<Button onClick={() => navigate("/")}>Go To Homepage</Button>
			</Card>
		</div>
	)
}
export default UpgradeSuccess
