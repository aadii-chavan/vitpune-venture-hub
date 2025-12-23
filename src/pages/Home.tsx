import React, { useRef } from 'react';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';
import { PinContainer } from '@/components/ui/3d-pin';
import LaserFlow from '@/components/LaserFlow';
import img25 from '@/assets/25.png';
import esummit from '@/assets/25.png';
import CardSwap, { Card } from '@/components/CardSwap';
import Threads from '@/components/Threads';
import ScrollFloat from '@/components/ScrollFloat';
import ScrollReveal from '@/components/ScrollReveal';
import HeroSection from '@/components/Hero';
import MagazineBookSection from '@/components/MagazineBookSection';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {

  return (
    <>
    <Navbar></Navbar>
      {/* Hero Section */}
      <HeroSection />

      {/* Vision, Mission, Objectives */}
<section id="about" className="py-24 bg-transparent relative overflow-hidden">
  {/* Background */}
  <div
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
    }}
  >
    <Threads
      amplitude={4.3}
      distance={0.7}
      enableMouseInteraction={true}
    />
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
    
    {/* Header Section */}
    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white"
      >
        Vision, Mission & Objectives
      </ScrollFloat>

      <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto">
        What drives V-EDC: our long-term vision, our core mission, and the outcomes we pursue.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      
      {/* Vision Card */}
      <div className="relative group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
          <Target size={32} className="text-white/80" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h3>
        <p className="text-sm md:text-base leading-relaxed text-slate-400">
          To foster a vibrant entrepreneurial ecosystem at VIT Pune, empowering students to transform innovative ideas into impactful ventures.
        </p>
      </div>

      {/* Mission Card */}
      <div className="relative group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
          <Lightbulb size={32} className="text-white/80" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Mission</h3>
        <p className="text-sm md:text-base leading-relaxed text-slate-400">
          Providing mentorship, resources, and networking opportunities to nurture the next generation of entrepreneurs and business leaders.
        </p>
      </div>

      {/* Objectives Card */}
      <div className="relative group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
          <Users size={32} className="text-white/80" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Objectives</h3>
        <p className="text-sm md:text-base leading-relaxed text-slate-400">
          Building a community of innovators, facilitating skill development, and creating pathways for startup success through strategic initiatives.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Events & Campaigns */}
      <section id="events-campaigns" className="pt-0 pb-20 bg-black">
        <LaserFlowBoxExample />

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mt-10 md:mt-14">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.05}
              textClassName="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            >
              Events and Campaigns
            </ScrollFloat>
            <p className="mt-4 text-base md:text-lg text-slate-300/90">
              Discover our signature events and impactful campaigns designed to inspire entrepreneurship and innovation at VIT Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Magazines */}
      <MagazineBookSection />

      {/* Add CSS for Swiper Dots */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #888;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background-color: #fff;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

// LaserFlowBoxExample (No changes)
function LaserFlowBoxExample() {
  const revealImgRef = useRef<HTMLImageElement>(null); 

  return (
    <div
      style={{
        width: '100%',
        height: '75vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#060010',
        borderRadius: '0', 
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
        horizontalBeamOffset={0.00}
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
        width: '92%',
        height: '58%',
        backgroundColor: '#060010',
        borderRadius: '20px',
        border: '2px solid #4C56ED',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem',
        zIndex: 6
      }}>
        <img src={img25} alt="E-Summit 25" style={{ 
            maxWidth: '100%', 
            maxHeight: '90%', 
            borderRadius: '16px', 
            boxShadow: '0 4px 32px #4C56ED88', 
            border: '2px solid #4C56ED' 
        }} />
      </div>
      <img
        ref={revealImgRef}
        src={esummit}
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '120%',
          top: '-60%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.25,
          pointerEvents: 'none',
          // @ts-ignore
          '--mx': '-9999px',
          // @ts-ignore
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