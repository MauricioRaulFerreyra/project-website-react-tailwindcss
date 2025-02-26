import { FaAnglesRight } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export const QuickAccess = () => {
  return (
    <section className="flex w-full items-center justify-center bg-zinc-950 p-4">
      <div className="grid w-full grid-cols-1 gap-8 px-4 py-10 sm:px-10 md:grid-cols-2 md:gap-20 md:px-16 md:py-20">
        {/* First Card */}
        <div className="flex w-full items-center justify-between rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-10">
          {/*  */}
          <div className="z-20 space-y-8">
            <div className="space-y-3">
              <h6 className="text-lg font-normal text-neutral-300">
                Earn a Professional
              </h6>
              <h1 className="text-3xl font-bold tracking-wider text-sky-600 uppercase">
                Certificate
              </h1>
            </div>
            <Link
              to="/programs"
              className="group flex w-fit items-center gap-x-2 bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 bg-clip-text text-base font-semibold text-transparent duration-300 ease-in-out"
            >
              View Programs
              <FaAnglesRight
                className="bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 bg-clip-text pt-0.5 text-transparent duration-300 ease-in-out group-hover:translate-x-1"
                style={{ fill: "url(#gradient)" }}
              />
              <svg width="0" height="0" role="img" aria-label="title">
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#6366f1" }} />
                  <stop offset="50%" style={{ stopColor: "#0369a1" }} />
                  <stop offset="100%" style={{ stopColor: "#7e22ce" }} />
                </linearGradient>
              </svg>
            </Link>
          </div>
          {/* icon */}
          <div className="relative z-10 space-y-3">
            <LiaCertificateSolid className="-botton-12 md:botton-auto absolute -right-4 text-8xl text-amber-600 md:relative md:right-auto md:text-[10rem]" />
          </div>
        </div>
        {/* Second Card */}
        <div className="flex w-full items-center justify-between rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-10">
          {/*  */}
          <div className="z-20 space-y-8">
            <div className="space-y-3">
              <h6 className="text-lg font-normal text-neutral-300">
                Award Winning
              </h6>
              <h1 className="text-3xl font-bold tracking-wider text-sky-600 uppercase">
                Courses
              </h1>
            </div>
            <Link
              to="/programs"
              className="group flex w-fit items-center gap-x-2 bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 bg-clip-text text-base font-semibold text-transparent duration-300 ease-in-out"
            >
              Explore Programs
              <FaAnglesRight
                className="bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 bg-clip-text pt-0.5 text-transparent duration-300 ease-in-out group-hover:translate-x-1"
                style={{ fill: "url(#gradient)" }}
              />
              <svg width="0" height="0" role="img" aria-label="title">
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#6366f1" }} />
                  <stop offset="50%" style={{ stopColor: "#0369a1" }} />
                  <stop offset="100%" style={{ stopColor: "#7e22ce" }} />
                </linearGradient>
              </svg>
            </Link>
          </div>
          {/* icon */}
          <div className="relative z-10 space-y-3">
            <GiTrophyCup className="-botton-12 md:botton-auto absolute -right-4 text-8xl text-amber-600 md:relative md:right-auto md:text-[10rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};
