/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { deleteComment } from "@/Redux/Comment/Action"
import { TrashIcon } from "@radix-ui/react-icons"
import { useDispatch } from "react-redux"


const CommentCard = ({ itemData }) => {
   const dispatch = useDispatch();

   const handleCommentDelete = () => {
      dispatch(deleteComment(itemData.id ));
   }
   return (
      <div className="flex justify-between">
         <div className="flex items-center gap-4">
            <Avatar>
               <AvatarFallback>{itemData.user.fullName[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
               <p>{itemData.user.fullName}</p>
               <p>{itemData.content}</p>
            </div>

            <div className="space-y-1">
               <Button onClick={handleCommentDelete}
                  className="rounded-full"
                  variant="ghost" size="icon"
               >
                  <TrashIcon />
               </Button>
            </div>
         </div>
      </div>
   )
}
export default CommentCard
