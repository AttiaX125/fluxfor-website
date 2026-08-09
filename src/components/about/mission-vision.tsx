import { Compass, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="border-t border-border-c px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
        <div className="flex gap-5">
          <Compass size={30} strokeWidth={1.6} className="mt-0.5 flex-none text-brand-blue" />
          <div>
            <h2 className="text-[19px] font-semibold text-text-primary">Our Mission</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">
              To provide integrated engineering solutions that empower our clients
              and strengthen the critical infrastructure communities rely on.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <Eye size={30} strokeWidth={1.6} className="mt-0.5 flex-none text-brand-blue" />
          <div>
            <h2 className="text-[19px] font-semibold text-text-primary">Our Vision</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">
              To be the most trusted engineering partner for critical infrastructure
              across every market we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
