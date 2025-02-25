import { GrResources } from "react-icons/gr";

export type StatsSchema = {
  id: number,
  icon: typeof GrResources,
  bgColor: string,
  borderColor: string,
  count: string,
  iconColor: string,
  description: string,
};

export const statsData: StatsSchema[] = [
  {
    id: 1,
    icon: GrResources,
    bgColor: "bg-sky-100/30",
    borderColor: "border-sky-300/60",
    count: "100+",
    iconColor: "text-sky-600",
    description: "Online Courses",
  },
  {
    id: 2,
    icon: GrResources,
    bgColor: "bg-purple-100/30",
    borderColor: "border-purple-300/60",
    count: "200+",
    iconColor: "text-purple-600",
    description: "Expert Tutors",
  },
  {
    id: 3,
    icon: GrResources,
    bgColor: "bg-indigo-100/30",
    borderColor: "border-indigo-300/60",
    count: "10k+",
    iconColor: "text-indigo-600",
    description: "Students Enrolled",
  },
  {
    id: 4,
    icon: GrResources,
    bgColor: "bg-orange-100/30",
    borderColor: "border-orange-300/60",
    count: "120+",
    iconColor: "text-orange-600",
    description: "Recorded Videos",
  },
];
