import { PageTopBanner } from "../../components/pagetop/PageTopBanner";
import { ProgramsCard } from "../../components/programs/ProgramsCard";
import { programsData } from "../../constants/programsData";

export const Programs = () => {
  return (
    <section className="min-h-screen w-full flex-col space-y-16 pb-16">
      {/* Page Top banner section */}
      <PageTopBanner pageTitle="Programs" />
      {/* Programs content */}
      <div className="w-full space-y-8 px-4 sm:px-10 md:px-16">
        {/* Programs search and filter section */}
        <div className="flex w-full items-center gap-6">
          {/* search section */}
          <input
            type="text"
            placeholder="Search programs"
            className="h-12 w-full max-w-sm rounded-lg border border-neutral-300 bg-transparent px-3 duration-300 ease-in-out outline-none focus:border-sky-500 focus:bg-sky-500/5"
          />
          {/* Filter or sort section */}
          <select className="h-12 w-fit max-w-sm rounded-lg border border-neutral-300 bg-transparent px-3 duration-300 ease-in-out outline-none focus:border-sky-500 focus:bg-sky-500/5">
            <option value="all">All Categories</option>
            <option value="web">Web Development</option>
            <option value="data">Data Science</option>
            <option value="mobile">Mobile Development</option>
            <option value="design">Design</option>
          </select>
        </div>
        {/* Programs data */}
        <div className="grid w-full grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
          {/* Display the Data */}
          {programsData?.map((item) => (
            <ProgramsCard key={item.id} {...item} />
          ))}
        </div>
        {/* Load data */}
        <div className="flex w-full items-center justify-center">
          <button
            type="button"
            className="w-fit cursor-pointer rounded-full border border-sky-800 px-8 py-3 font-semibold text-sky-800 duration-300 ease-in-out"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};
