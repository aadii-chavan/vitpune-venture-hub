import React from 'react';
import DarkVeil from '@/components/DarkVeil';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';
import { PinContainer } from '@/components/ui/3d-pin';
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LaserFlow from '@/components/LaserFlow';
import { useRef } from 'react';
import img25 from '@/assets/25.png';
import glimpse3 from '@/assets/glimpse3.jpg';
import CardSwap, { Card } from '@/components/CardSwap';

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
        <p className="mt-4 text-base md:text-lg text-slate-300/90">
          What drives V-EDC: our long-term vision, our core mission, and the outcomes we pursue.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <PinContainer title="Our Vision" href="#about" containerClassName="mx-auto">
            <div className="flex flex-col gap-4 p-4 tracking-tight text-slate-100/80 w-[22rem] h-[16rem]">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Target size={20} className="text-white/80" />
              </div>
              <div className="mt-1 font-heading text-2xl md:text-3xl font-extrabold text-slate-100">
                Our Vision
              </div>
              <p className="text-sm md:text-base leading-relaxed text-slate-300/90">
                To foster a vibrant entrepreneurial ecosystem at VIT Pune, empowering students to transform innovative ideas into impactful ventures.
              </p>
            </div>
          </PinContainer>

          <PinContainer title="Our Mission" href="#about" containerClassName="mx-auto">
            <div className="flex flex-col gap-4 p-4 tracking-tight text-slate-100/80 w-[22rem] h-[16rem]">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Lightbulb size={20} className="text-white/80" />
              </div>
              <div className="mt-1 font-heading text-2xl md:text-3xl font-extrabold text-slate-100">
                Our Mission
              </div>
              <p className="text-sm md:text-base leading-relaxed text-slate-300/90">
                Providing mentorship, resources, and networking opportunities to nurture the next generation of entrepreneurs and business leaders.
              </p>
            </div>
          </PinContainer>

          <PinContainer title="Our Objectives" href="#about" containerClassName="mx-auto">
            <div className="flex flex-col gap-4 p-4 tracking-tight text-slate-100/80 w-[22rem] h-[16rem]">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Users size={20} className="text-white/80" />
              </div>
              <div className="mt-1 font-heading text-2xl md:text-3xl font-extrabold text-slate-100">
                Our Objectives
              </div>
              <p className="text-sm md:text-base leading-relaxed text-slate-300/90">
                Building a community of innovators, facilitating skill development, and creating pathways for startup success through strategic initiatives.
              </p>
            </div>
          </PinContainer>
        </div>
      </div>
    </section>

    {/* Events and Campaigns */}
    <section id="events-campaigns" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Events and Campaigns
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300/90">
            Discover our signature events and impactful campaigns designed to inspire entrepreneurship and innovation at VIT Pune.
          </p>
        </div>
        <LaserFlowBoxExample />
      </div>
    </section>

    {/* V-EDC Magazines */}
    <section id="vedc-magazines" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            V-EDC Magazines
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300/90">
            Explore our collection of entrepreneurship magazines and newsletters!
          </p>
        </div>
        <div style={{ height: '600px', position: 'relative' }}>
          <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
            <Card>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-100 mb-2">Issue 01</h3>
              <p className="text-slate-300/90">Your content here</p>
            </Card>
            <Card>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-100 mb-2">Issue 02</h3>
              <p className="text-slate-300/90">Your content here</p>
            </Card>
            <Card>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-100 mb-2">Issue 03</h3>
              <p className="text-slate-300/90">Your content here</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
    </>
  );
};

// LaserFlowBoxExample: Custom interactive effect revealing an image
function LaserFlowBoxExample() {
  const revealImgRef = useRef(null);

  return (
    <div 
      style={{ 
        width: '100vw',
        height: '800px', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#060010',
        borderRadius: '0', // remove rounded corners for edge-to-edge
        margin: 0,
        left: '50%',
        right: '50%',
        transform: 'translateX(-50%)',
        marginBottom: '2rem',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#4C56ED"
        horizontalSizing={0.51}
        verticalSizing={5}
        wispDensity={5}
        wispSpeed={4.5}
        wispIntensity={17.2}
        flowSpeed={0.55}
        flowStrength={0.26}
        fogIntensity={0.57}
        fogScale={0.42}
        fogFallSpeed={0.94}
        decay={1.98}
        falloffStart={0.68}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '86%',
        height: '60%',
        backgroundColor: '#060010',
        borderRadius: '20px',
        border: '2px solid #4C56ED',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        zIndex: 6
      }}>
        {/* Replacing previous text content with image */}
        <img src={img25} alt="E-Summit 25" style={{maxWidth: '100%', maxHeight: '90%', borderRadius: '16px', boxShadow: '0 4px 32px #4C56ED88', border: '2px solid #4C56ED'}} />
      </div>
      <img
        ref={revealImgRef}
        src={glimpse3}
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore Allow CSS custom properties
          '--mx': '-9999px',
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore Allow CSS custom properties
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        } as React.CSSProperties}
      />
    </div>
  );
}

export default Home;
