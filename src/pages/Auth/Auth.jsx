import { Button } from "@/components/ui/button";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./Auth.css";


const Auth = () => {
   const [active, setActive] = useState(true);
   return (
      <div className="loginContainer flex justify-center items-center min-h-[100vh] bg-[#25252b]">
         <div className="box h-[30rem] w-[25rem] bg-white shadow-md rounded-md p-5">
            <div className="mainContainer login">
               <div className="loginBox w-full px-5 space-y-5 flex justify-center items-center">
                  {active ? <div> <Signup />
                     <div className="flex text-white gap-2 w-full items-center">
                        <div>Already have account?</div>
                        <Button
                           className="text-blue-500 font-semibold pl-2"
                           variant="ghost"
                           size="icon"
                           onClick={(() => setActive(!active))}>
                           {active ? " signin" : " signup"}
                        </Button>
                     </div>
                  </div>
                     : <div>
                        <Login />
                        <div className="flex text-white gap-2 w-full items-center">
                           <span>Do not have account?</span>
                           <Button
                              variant="ghost"
                              onClick={(() => setActive(!active))}>
                              {!active ? " signup" : "signin"}
                           </Button>
                        </div>
                     </div>}
               </div>
            </div>
         </div>
      </div>
   )
}
export default Auth
