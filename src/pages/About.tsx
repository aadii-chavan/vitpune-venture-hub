import { useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedText } from '../components/AnimatedText';
import Navbar from '@/components/Navbar';

export default function App() {
  const { scrollY } = useScroll();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // 3D text rotation effect
  const textRotateX = useTransform(scrollY, [0, 500], [0, 45]);
  const textY = useTransform(scrollY, [0, 500], [0, -200]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        :root {
          --color-primary: rgb(168, 85, 247);
          --color-primary-light: rgb(216, 180, 254);
          --color-primary-dark: rgb(126, 34, 206);
          --color-accent: rgb(236, 72, 153);
          --color-secondary: rgb(251, 146, 60);
        }
        
        .glass-effect {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(168, 85, 247, 0.2);
        }
        
        .glass-effect-light {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(168, 85, 247, 0.15);
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.6),
                       0 0 40px rgba(168, 85, 247, 0.4),
                       0 0 60px rgba(236, 72, 153, 0.3);
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <Navbar></Navbar>
      </header>

      {/* Hero Section - 3D Text Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Background Image with Zoom Effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated background circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgb(168, 85, 247) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgb(236, 72, 153) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        {/* 3D Text */}
        <motion.h1 
          className="text-[120px] md:text-[180px] lg:text-[220px] font-black tracking-tighter text-glow"
          style={{ 
            rotateX: textRotateX,
            y: textY,
            opacity: textOpacity,
          }}
        >
          VIT E-CELL
        </motion.h1>

        {/* Badge in top right */}
        <motion.div 
          className="absolute top-32 right-12 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            VIT Pune
          </span>
        </motion.div>
      </section>

      {/* About VIT Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: 'rgb(168, 85, 247)' }}>
              About VIT Pune
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed" style={{ fontWeight: 400 }}>
              Vishwakarma Institute of Technology (VIT), Pune, is a premier institution dedicated to academic excellence and innovation. With a legacy of over 40 years, VIT offers various programs in engineering and applied sciences, enriching critical thinking and innovation. The institute provides state-of-the-art laboratories, modern infrastructure, and industrial collaborations to ensure a well-rounded, practical education. Beyond academics, VIT promotes holistic development through technical fests, cultural events, and sports competitions, encouraging students to excel in all domains. With a strong alumni network, robust placement support, and global opportunities, VIT Pune stands as a hub for nurturing future leaders, innovators, and entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Large Image Card with Glow Effect */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              boxShadow: '0 0 60px rgba(168, 85, 247, 0.3), 0 0 100px rgba(236, 72, 153, 0.2)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="Innovation and collaboration"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About V-EDC Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-12 glass-effect"
            style={{
              boxShadow: '0 0 80px rgba(168, 85, 247, 0.2)'
            }}
          >
            <div className="absolute top-8 right-8">
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                Entrepreneurship
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: 'rgb(168, 85, 247)' }}>
              About V-EDC
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed" style={{ fontWeight: 400 }}>
              The V-EDC (VIT Entrepreneurship Development Cell) at VIT Pune is committed to encouraging and promoting entrepreneurial spirit in students. At V-EDC, we ensure the availability of a range of initiatives such as startup incubation, business strategy competitions, startup pitch contests all directed towards adequately training students with the necessary skills and understanding to flourish in the competitive entrepreneurship landscape. V-EDC aims to surpass thresholds and lead with entrepreneurial excellence. Come aboard on our journey to build a future where innovation knows no boundaries. V-EDC is here to direct and encourage you as you progress in your entrepreneurial venture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Objectives - Zigzag Layout */}
      <section id="vision" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl space-y-32">
          
          {/* Vision - Left Text, Right Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(168, 85, 247)' }}>
                Vision
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed" style={{ fontWeight: 400 }}>
                To foster a culture of innovation and entrepreneurship among students, empowering them to become successful entrepreneurs and industry leaders. We envision creating an ecosystem where ideas transform into impactful ventures that contribute to society and economic growth.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)' }}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Vision"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Mission - Right Text, Left Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="rounded-2xl overflow-hidden md:order-1 order-2" style={{ boxShadow: '0 0 40px rgba(236, 72, 153, 0.3)' }}>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Mission"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="md:order-2 order-1">
              <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(236, 72, 153)' }}>
                Mission
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed" style={{ fontWeight: 400 }}>
                To provide a comprehensive platform for students to develop entrepreneurial skills through workshops, mentorship programs, and real-world exposure. We aim to bridge the gap between academic knowledge and practical business acumen, enabling students to launch and scale their ventures successfully.
              </p>
            </div>
          </motion.div>

          {/* Objectives - Left Text, Right Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(251, 146, 60)' }}>
                Objectives
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed" style={{ fontWeight: 400 }}>
                To organize startup competitions, pitch events, and networking sessions that connect aspiring entrepreneurs with industry experts and investors. We focus on creating opportunities for collaboration, funding, and mentorship while building a supportive community of like-minded innovators committed to excellence.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 40px rgba(251, 146, 60, 0.3)' }}>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Objectives"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}