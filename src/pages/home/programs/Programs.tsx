import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  type PropsProgramsData,
  programsData,
} from "../../../constants/programsData";
import { ProgramsCard } from "../../../components/programs/ProgramsCard";

export const Programs = () => {
  return (
    <div className="w-full space-y-8 px-4 sm:px-10 md:px-15">
      {/* top section */}
      <header className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">
          Featured Programs
        </h2>
        <nav className="flex items-center gap-4">
          <Link
            to="/category"
            className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-800 duration-300 ease-in-out hover:text-sky-800"
          >
            View All <FaAnglesRight />
          </Link>
        </nav>
      </header>
      {/* programs section */}
      <div className="grid w-full grid-cols-1 gap-5 pb-6 md:grid-cols-3 md:gap-10">
        {/* Display the Data */}
        {programsData?.map((item: PropsProgramsData) => (
          <ProgramsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
