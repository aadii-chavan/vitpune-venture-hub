import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";

const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden text-center"
      onMouseMove={handleMouseMove}
    >
      {/* 🔮 DarkVeil Background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil speed={1.4} />
      </div>

      {/* 🌟 Animated gradient orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      {/* 💫 Cursor glow */}
      <div
        className="absolute z-[2] pointer-events-none"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ✨ Main Centered Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center max-w-5xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Title + Tagline */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wide animate-gradient bg-[length:200%_auto]">
            Inspire • Innovate • Empower
          </h2>
          <div className="w-3/4 mx-auto h-1 mt-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Nurturing Innovation
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            And Fostering Startups
          </span>
          <br />
          <span className="text-white/90">at VIT Pune</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <button
            onClick={() => scrollToSection("#projects")}
            className="group relative inline-flex items-center justify-center rounded-xl font-semibold text-white transition-all duration-300 shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.5)] hover:text-black hover:scale-105 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-[2] flex items-center gap-2 px-8 py-4 sm:px-9">
              <span className="font-bold">Join V-EDC</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <svg
              className="absolute inset-0 -z-0 rounded-[inherit]"
              width="100%"
              height="100%"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <rect
                x="1.5"
                y="1.5"
                width="97"
                height="37"
                rx="10"
                ry="10"
                className="transition-all duration-300 fill-purple-600 group-hover:fill-white"
              />
              <rect
                x="1.5"
                y="1.5"
                width="97"
                height="37"
                rx="10"
                ry="10"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
                className="animate-dash"
              />
            </svg>
          </button>

          <button
            onClick={() => scrollToSection("#about")}
            className="group px-8 py-4 sm:px-9 rounded-xl font-semibold text-white/90 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              View Events
              <span className="group-hover:rotate-45 transition-transform">
                ✨
              </span>
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(5px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-dash {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 20s linear infinite;
        }

        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;