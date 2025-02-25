import { FaStar, FaTag, FaUserTie } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiBookOpenTextFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import type { PropsProgramsData } from "../../constants/programsData";

export const ProgramsCard = ({
  image,
  category,
  rating,
  title,
  lessons,
  students,
  duration,
  price,
}: PropsProgramsData) => {
  return (
    <div className="w-full space-y-2 overflow-hidden rounded-xl border border-neutral-200">
      <img
        src={image}
        alt={title}
        className="aspect-[16/10] w-full object-cover object-center"
      />
      <div className="space-y-5 p-3 md:p-4">
        {/* category, rating and save to favourite section */}
        <div className="flex w-full items-center justify-between">
          <p className="flex w-fit items-center gap-x-1.5 rounded-full bg-sky-800/10 px-3 py-1 text-sm text-sky-800">
            <FaTag size={15} className="text-sky-700" />
            {category}
          </p>
          <div className="flex items-center gap-x-3">
            <p className="flex items-center gap-x-1 rounded-full border border-yellow-200 px-3 py-1 text-sm text-yellow-500">
              <FaStar />
              {rating}
            </p>
            <button
              type="button"
              className="flex h-8 w-8 cursor-pointer items-center justify-center"
            >
              <IoMdHeartEmpty size={24} />
            </button>
          </div>
        </div>
        {/* Title section */}
        <Link
          to="/program/detail"
          className="line-clamp-2 text-xl font-semibold text-ellipsis text-neutral-950"
        >
          {title}
        </Link>
        {/* lessions, students and duration */}
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          {/* lessions and students */}
          <div className="flex items-center gap-x-3">
            <p className="flex items-center gap-x-1.5 text-sm font-medium text-neutral-800">
              <PiBookOpenTextFill size={16} className="text-neutral-500" />
              {lessons}
            </p>
            <div className="w-1-h-1 rounded-full bg-neutral-400">{/*  */}</div>
            <p className="flex items-center gap-x-1.5 text-sm font-medium text-neutral-800">
              <FaUserTie size={16} className="text-neutral-500" />
              {students}
            </p>
          </div>
          {/* duration */}
          <p className="flex items-center gap-x-1.5 text-sm font-medium text-neutral-800">
            <FiClock size={16} className="text-neutral-500" />
            {duration}
          </p>
        </div>
        {/* seperator */}
        <div className="h-px w-full bg-neutral-200">{/*  */}</div>
        {/* price and button */}
        <div className="flex w-full items-center justify-between">
          <p className="flex items-center gap-x-1.5 text-xl font-bold text-neutral-900">
            {price}
            <Link
              to="/programs/enroll-programs-title"
              className="flex w-fit items-center justify-center gap-2 text-sm font-medium text-sky-900 transition-all duration-300 ease-in-out hover:text-sky-800"
            >
              Enroll Now <FaAnglesRight />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
