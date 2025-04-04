/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { fetchIssues } from "@/Redux/Issue/Action"
import { PlusIcon } from "@radix-ui/react-icons"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import CreateIssueForm from "./CreateIssueForm"
import IssueCard from "./IssueCard"

const IssueList = ({ title, status }) => {

   const dispatch = useDispatch();
   const { id } = useParams()
   const { issue } = useSelector((store) => store)

   useEffect(() => {
      dispatch(fetchIssues(id));
   }, [id, dispatch]);

   return (
      <div>
         <Dialog>
            <Card className="w-full md:w-[300px] lg:w-[310px]">
               <CardHeader>
                  <CardTitle>{title}</CardTitle>
               </CardHeader>
               <CardContent className="px-2">
                  <div className="space-y-2">
                     {issue.issues.filter((issue) =>
                        issue.status === status).map((item) =>
                           <IssueCard projectId={id}
                              item={item} Key={item.id} />)}
                  </div>
               </CardContent>
               <CardFooter>
                  <DialogTrigger>
                     <Button
                        variant="outline"
                        className="w-full flex items-center gap-2">
                        <PlusIcon />
                        Create Issue
                     </Button>
                  </DialogTrigger>
               </CardFooter>
            </Card>

            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Create New Issue</DialogTitle>
               </DialogHeader>
               <CreateIssueForm status={status} />
            </DialogContent>
         </Dialog>
      </div>
   )
}

export default IssueList
