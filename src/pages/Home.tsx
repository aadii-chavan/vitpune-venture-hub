import React, { useRef } from 'react';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';
import { PinContainer } from '@/components/ui/3d-pin';
import LaserFlow from '@/components/LaserFlow';
import img25 from '@/assets/25.png';
import esummit from '@/assets/esummit.png';
import img2 from '@/assets/2.png';
import mag5 from '@/assets/mag_5.jpeg';
import mag6 from '@/assets/mag_6.jpg';
import CardSwap, { Card } from '@/components/CardSwap';
import Threads from '@/components/Threads';
import ScrollFloat from '@/components/ScrollFloat';
import ScrollReveal from '@/components/ScrollReveal';
import HeroSection from '@/components/Hero';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home: React.FC = () => {

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Vision, Mission, Objectives */}
      <section id="about" className="py-20 bg-transparent relative">
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <Threads amplitude={4.3} distance={0.7} enableMouseInteraction={true} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textClassName="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            >
              Vision, Mission & Objectives
            </ScrollFloat>
            <p className="mt-4 text-base md:text-lg text-slate-300/90">
              What drives V-EDC: our long-term vision, our core mission, and the outcomes we pursue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <PinContainer title="Our Vision" href="#about" containerClassName="mx-auto">
              {/* ✅ FIX: Added w-full max-w-[22rem] */}
              <div className="flex flex-col gap-3 p-4 tracking-tight text-slate-100/80 w-full max-w-[22rem] h-[13rem]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Target size={20} className="text-white/80" />
                  </div>
                  <div className="font-heading text-2xl md:text-3xl font-extrabold text-slate-100">
                    Our Vision
                  </div>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-slate-300/90">
                  To foster a vibrant entrepreneurial ecosystem at VIT Pune, empowering students to transform innovative ideas into impactful ventures.
                </p>
              </div>
            </PinContainer>

            <PinContainer title="Our Mission" href="#about" containerClassName="mx-auto">
              {/* ✅ FIX: Added w-full max-w-[22rem] */}
              <div className="flex flex-col gap-3 p-4 tracking-tight text-slate-100/80 w-full max-w-[22rem] h-[13rem]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Lightbulb size={20} className="text-white/80" />
                  </div>
                  <div className="font-heading text-2xl md:text-3xl font-extrabold text-slate-100">
                    Our Mission
                  </div>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-slate-300/90">
                  Providing mentorship, resources, and networking opportunities to nurture the next generation of entrepreneurs and business leaders.
                </p>
              </div>
            </PinContainer>

            <PinContainer title="Our Objectives" href="#about" containerClassName="mx-auto">
              {/* ✅ FIX: Added w-full max-w-[22rem] */}
              <div className="flex flex-col gap-3 p-4 tracking-tight text-slate-100/80 w-full max-w-[22rem] h-[13rem]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Users size={20} className="text-white/80" />
                  </div>
                  <div className="font-heading text-2xl md:text-3xl font-extrabold text-slate-100">
                    Our Objectives
                  </div>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-slate-300/90">
                  Building a community of innovators, facilitating skill development, and creating pathways for startup success through strategic initiatives.
                </p>
              </div>
            </PinContainer>
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
      <section id="vedc-magazines" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.05}
              textClassName="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            >
              V-EDC Magazines
            </ScrollFloat>
            <p className="mt-4 text-base md:text-lg text-slate-300/90">
              Explore our collection of entrepreneurship magazines and newsletters!
            </p>
          </div>

          {/* Mobile Slider (lg:hidden) */}
          <div className="lg:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              style={{ paddingBottom: '40px' }} // Space for pagination dots
            >
              {/* Slide 1: Text Content */}
              <SwiperSlide>
                <div className="relative z-0 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 md:p-8 lg:p-10 shadow-[0_12px_28px_rgb(0_0_0/0.35)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/10 via-indigo-500/5 to-emerald-500/10 pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      <span className="size-2 rounded-full bg-violet-500" />
                      Publications
                    </div>
                    <h3 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      Curated insights from campus innovators
                    </h3>
                    <div className="mt-3">
                      <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                        textClassName="text-sm text-slate-300/90 leading-relaxed"
                      >
                        Each issue features founder stories...
                      </ScrollReveal>
                    </div>
                    <div className="mt-5">
                      <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                        textClassName="text-slate-300/90"
                      >
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <ArrowRight className="mt-0.5 text-violet-400" size={18} />
                            Actionable articles, interviews, and event recaps
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="mt-0.5 text-violet-400" size={18} />
                            Designed for clarity with a beautiful reading experience
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="mt-0.5 text-violet-400" size={18} />
                            Available as downloadable PDFs and web issues
                          </li>
                        </ul>
                      </ScrollReveal>
                    </div>
                    <div className="mt-6">
                      <a href="#" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition ...">
                        Explore Issues
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2: CardSwap Visual */}
              <SwiperSlide>
                {/* Set a consistent height for mobile */}
                <div className="relative z-30 h-[500px] pt-12">
                  <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
                    <Card>
                      <div className="relative w-full h-full">
                        <img src={img2} alt="Magazine Issue 1" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-heading text-xl font-extrabold text-white mb-1">Issue 01</h3>
                          <p className="text-white/90 text-sm">Innovation Spotlight</p>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <div className="relative w-full h-full">
                        <img src={mag5} alt="Magazine Issue 2" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-heading text-xl font-extrabold text-white mb-1">Issue 02</h3>
                          <p className="text-white/90 text-sm">Startup Stories</p>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <div className="relative w-full h-full">
                        <img src={esummit} alt="Magazine Issue 3" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-heading text-xl font-extrabold text-white mb-1">Issue 03</h3>
                          <p className="text-white/90 text-sm">E-Summit Special</p>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <div className="relative w-full h-full">
                        <img src={mag6} alt="Magazine Issue 4" className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-heading text-xl font-extrabold text-white mb-1">Issue 04</h3>
                          <p className="text-white/90 text-sm">Community Highlights</p>
                        </div>
                      </div>
                    </Card>
                  </CardSwap>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Desktop Grid (hidden lg:grid) */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 xl:gap-8 items-center">
            {/* This is your original code, just with `hidden lg:grid` added */}
            <div className="order-2 lg:order-1 lg:mr-[-28px] xl:mr-[-40px]">
              <div className="relative z-0 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 md:p-8 lg:p-10 shadow-[0_12px_28px_rgb(0_0_0/0.35)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/10 via-indigo-500/5 to-emerald-500/10 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    <span className="size-2 rounded-full bg-violet-500" />
                    Publications
                  </div>
                  <h3 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Curated insights from campus innovators
                  </h3>
                  <div className="mt-3">
                    <ScrollReveal
                      baseOpacity={0}
                      enableBlur={true}
                      baseRotation={5}
                      blurStrength={10}
                      textClassName="text-sm text-slate-300/90 leading-relaxed"
                    >
                      Each issue features founder stories, market trends, event highlights, and practical playbooks crafted by the V-EDC community. Stay inspired and up to date with what's shaping the next wave of entrepreneurship at VIT Pune.
                    </ScrollReveal>
                  </div>
                  <div className="mt-5">
                    <ScrollReveal
                      baseOpacity={0}
                      enableBlur={true}
                      baseRotation={5}
                      blurStrength={10}
                      textClassName="text-slate-300/90"
                    >
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <ArrowRight className="mt-0.5 text-violet-400" size={18} />
                          Actionable articles, interviews, and event recaps
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="mt-0.5 text-violet-400" size={18} />
                          Designed for clarity with a beautiful reading.
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="mt-0.5 text-violet-400" size={18} />
                          Available as downloadable PDFs and web issues
                        </li>
                      </ul>
                    </ScrollReveal>
                  </div>
                  <div className="mt-6">
                    <a href="#" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-violet-400/60">
                      Explore Issues
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CardSwap Showcase (Original) */}
            <div className="order-1 lg:order-2 lg:ml-2">
              <div className="relative z-30 h-[440px] md:h-[520px] lg:h-[600px] pt-24 md:pt-0 md:-mt-8 lg:-mt-16 xl:-mt-20">
                <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
                  <Card>
                    <div className="relative w-full h-full">
                      <img src={img2} alt="Magazine Issue 1" className="w-full h-full object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl font-extrabold text-white mb-1">Issue 01</h3>
                        <p className="text-white/90 text-sm">Innovation Spotlight</p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="relative w-full h-full">
                      <img src={mag5} alt="Magazine Issue 2" className="w-full h-full object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl font-extrabold text-white mb-1">Issue 02</h3>
                        <p className="text-white/90 text-sm">Startup Stories</p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="relative w-full h-full">
                      <img src={esummit} alt="Magazine Issue 3" className="w-full h-full object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl font-extrabold text-white mb-1">Issue 03</h3>
                        <p className="text-white/90 text-sm">E-Summit Special</p>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="relative w-full h-full">
                      <img src={mag6} alt="Magazine Issue 4" className="w-full h-full object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl font-extrabold text-white mb-1">Issue 04</h3>
                        <p className="text-white/90 text-sm">Community Highlights</p>
                      </div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>

        </div>
      </section>

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