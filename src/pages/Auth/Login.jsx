import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/Redux/Auth/Action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Login = () => {
   const dispatch = useDispatch();
   const form = useForm({
      //resolver:zod
      defaultValues: {
         email: "",
         password: "",
      }
   })
   const onSubmit = (data) => {
      dispatch(login(data));
      console.log("login project data: ", data);
   }
   return (
      <div className="space-y-5">
         <h1 className="text-white font-semibold">Login</h1>
         <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
               {/* Sign In form */}
               <FormField control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input {...field}
                              type="text"
                              className="border w-full border-gray-700 py-5 px-5 text-white"
                              placeholder="email..." />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               {/* Password */}
               <FormField control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input {...field}
                              type="password"
                              className="border w-full border-gray-700 py-5 px-5 text-white"
                              placeholder="password..." />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               <Button variant="ghost" size="icon" type="submit"
                  className="w-full mt-5 text-blue-500 font-semibold cursor-pointer bg-blue-50">
                  Signin
               </Button>
            </form>
         </Form>
      </div>
   )
}
export default Login
