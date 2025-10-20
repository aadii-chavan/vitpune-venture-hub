import React from 'react';
import DarkVeil from '@/components/DarkVeil';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
              <Target size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">Our Vision</h3>
            <p className="text-white/70 leading-relaxed">
              To foster a vibrant entrepreneurial ecosystem at VIT Pune, empowering students to transform innovative ideas into impactful ventures.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
              <Lightbulb size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-white/70 leading-relaxed">
              Providing mentorship, resources, and networking opportunities to nurture the next generation of entrepreneurs and business leaders.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">Our Objectives</h3>
            <p className="text-white/70 leading-relaxed">
              Building a community of innovators, facilitating skill development, and creating pathways for startup success through strategic initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
