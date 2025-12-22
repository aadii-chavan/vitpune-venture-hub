import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

import ColorBends from './ui/ColorBends';
import logo from "@/assets/logo.png";

const LOGO_SIZES = {
  mobile: 'h-20',
  sm: 'h-24',
  md: 'h-32',
  lg: 'h-36',
  xl: 'h-40',
};

const Hero = () => {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, {
        opacity: 0, scale: 0.8, y: -30
      }, {
        opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2
      });
    }

    if (titleRef.current) {
      gsap.fromTo(titleRef.current, {
        opacity: 0, y: 50
      }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5
      });
    }

    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current, {
        opacity: 0, y: 30
      }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8
      });
    }

    if (buttonsRef.current) {
      gsap.fromTo(buttonsRef.current.children, {
        opacity: 0, y: 30
      }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 1.1
      });
    }
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden font-['Poppins']">
      <div className="absolute inset-0 z-0 w-full h-full bg-black">
        <ColorBends 
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={30}
          speed={0.3}
          scale={1.0}
          frequency={1.5}
          warpStrength={1.0}
          mouseInfluence={0.9}
          parallax={0.9}
          noise={0.08}
          transparent={true}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          
          <div className="flex justify-center mb-6">
            <motion.img
              ref={logoRef}
              src={logo}
              alt="VEDC Logo"
              className={`${LOGO_SIZES.mobile} sm:${LOGO_SIZES.sm} md:${LOGO_SIZES.md} lg:${LOGO_SIZES.lg} xl:${LOGO_SIZES.xl} w-auto object-contain`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </div>

          <motion.h1
            ref={titleRef}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white/90 tracking-tight leading-tight"
          >
            Inspire. Empower. Innovate.
          </motion.h1>

          <motion.p
            ref={subtitleRef}
            className="text-sm sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-2 leading-relaxed"
          >
            We are a community of entrepreneurs, innovators, and dreamers who are passionate about shaping the future.
          </motion.p>

          <motion.div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="group relative inline-flex items-center justify-center rounded-xl font-semibold text-white bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 hover:from-pink-700 hover:via-purple-700 hover:to-cyan-700 shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
              px-5 py-2 text-sm sm:text-base sm:px-7 sm:py-3
              w-[90%] max-w-[260px] sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                View Events
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#about')}
              className="rounded-xl font-semibold text-white/90 bg-white/10 border border-white/10 hover:bg-white/15 backdrop-blur-sm
              px-5 py-2 text-sm sm:text-base sm:px-7 sm:py-3
              w-[90%] max-w-[260px] sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;