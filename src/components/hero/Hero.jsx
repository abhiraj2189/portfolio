import BackgroundGlow from "./BackgroundGlow";
import FloatingPhoto from "./FloatingPhoto";
import GlassCard from "./GlassCard";
import SocialSidebar from "./SocialSidebar";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center">
      <BackgroundGlow />
      <SocialSidebar />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center px-10">
        <FloatingPhoto />
        <GlassCard />
      </div>
    </section>
  );
}