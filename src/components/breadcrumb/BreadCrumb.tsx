import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const BreadCrumb = () => {
  const location = useLocation();

  const pathname = location.pathname.split("/").filter((x) => x);

  // Making a dinamic breadcrumb using the url or routes or pathname or params ...
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    ...pathname.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      link: `/${pathname.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <section className="flex w-fit items-center gap-x-2">
      {breadcrumbPaths.map((path, index) => {
        const isLast = index === breadcrumbPaths.length - 1;
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Fragment key={index}>
            {isLast ? (
              <p className="text-sm font-normal text-zinc-400 md:text-base">
                {path.name}
              </p>
            ) : (
              <>
                <Link
                  to={path.link}
                  className="text-sm font-normal text-zinc-300 hover:text-zinc-100 md:text-base"
                >
                  {path.name}
                </Link>
                <span className="ml-2 text-sm font-normal text-zinc-200 md:text-base">
                  /
                </span>
              </>
            )}
          </Fragment>
        );
      })}
    </section>
  );
};
