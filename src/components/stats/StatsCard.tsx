import type { GrResources } from "react-icons/gr";

export interface Props {
  icon: typeof GrResources;
  bgColor: string;
  borderColor: string;
  count?: string;
  iconColor: string;
  description?: string;
}

export const StatsCard = ({
  icon: Icon,
  bgColor,
  borderColor,
  count,
  iconColor,
  description,
}: Props) => {
  return (
    <section
      className={`w-full rounded-xl border px-3 py-4 md:px-6 md:py-6 ${bgColor} ${borderColor}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-start">
        <div
          className={`h-14 w-14 ${bgColor} border ${borderColor} flex items-center justify-center rounded-xl`}
        >
          <span className={`text-3xl font-bold ${iconColor}`}>
            <Icon />
          </span>
        </div>

        <div className="flex flex-col items-center space-y-0.5 text-center md:items-start md:text-start">
          <h3 className="text-center text-2xl font-bold text-neutral-800 md:text-start">
            {count}
          </h3>
          <p className="text-base text-neutral-500">{description}</p>
        </div>
      </div>
    </section>
  );
};
