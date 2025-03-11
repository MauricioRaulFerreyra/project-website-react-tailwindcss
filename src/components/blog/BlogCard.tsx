import { Link } from "react-router-dom";

interface Props {
  blogURL: string;
  img: string;
  title: string;
  tag: string;
}

export const BlogCard = ({ blogURL, img, title, tag }: Props) => {
  return (
    <Link
      to={blogURL}
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl duration-300 ease-in-out"
    >
      <img
        src={img}
        alt={title}
        className="h-full w-full object-cover object-center duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-4"
      />
      <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-start bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent p-4">
        <div className="space-y-2">
          <h1 className="line-clamp-2 text-lg font-semibold text-neutral-50">
            {title}
          </h1>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full p-4">
        <p className="inline-block w-fit rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-sm font-normal text-sky-500 backdrop-blur-md">
          {tag}
        </p>
      </div>
    </Link>
  );
};
