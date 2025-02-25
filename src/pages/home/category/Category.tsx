import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../../components/category/CategoryCard";
import { FaReact } from "react-icons/fa";

export const Category = () => {
  return (
    <section className="w-full space-y-8 px-4 pb-4 sm:px-10 md:px-16 md:pt-4 md:pb-8">
      {/* top section */}
      <header className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">Top Categories</h2>
        <nav className="flex items-center gap-4">
          <Link
            to="/category"
            className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-800 duration-300 ease-in-out hover:text-sky-800"
          >
            View All <FaAnglesRight />
          </Link>
        </nav>
      </header>
      {/* category section */}
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
        {/* Make a category card first */}
        <CategoryCard
          icon={<FaReact />}
          gradientFrom={"from-indigo-500/20"}
          gradientVia={"via-sky-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"React JS"}
          description={
            "Explore the world of mobile app development with the best resources and courses available."
          }
        />
        <CategoryCard
          icon={<FaReact />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-purple-700/20 via-20%"}
          gradientTo={"to-indigo-700/30"}
          title={"Mobile Development"}
          description={
            "Explore the world of mobile app development with the best resources and courses available."
          }
        />
        <CategoryCard
          icon={<FaReact />}
          gradientFrom={"from-pink-500/20"}
          gradientVia={"via-indigo-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"Web Development"}
          description={
            "Explore the world of mobile app development with the best resources and courses available."
          }
        />
        <CategoryCard
          icon={<FaReact />}
          gradientFrom={"from-indigo-500/20"}
          gradientVia={"via-sky-700/20 via-20%"}
          gradientTo={"to-purple-700/30"}
          title={"Artificial Intelligence"}
          description={
            "Explore the world of mobile app development with the best resources and courses available."
          }
        />
      </div>
    </section>
  );
};
