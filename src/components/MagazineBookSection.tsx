import React, { useState } from 'react';
import img2 from '@/assets/2.png';
import mag5 from '@/assets/mag_5.jpeg';
import mag6 from '@/assets/mag_6.jpg';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const COLORS = {
  lightGray: '#D6D6DB',
  softGray: '#AFB7C7',
  steelBlue: '#b48a8aff',
  mediumBlue: '#667B98',
  glacierBlue: '#a12c2cff',
  cardBlue: '#16212e', // Added a specific blue base for the cards
  deepNavy: '#0a0c10'
};

const magazineImages = [img2, mag5, mag6];

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
    <section id="vedc-magazines" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-[#D6D6DB]">
            V-EDC Magazines
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#AFB7C7]">
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
                    {/* BLUE CARD WRAPPER */}
                    <div className="relative rounded-3xl border border-[#2C6EA1]/30 bg-gradient-to-br from-[#16212e] to-[#0a0c10] backdrop-blur-md p-6 shadow-[0_20px_50px_rgba(44,110,161,0.3)]">
                      <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden border border-[#8A9BB4]/20">
                        <img src={mag.img} alt={mag.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#16212e] to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-extrabold text-white mb-1">{mag.title}</h3>
                          <p className="text-[#AFB7C7] text-sm">{mag.subtitle}</p>
                        </div>
                      </div>
                      <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2C6EA1] hover:bg-[#D6D6DB] hover:text-[#0a0c10] text-white font-semibold transition-all">
                        Read Magazine
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {magazines.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentPage ? 'bg-[#2C6EA1] w-8' : 'bg-[#8A9BB4]/30 w-2'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Book View */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto perspective-[2000px]">
            <div className="relative h-[700px] flex items-center justify-center">
              
              {/* Left Page (Info) - Updated to Blue Gradient */}
              <div className="absolute left-0 w-1/2 h-[600px] bg-gradient-to-br from-[#16212e] via-[#2C6EA1]/10 to-[#0a0c10] rounded-l-3xl border border-[#2C6EA1]/30 shadow-2xl p-12 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2C6EA1]/20 via-transparent to-[#AFB7C7]/10 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#2C6EA1]/20 border border-[#2C6EA1]/30 px-3 py-1 rounded-full mb-6">
                    <span className="size-2 rounded-full bg-[#D6D6DB] animate-pulse" />
                    Publications
                  </div>
                  <h3 className="text-4xl font-extrabold text-white tracking-tight mb-4">
                    Curated insights from campus innovators
                  </h3>
                  <p className="text-[#AFB7C7] leading-relaxed mb-6">
                    Stay inspired and up to date with what's shaping the next wave of entrepreneurship at VIT Pune.
                  </p>
                  <ul className="space-y-3">
                    {['Actionable articles & interviews', 'Beautiful reading experience', 'Downloadable PDF versions'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 text-[#2C6EA1]" size={18} />
                        <span className="text-[#AFB7C7]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[#8A9BB4] text-sm font-medium">Page {currentPage + 1} of {magazines.length}</div>
              </div>

              {/* Right Page (Magazine Cover) - Updated to Blue Card Base */}
              <div className="absolute right-0 w-1/2 h-[600px] preserve-3d">
                <div className={`relative w-full h-full transition-transform duration-600 ease-in-out transform-style-preserve-3d ${isFlipping ? 'animate-page-flip' : ''}`}>
                  <div className="absolute inset-0 backface-hidden bg-[#16212e] rounded-r-3xl border border-[#2C6EA1]/30 shadow-2xl overflow-hidden p-8">
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#2C6EA1]/20 shadow-inner">
                      <img src={magazines[currentPage].img} alt={magazines[currentPage].title} className="w-full h-full object-cover" />
                      {/* Stronger Blue Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C6EA1]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-3xl font-extrabold text-white mb-2">{magazines[currentPage].title}</h3>
                        <p className="text-[#AFB7C7] text-lg">{magazines[currentPage].subtitle}</p>
                        <button className="mt-6 group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2C6EA1] border border-white/10 hover:bg-white hover:text-[#0a0c10] text-white font-semibold transition-all shadow-[0_10px_30px_rgba(44,110,161,0.4)]">
                          Read Now
                          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spine Shadow - Tinted Blue */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[580px] bg-gradient-to-b from-transparent via-[#2C6EA1]/40 to-transparent z-20" />
            </div>

            {/* Navigation Arrows */}
            {[-80, -80].map((pos, i) => (
              <button
                key={i}
                onClick={i === 0 ? prevPage : nextPage}
                disabled={(i === 0 ? currentPage === 0 : currentPage === magazines.length - 1) || isFlipping}
                style={{ [i === 0 ? 'left' : 'right']: `${pos}px` }}
                className="absolute top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#16212e]/80 hover:bg-[#2C6EA1]/40 border border-[#2C6EA1]/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center group backdrop-blur-sm"
              >
                {i === 0 ? <ChevronLeft size={28} className="text-white" /> : <ChevronRight size={28} className="text-white" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-[2000px] { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        @keyframes page-flip {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }
        .animate-page-flip { animation: page-flip 0.6s ease-in-out; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
};

export default MagazineBookSection;