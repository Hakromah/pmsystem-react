import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/Redux/Auth/Action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Signup = () => {
   const dispatch = useDispatch();
   const form = useForm({
      //resolver:zod
      defaultValues: {
         email: "",
         password: "",
         fullName: "",
      }
   })
   const onSubmit = (data) => {
      dispatch(register(data));// coming from redux
      console.log("User Email: ", data);
   }
   return (
      <div className="space-y-5 text-white w-[16rem]">
         <h1 className="!pb-4">Register</h1>
         <Form {...form}>
            <form className="flex flex-col gap-4 space-y-5 pt-4" onSubmit={form.handleSubmit(onSubmit)}>

               {/* Full Name */}
               <FormField control={form.control}
                  name="fullName"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input {...field}
                              type="text"
                              className="border w-full border-gray-700 py-5 !px-3"
                              placeholder="fullName..." />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               {/* Email Field */}
               <FormField control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input {...field}
                              type="text"
                              className="border w-full text-white border-gray-700 py-5 !px-3"
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
                              type="text"
                              className="border w-full border-gray-700 py-5 !px-3"
                              placeholder="password..." />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               <Button type="submit" className="w-full mt-5">
                  Register
               </Button>
            </form>
         </Form>
      </div>
   )
}
export default Signup
