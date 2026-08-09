const stats = [
  { value: "1,240+", label: "solutions we offer" },
  { value: "180+", label: "Projects delivered" },
  { value: "24/7", label: "Field response" },
  { value: "14", label: "countries we serve" },
];

export function StatsBand() {
  return (
    <div className="bg-brand-ink-2">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-y divide-white/[0.09] sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-10 sm:px-8">
            <div className="font-mono text-[32px] font-medium text-brand-cyan sm:text-[38px]">
              {stat.value}
            </div>
            <div className="mt-2 text-[13px] text-brand-steel">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
