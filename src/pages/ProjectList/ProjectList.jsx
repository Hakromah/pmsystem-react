/* eslint-disable no-undef */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchProjects, searchProjects } from "@/Redux/Project/Action";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../project/ProjectCard";

export const tags = [
  "all",
  "react",
  "nextjs",
  "spring boot",
  "mysql",
  "mongodb",
  "angular",
  "python",
  "flask",
  "django",
  "Java",
  "php",
  "dotnet",
  "tailwind",
  "shadcn/ui",
  "postgresql",
];

const ProjectList = () => {
  const [keyword, setKeyword] = useState("");
  const { project } = useSelector(store => store)
  const dispatch = useDispatch();

  const handleFilterCategory = (value) => {
    if (value == "all") {
      dispatch(fetchProjects({}))
    } else {
      dispatch(fetchProjects({ category: value }))
    }
  };
  const handleFilterTags = (value) => {
    if (value == "all") {
      dispatch(fetchProjects({}))
    } else {
      dispatch(fetchProjects({ tag: value }))
    }
  };

  console.log("PROJECT LIST: ", project);


  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    dispatch(searchProjects(e.target.value));
  };

  return (
    <>
      <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
        <section className="filterSection">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl -tracking-wider">filters</p>
              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>

            <CardContent className="mt-5">
              <ScrollArea className="space-y-7 h-[70vh]">
                {/* Category */}
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">
                    Category
                  </h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(value) =>
                        handleFilterCategory(value)
                      }
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlForm="r1">all</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="fullstack" id="r2" />
                        <Label htmlForm="r2">fullstack</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="frontend" id="r3" />
                        <Label htmlForm="r3">frontend</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="backend" id="r4" />
                        <Label htmlForm="r4">backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                {/* TAGS */}
                <div className="pt-9">
                  <h1 className="pb-3 text-gray-400 border-b">Tag</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(value) =>
                        handleFilterTags(value)
                      }
                    >
                      {tags.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2"
                        >
                          <RadioGroupItem
                            value={item}
                            id={`r1-${item}`}
                          />
                          <Label htmlForm={`r1-${item}`}>
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
        {/* project section */}
        <section className="projectListSection w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center pb-5 justify-between">
            <div className="relative p-0 w-full">
              <Input
                onChange={handleSearchChange}
                placeholder="search project"
                className="40% px-9"
              />
              <MagnifyingGlassIcon className="absolute top-3 left-4" />
            </div>
          </div>

          <div className="space-y-5 min-h-[74vh]">
            {keyword
              ? project.searchProjects?.map((item, index) =>
                <ProjectCard item={item} key={item.id * index} />) : project.projects?.map((item) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectList;
