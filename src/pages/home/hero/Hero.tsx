import HeroImg from "../../../assets/hero-1.png";

export const Hero = () => {
  return (
    <section className="from-inddigo-500/20 flex h-auto w-full items-end justify-center bg-gradient-to-tr via-sky-700/20 via-20% to-purple-700/30 px-4 pt-[8ch] pb-8 sm:px-10 md:min-h-screen md:px-16 md:pb-2">
      <section className="flex w-full flex-1 flex-col-reverse flex-wrap items-center justify-between gap-4 md:flex-row md:flex-nowrap md:gap-16">
        {/* Hero Content */}
        <section className="h-auto w-full space-y-6 md:w-[45%] md:space-y-8">
          <aside className="space-y-2">
            <p className="text-lg font-medium text-neutral-600 md:text-2xl">
              The Leader in Online Learning
            </p>
            <h1 className="bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 bg-clip-text text-5xl leading-[1.32] font-bold text-transparent md:text-[5rem]">
              Join Today & Start Learning
            </h1>
          </aside>
          <p className="pr-0 text-lg font-normal text-neutral-800 md:pr-16">
            The best place to discover new learning resources, books, and
            courses.
          </p>
          <aside className="flex w-full items-center gap-6">
            <button
              type="button"
              className="w-1/2 cursor-pointer rounded-full bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 px-8 py-3 font-semibold text-neutral-50 duration-300 ease-in-out md:w-fit"
            >
              Get Started
            </button>
            <button
              type="button"
              className="w-1/2 cursor-pointer rounded-full border border-neutral-800 px-8 py-3 font-semibold text-neutral-800 duration-300 ease-in-out md:w-fit"
            >
              Learn More
            </button>
          </aside>
        </section>
        {/* Hero Image */}
        <section className="flex aspect-square w-full items-end justify-end md:w-[50%]">
          <img
            src={HeroImg}
            alt="hero"
            className="h-full w-full object-contain"
          />
        </section>
      </section>
    </section>
  );
};
