import { StatsCard } from "../../../components/stats/StatsCard";
import { statsData, type StatsSchema } from "../../../constants/statsData";

export const Stats = () => {
  return (
    <section className="flex w-full items-center justify-center bg-neutral-100 px-4 py-10 sm:px-10 md:px-16">
      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4 md:gap-10">
        {/* Make a stats card first */}
        {statsData?.map((stats: StatsSchema) => (
          <StatsCard key={stats.id} {...stats} />
        ))}
      </div>
    </section>
  );
};
