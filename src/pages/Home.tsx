import React from 'react';
import DarkVeil from '@/components/DarkVeil';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';
import { PinContainer } from '@/components/ui/3d-pin';
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Home: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' }
  ];

  return (
    <>
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* DarkVeil background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil speed={1.4} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 [&>*:last-child]:mb-0">
          <div className="flex flex-col items-center gap-4" />

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white/90 leading-tight">
            Nurturing innovation and fostering startups at VIT Pune
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed px-2">
            Inspire, Innovate, Incubate. Building the future of entrepreneurship through clear vision and actionable mission            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group relative inline-flex items-center justify-center rounded-xl font-semibold text-white transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:text-black w-full sm:w-auto"
            >
              <span className="relative z-[2] flex items-center gap-2 px-6 py-3 sm:px-7">
                <span>Join V-EDC</span>
                <span className="inline-block"><ArrowRight size={18} /></span>
              </span>
              <svg className="absolute inset-0 -z-0 rounded-[inherit]" width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" fill="transparent" />
                <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" className="transition-colors fill-black/70 group-hover:fill-white" />
                <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" className="animate-dash" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="px-6 py-3 sm:px-7 rounded-xl font-semibold text-white/90 bg-white/10 border border-white/10 hover:bg-white/15 transition-colors w-full sm:w-auto"
            >
              View Events
            </button>
          </div>

          <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0 relative left-1/2 -translate-x-1/2 w-screen">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={55}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              width="100vw"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Vision, Mission, Objectives */}
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Vision, Mission & Objectives
        </h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <PinContainer title="Our Vision" href="#about" containerClassName="mx-auto">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/80 w-[22rem] h-[16rem]">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-xs text-slate-400">Aim</div>
              </div>
              <div className="mt-4 flex items-center gap-2 font-heading text-2xl md:text-3xl font-bold text-slate-100">
                <Target size={22} />
                <span>Our Vision</span>
              </div>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300/90">
                To foster a vibrant entrepreneurial ecosystem at VIT Pune, empowering students to transform innovative ideas into impactful ventures.
              </p>
            </div>
          </PinContainer>

          <PinContainer title="Our Mission" href="#about" containerClassName="mx-auto">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/80 w-[22rem] h-[16rem]">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-sky-500 animate-pulse" />
                <div className="text-xs text-slate-400">Focus</div>
              </div>
              <div className="mt-4 flex items-center gap-2 font-heading text-2xl md:text-3xl font-bold text-slate-100">
                <Lightbulb size={22} />
                <span>Our Mission</span>
              </div>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300/90">
                Providing mentorship, resources, and networking opportunities to nurture the next generation of entrepreneurs and business leaders.
              </p>
            </div>
          </PinContainer>

          <PinContainer title="Our Objectives" href="#about" containerClassName="mx-auto">
            <div className="flex flex-col p-4 tracking-tight text-slate-100/80 w-[22rem] h-[16rem]">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-violet-500 animate-pulse" />
                <div className="text-xs text-slate-400">Outcome</div>
              </div>
              <div className="mt-4 flex items-center gap-2 font-heading text-2xl md:text-3xl font-bold text-slate-100">
                <Users size={22} />
                <span>Our Objectives</span>
              </div>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300/90">
                Building a community of innovators, facilitating skill development, and creating pathways for startup success through strategic initiatives.
              </p>
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
