import { Link } from "react-router-dom";
import { BlogCard } from "../../../components/blog/BlogCard";
import { blogData } from "../../../constants/blogData";
import { FaAnglesRight } from "react-icons/fa6";

export const Blog = () => {
  return (
    <section className="w-full space-y-8 px-4 pt-4 sm:px-10 md:px-16 md:pt-6">
      {/* top section */}
      <header className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-800">Latest Blogs</h2>
        <nav className="flex items-center gap-4">
          <Link
            to="/blog"
            className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-800 duration-300 ease-in-out hover:text-sky-800"
          >
            View All <FaAnglesRight />
          </Link>
        </nav>
      </header>
      {/* blogs section */}
      <div className="grid w-full grid-cols-1 gap-5 gap-x-5 gap-y-8 pb-6 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
        {/* Display the Data */}
        {blogData?.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
