import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";


const ThemeToggle = () => {
   const [theme, setTheme] = useState(() => {
      return localStorage.getItem("theme") || "light";
   });

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
   }, [theme]);
   return (
      <>
         <Button variant="outline" size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer flex items-center"
         >
            {theme === "dark" ? "🌙" : "☀️"}
         </Button>
      </>
   )
}
export default ThemeToggle
