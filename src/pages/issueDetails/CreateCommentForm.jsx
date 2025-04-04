/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createComment } from "@/Redux/Comment/Action";
import { MessageCircleIcon, SendIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateCommentForm = ({ issueId }) => {
   const dispatch = useDispatch();

   const form = useForm({
      //resolver:zod
      defaultValues: {
         content: "",
      }
   })
   const onSubmit = (data) => {
      dispatch(createComment({ content: data.content, issueId: issueId }));
      console.log("Comments: ", data);
   }
   return (
      <div>
         <Form {...form}>
            <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
               <FormField control={form.control}
                  name="content"
                  render={({ field }) => (
                     <FormItem>
                        <div className="flex gap-2">
                           <div>
                              <Avatar>
                                 <AvatarFallback>
                                    <MessageCircleIcon />
                                 </AvatarFallback>
                              </Avatar>
                           </div>
                           <FormControl>
                              <Input {...field}
                                 type="text"
                                 className="w-[20rem]"
                                 placeholder="make a comment..." />
                           </FormControl>
                        </div>
                        <FormMessage />
                     </FormItem>)}
               />
               <Button type="submit" className="cursor-pointer">
               <SendIcon/>
               </Button>
            </form>
         </Form>
      </div>
   )
}
export default CreateCommentForm
