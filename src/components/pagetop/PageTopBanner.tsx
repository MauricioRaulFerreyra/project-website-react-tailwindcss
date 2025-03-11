import { useEffect } from "react";
import { BreadCrumb } from "../breadcrumb/BreadCrumb";

interface Props {
  pageTitle: string;
}

export const PageTopBanner = ({ pageTitle }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative flex aspect-auto w-full flex-col justify-center bg-[url('/src/assets/page-top-bg.png')] bg-left bg-no-repeat px-4 pt-28 sm:px-10 md:aspect-[16/4] md:px-16 md:pt-16 md:pb-0">
      {/* overlay */}
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-zinc-50 via-zinc-100/40 to-zinc-950/60 opacity-50">
        {/*  */}
      </div>
      {/* page top content */}
      <div className="relative z-20 space-y-3 py-3">
        <h1 className="text-4xl font-bold text-zinc-50">{pageTitle}</h1>
        {/* Breadcrumb */}
        <BreadCrumb />
      </div>
    </section>
  );
};
