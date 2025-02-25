import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  title: string;
  description?: string;
}

export const CategoryCard = ({
  icon,
  gradientFrom,
  gradientVia,
  gradientTo,
  title,
  description,
}: Props) => {
  return (
    <section
      className={`flex w-full flex-col items-center justify-center gap-8 rounded-2xl bg-gradient-to-tr hover:bg-gradient-to-tl ${gradientFrom} ${gradientVia} ${gradientTo} cursor-pointer px-10 py-12 transition-all duration-300 ease-in-out`}
    >
      <aside className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700">
        <span className="text-4xl font-bold text-neutral-50">{icon}</span>
      </aside>
      <aside className="w-full space-y-3 text-center">
        <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>
        <p className="line-clamp-3 text-center text-base text-ellipsis text-neutral-700">
          {description}
        </p>
      </aside>
    </section>
  );
};
