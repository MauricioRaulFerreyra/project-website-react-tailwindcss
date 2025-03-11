import { useEffect } from "react";
import { Hero } from "./hero/Hero";
import { Stats } from "./stats/Stats";
import { Category } from "./category/Category";
import { Programs } from "./programs/Programs";
import { QuickAccess } from "./quickaccess/QuickAccess";
import { Blog } from "./blog/BLog";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <Hero />
      {/* Stats Section */}
      <Stats />
      {/* Category Section */}
      <Category />
      {/* Programs Section */}
      <Programs />
      {/* Quick Access Section */}
      <QuickAccess />
      {/* Blog Section */}
      <Blog />
    </main>
  );
};
