import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import CreateProjectForm from "../project/CreateProjectForm"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PersonIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "@/Redux/Auth/Action"


const Navbar = () => {
  const navigate = useNavigate()

  const { auth } = useSelector(store => store)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <p onClick={() => navigate("/")} className="cursor-pointer">Project Management</p>

        <Dialog>

          <DialogTrigger>

            <Button className="text-blue-500 cursor-pointer" variant="ghost">New Project</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>Create New Project</DialogHeader>
            <CreateProjectForm />
          </DialogContent>

        </Dialog>
        <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">Upgrade</Button>
      </div>
      <div className="flex gap-3 items-center">

        {/* Dark and Light Mode */}
        <div className="mr-4">
          <ThemeToggle />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex items-center justify-center text-sm cursor-pointer"
              onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="text-sm text-blue-500 sm:block hidden">
          {auth.user?.fullName}</p>
      </div>
    </div>
  )
}

export default Navbar
