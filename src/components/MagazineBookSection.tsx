import React, { useState } from 'react';
import img2 from '@/assets/2.png';
import mag5 from '@/assets/mag_5.jpeg';
import mag6 from '@/assets/mag_6.jpg';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder images - replace with your actual imports
const magazineImages = [
  img2,
  mag5,
  mag6,
];

const magazines = [
  { id: 1, title: 'Issue 01', subtitle: 'Innovation Spotlight', img: magazineImages[0] },
  { id: 2, title: 'Issue 02', subtitle: 'Startup Stories', img: magazineImages[1] },
  { id: 3, title: 'Issue 03', subtitle: 'E-Summit Special', img: magazineImages[2] },
];

const MagazineBookSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextPage = () => {
    if (currentPage < magazines.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <section id="vedc-magazines" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            V-EDC Magazines
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300/90">
            Explore our collection of entrepreneurship magazines and newsletters!
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {magazines.map((mag) => (
                  <div key={mag.id} className="w-full flex-shrink-0 px-4">
                    <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 shadow-[0_12px_28px_rgb(0_0_0/0.35)]">
                      <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={mag.img} 
                          alt={mag.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-heading text-2xl font-extrabold text-white mb-1">
                            {mag.title}
                          </h3>
                          <p className="text-white/90 text-sm">{mag.subtitle}</p>
                        </div>
                      </div>
                      <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition">
                        Read Magazine
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {magazines.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentPage 
                      ? 'bg-violet-500 w-8' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Book View */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto perspective-[2000px]">
            {/* Book Container */}
            <div className="relative h-[700px] flex items-center justify-center">
              {/* Left Page (Info) */}
              <div className="absolute left-0 w-1/2 h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-l-3xl border-l border-t border-b border-white/10 shadow-2xl p-12 flex flex-col justify-between">
                <div className="absolute inset-0 rounded-l-3xl bg-gradient-to-tr from-violet-500/10 via-indigo-500/5 to-emerald-500/10 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-6">
                    <span className="size-2 rounded-full bg-violet-500" />
                    Publications
                  </div>
                  
                  <h3 className="font-heading text-4xl font-extrabold text-white tracking-tight mb-4">
                    Curated insights from campus innovators
                  </h3>
                  
                  <p className="text-slate-300/90 leading-relaxed mb-6">
                    Each issue features founder stories, market trends, event highlights, and practical playbooks crafted by the V-EDC community. Stay inspired and up to date with what's shaping the next wave of entrepreneurship at VIT Pune.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-0.5 text-violet-400 flex-shrink-0" size={18} />
                      <span className="text-slate-300/90">Actionable articles, interviews, and event recaps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-0.5 text-violet-400 flex-shrink-0" size={18} />
                      <span className="text-slate-300/90">Designed for clarity with a beautiful reading experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-0.5 text-violet-400 flex-shrink-0" size={18} />
                      <span className="text-slate-300/90">Available as downloadable PDFs and web issues</span>
                    </li>
                  </ul>
                </div>

                <div className="relative z-10">
                  <div className="text-slate-400 text-sm mb-2">
                    Page {currentPage + 1} of {magazines.length}
                  </div>
                </div>
              </div>

              {/* Right Page (Magazine Cover) with Flip Effect */}
              <div className="absolute right-0 w-1/2 h-[600px] preserve-3d">
                <div 
                  className={`relative w-full h-full transition-transform duration-600 ease-in-out transform-style-preserve-3d ${
                    isFlipping ? 'animate-page-flip' : ''
                  }`}
                >
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900 rounded-r-3xl border-r border-t border-b border-white/10 shadow-2xl overflow-hidden">
                    <div className="relative w-full h-full p-8">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <img 
                          src={magazines[currentPage].img}
                          alt={magazines[currentPage].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                          <h3 className="font-heading text-3xl font-extrabold text-white mb-2">
                            {magazines[currentPage].title}
                          </h3>
                          <p className="text-white/90 text-lg">{magazines[currentPage].subtitle}</p>
                          <button className="mt-6 group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition shadow-lg">
                            Read Now
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Spine Shadow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[600px] bg-gradient-to-r from-black/40 via-black/20 to-black/40 z-20" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0 || isFlipping}
              className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center group"
            >
              <ChevronLeft size={28} className="text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === magazines.length - 1 || isFlipping}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center group"
            >
              <ChevronRight size={28} className="text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-\[2000px\] {
          perspective: 2000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        @keyframes page-flip {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }
        
        .animate-page-flip {
          animation: page-flip 0.6s ease-in-out;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default MagazineBookSection;