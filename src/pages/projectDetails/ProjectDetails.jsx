import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { fetchProjectById, inviteToProject } from "@/Redux/Project/Action"
import { PlusIcon } from "@radix-ui/react-icons"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ChatBox from "./ChatBox"
import InviteUserForm from "./InviteUserForm"
import IssueList from "./IssueList"
import { DialogTitle } from "@radix-ui/react-dialog"

const ProjectDetails = () => {

  const dispatch = useDispatch();
  const { project } = useSelector(store => store)
  const { id } = useParams();

  const handleProjectInvitation = (data) => {
    dispatch(inviteToProject({ email: data.email, projectId: id }))
  }

  const handleUpdateIssueStatus = () => {

  }

  useEffect(() => {
    dispatch(fetchProjectById(id))
  }, [id])

  return (
    <>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5 text-white">
                {project.projectDetails?.name}
              </h1>
              <div className="space-y-5 pb-10 text-sm">
                <p className="w-full md:max-w-lg lg:max-w-xl">
                  {project.projectDetails?.description}
                </p>
                {/* project Lead */}
                <div className="flex">
                  <p className="w-36">Project Lead :</p>
                  <p>{project.projectDetails?.owner.fullName}</p>
                </div>
                {/* Members and Avatar */}
                <div className="flex">
                  <p className="w-36">Members :</p>
                  <div className="flex items-center gap-2">
                    {project.projectDetails?.team.map((item) => <Avatar className="cursor-pointer" key={item}>
                      <AvatarFallback>{item.fullName[0]}</AvatarFallback>
                    </Avatar>)}
                  </div>
                  {/* Send Invitation */}
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button size="sm" variant="outline"
                          onClick={handleProjectInvitation}
                          className="ml-2">
                          <span>Invite</span>
                          <PlusIcon className="w-3 h-3" />
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>
                        <DialogHeader>Invite User</DialogHeader>
                      </DialogTitle>
                      <InviteUserForm />
                    </DialogContent>
                  </Dialog>
                </div>
                {/* Category */}
                <div className="flex">
                  <p className="w-36">Category :</p>
                  <p>{project.projectDetails?.category}</p>
                </div>
                {/* Status */}
                {/* <div className="flex gap-3">
                  <p className="w-36">Status :</p>
                  <Badge className="rounded-full bg-stone-500">Pending</Badge>
                  <Badge className="rounded-full bg-amber-400">In Progress</Badge>
                  <Badge className="rounded-full bg-emerald-700">Done</Badge>
                </div> */}
                <div className="flex gap-3">
                  <p className="w-36">Status :</p>
                  <Select onValueChange={handleUpdateIssueStatus}>
                    <SelectTrigger className="w-[140px] ml-[-15px]">
                      <SelectValue placeholder="To Do" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* TASKS AREA */}
              <section>
                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">

                  <IssueList status="pending" title="Todo List => Pending" />
                  <IssueList status="in_progress" title="In progress" />
                  <IssueList status="done" title="Done" />
                </div>
              </section>
            </div>
          </ScrollArea>
          {/* ChatBox Area */}
          <div className="lg:w-[30%] rounded-md sticky right-5 to-10">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails
