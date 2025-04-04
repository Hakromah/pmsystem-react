import { Button } from "@/components/ui/button";
import { createPayment } from "@/Redux/Payment/Action";
import { upgradeSubscription } from "@/Redux/Subscription/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
const SubscriptionCard = ({ data }) => {
   const dispatch = useDispatch();

   const handleUpgrade = () => {
      dispatch(upgradeSubscription({ planType: data.planType, jwt: localStorage.getItem("jwt") }))
      dispatch(createPayment({ planType: data.planType, jwt: localStorage.getItem("jwt") }))
   }
   return (
      <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
         <p>{data.planName}</p>
         <p>
            <span className="text-xl font-semibold">${data.price}</span>
            <span>{data.planType}</span>
         </p>
         {data.planType == "ANNUALLY" && <p className="text-green-500">30% off</p>}

         <Button
            onClick={handleUpgrade}
            className="bg-blue-400 w-full">
            {data.buttonName}
         </Button>

         <div>
            {data.features.map((item) => <div key={item} className="flex items-center gap-2">
               <CheckCircledIcon className="w-5 h-5 text-green-500" />
               <p>{item}</p>
            </div>)}
         </div>

      </div>
   )
}
export default SubscriptionCard
