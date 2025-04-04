/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { useSelector } from "react-redux";
import SubscriptionCard from "./SubscriptionCard";

const paidPlan = [
   "Add unlimited projects",
   "Access to live chat support",
   "Add unlimited team members",
   "Advanced reporting",
   "Priority support",
   "Customization Options",
   "Integration support",
   "Advanced security",
   "Training and Resources",
   "Access Control",
   "Custom Workflows",
];
const annualPlan = [
   "Add unlimited projects",
   "Access to live chat support",
   "Add unlimited team members",
   "Advanced reporting",
   "Priority support",
   "Everything which monthly plan has",
];
const freePlan = [
   "Add only 5 projects",
   "Basic Task Management",
   "Project Collaboration",
   "Basic Reporting",
   "Email Notifications",
   "Basic Access Control",
];

const Subscription = () => {
   const { subscription } = useSelector(store => store)
   return (
      <div className="p-10">
         <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
         <div className="flex flex-col lg:flex-row justify-center items-center gap-9 text-white">
            <SubscriptionCard
               data={{
                  planName: "Free",
                  features: freePlan,
                  planType: "FREE",
                  price: 0,
                  buttonName: subscription.userSubscription?.planType == "FREE" ?
                     "Current Plan" : "Get Started"
               }} />
            <SubscriptionCard
               data={{
                  planName: "Monthly Paid Plan",
                  features: paidPlan,
                  planType: "MONTHLY",
                  price: 1,
                  buttonName: subscription.userSubscription?.planType == "MONTHLY" ?
                     "Current Plan" : "Get Started"
               }} />
            <SubscriptionCard
               data={{
                  planName: "Annual Paid Plan",
                  features: annualPlan,
                  planType: "ANNUALLY",
                  price: 12,
                  buttonName: subscription.userSubscription?.planType == "ANNUALLY" ?
                     "Current Plan" : "Get Started"
               }} />
         </div>

      </div>
   )
}
export default Subscription
