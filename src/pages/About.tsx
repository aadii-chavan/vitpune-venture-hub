import { useEffect } from 'react';
// ✅ CORRECT: Added useScroll and useTransform
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedText } from '../components/AnimatedText';

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
    <div className="min-h-screen bg-[#000e2b] text-white overflow-x-hidden">
      {/* Header */}
     

      {/* Hero Section - 3D Text Effect */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Zoom Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            scale: useTransform(scrollY, [0, 1000], [1, 1.5]),
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#000e2b]/60 via-[#000e2b]/40 to-[#000e2b] z-10" />
          <ImageWithFallback
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg"
            alt="Entrepreneurship"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden z-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0055fe]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0055fe]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* 3D Text */}
        <motion.div
          // ✅ CORRECT: Fixed Tailwind perspective class
          className="relative z-30 [perspective:1000px]"
          style={{
            y: textY,
            opacity: textOpacity,
          }}
        >
          <motion.h1
            className="text-6xl md:text-9xl lg:text-[12rem] uppercase tracking-wider text-center px-4"
            style={{
              fontFamily: 'serif',
              fontWeight: 800,
              textTransform: 'uppercase',
              background: 'linear-gradient(180deg, #0055fe 0%, #003db5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 10px 30px rgba(0, 85, 254, 0.5)',
              // ✅ CORRECT: Applied scroll transform for 3D rotation
              rotateX: textRotateX,
            }}
          // ⛔️ REMOVED conflicting 'animate' and 'transition' props
          >
            VIT E-CELL
          </motion.h1>
        </motion.div>
      </section>

      <section className="relative z-10 bg-[#000e2b] py-20 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-container narrow-center"
          >
            <div className="glass-content-wrapper">
              {/* Badge in top right */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">

              </div>

              <AnimatedText
                text="Welcome to VIT E-CELL"
                className="text-3xl md:text-5xl mb-8 uppercase tracking-wide block text-center"
                style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  color: 'var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382)',
                  textShadow: '0 0 8px var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1)',
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base md:text-lg leading-relaxed text-center"
                style={{ color: 'var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75)' }}
              >
                Vishwakarma Institute of Technology (VIT), Pune, is a premier institution dedicated to academic excellence and innovation. With a legacy of over 40 years, VIT offers various programs in engineering and applied sciences, enriching critical thinking and innovation. The institute provides state-of-the-art laboratories, modern infrastructure, and industrial collaborations to ensure a well-rounded, practical education. Beyond academics, VIT promotes holistic development through technical fests, cultural events, and sports competitions, encouraging students to excel in all domains. With a strong alumni network, robust placement support, and global opportunities, VIT Pune stands as a hub for nurturing future leaders, innovators, and entrepreneurs.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Large Image Card with Glow Effect */}
      <section className="relative z-10 bg-[#000e2b] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0055fe] via-[#0055fe]/50 to-[#0055fe] rounded-3xl opacity-50 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#0055fe]/30 group-hover:border-[#0055fe] transition-all duration-500">
              <ImageWithFallback
                src="https://ecellvitpune.in/images/Vit_image.jpg"
                alt="VIT E-Cell"
                className="w-full h-[500px] md:h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>



      {/* About V-EDC Section - Now using the Glowing Border Style */}
      <section className="relative z-10 bg-[#000e2b] py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-container" /* Applied new glass-container class */
          >
            <div className="glass-content-wrapper wide"> {/* Applied new wrapper class with wide modifier */}
              {/* Badge in top right */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <span className="px-6 py-2 rounded-full text-sm" style={{
                  background: 'rgba(0, 85, 254, 0.15)',
                  color: '#0055fe',
                  border: '1px solid rgba(0, 85, 254, 0.3)',
                }}>
                  Entrepreneurship
                </span>
              </div>

              <AnimatedText
                text="About V-EDC"
                className="text-3xl md:text-5xl mb-8 uppercase tracking-wide block pr-32"
                style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  color: 'var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382)' // Uses white color variable
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75)' }} // Uses light white color variable
              >
                The V-EDC (VIT Entrepreneurship Development Cell) at VIT Pune is committed to encouraging and promoting entrepreneurial spirit in students. At V-EDC, we ensure the availability of a range of initiatives such as startup incubation, business strategy competitions, startup pitch contests all directed towards adequately training students with the necessary skills and understanding to flourish in the competitive entrepreneurship landscape. V-EDC aims to surpass thresholds and lead with entrepreneurial excellence. Come aboard on our journey to build a future where innovation knows no boundaries. V-EDC is here to direct and encourage you as you progress in your entrepreneurial venture.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Objectives - Zigzag Layout */}
      <section className="relative z-10 bg-[#000e2b] py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Vision - Left Text, Right Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl mb-6 uppercase tracking-wide"
                style={{
                  fontFamily: 'serif',
                  fontWeight: 800,
                  lineHeight: '0.6',
                  marginTop: '35px',
                  color: '#0055fe'
                }}
              >
                Vision
              </motion.h2>
              <p className="text-lg leading-relaxed text-white/80 mt-8">
                To foster a culture of innovation and entrepreneurship among students, empowering them to become successful entrepreneurs and industry leaders. We envision creating an ecosystem where ideas transform into impactful ventures that contribute to society and economic growth.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0055fe] via-[#0055fe]/50 to-[#0055fe] rounded-2xl opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border border-[#0055fe]/30">
                <ImageWithFallback
                  src="https://media.istockphoto.com/id/627851734/photo/his-city-his-business.jpg?s=612x612&w=0&k=20&c=M76-UDayrg44Z9Y8L_HPxNeHBld3ehSlzjEUgpejVV0="
                  alt="Vision"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Mission - Right Text, Left Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0055fe] via-[#0055fe]/50 to-[#0055fe] rounded-2xl opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border border-[#0055fe]/30">
                <ImageWithFallback
                  src="https://images.businessnewsdaily.com/app/uploads/2022/04/04072615/boss2_fizkes_getty.jpg"
                  alt="Mission"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl mb-6 uppercase tracking-wide"
                style={{
                  fontFamily: 'serif',
                  fontWeight: 800,
                  lineHeight: '0.6',
                  marginTop: '35px',
                  color: '#0055fe'
                }}
              >
                Mission
              </motion.h2>
              <p className="text-lg leading-relaxed text-white/80 mt-8">
                To provide a comprehensive platform for students to develop entrepreneurial skills through workshops, mentorship programs, and real-world exposure. We aim to bridge the gap between academic knowledge and practical business acumen, enabling students to launch and scale their ventures successfully.
              </p>
            </div>
          </motion.div>

          {/* Objectives - Left Text, Right Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl mb-6 uppercase tracking-wide"
                style={{
                  fontFamily: 'serif',
                  fontWeight: 800,
                  lineHeight: '0.6',
                  marginTop: '35px',
                  color: '#0055fe'
                }}
              >
                Objectives
              </motion.h2>
              <p className="text-lg leading-relaxed text-white/80 mt-8">
                To organize startup competitions, pitch events, and networking sessions that connect aspiring entrepreneurs with industry experts and investors. We focus on creating opportunities for collaboration, funding, and mentorship while building a supportive community of like-minded innovators committed to excellence.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0055fe] via-[#0055fe]/50 to-[#0055fe] rounded-2xl opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border border-[#0055fe]/30">
                <ImageWithFallback
                  src="https://media.istockphoto.com/id/1807455564/photo/goal-setting-towards-planning-for-the-future-silhouettes-of-group-businessmen-holding-target.jpg?s=612x612&w=0&k=20&c=AmFffzuXhmezfwLdLXx8lkN7g1RtT1Vrq7wIilmZHJg="
                  alt="Objectives"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#000e2b] border-t border-[#0055fe]/20 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Address */}
            <div>
              <h3 className="text-2xl mb-4 uppercase tracking-wide"
                style={{
                  fontFamily: 'serif',
                  fontWeight: 800,
                  color: '#0055fe'
                }}>
                Address
              </h3>
              <p className="text-white/80 leading-relaxed">
                Vishwakarma Institute of Technology<br />
                666, Upper Indiranagar, Bibwewadi,<br />
                Pune, Maharashtra, India - 411 037
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl mb-4 uppercase tracking-wide"
                style={{
                  fontFamily: 'serif',
                  fontWeight: 800,
                  color: '#0055fe'
                }}>
                Connect With Us
              </h3>
              <div className="flex gap-4 flex-wrap">
                {/* Instagram */}
                <a
                  href="https://ecellvitpune.in/images/Vit_image.jpg"
                  className="p-3 bg-[#0055fe]/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] rounded-full transition-all duration-300 border border-[#0055fe]/30 hover:border-transparent group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-[#0055fe] group-hover:text-white group-hover:scale-110 transition-all" />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="p-3 bg-[#0055fe]/10 hover:bg-[#1877F2] rounded-full transition-all duration-300 border border-[#0055fe]/30 hover:border-[#1877F2] group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-[#0055fe] group-hover:text-white group-hover:scale-110 transition-all" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@v_edc"
                  className="p-3 bg-[#0055fe]/10 hover:bg-[#FF0000] rounded-full transition-all duration-300 border border-[#0055fe]/30 hover:border-[#FF0000] group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-[#0055fe] group-hover:text-white group-hover:scale-110 transition-all" />
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="p-3 bg-[#0055fe]/10 hover:bg-[#1DA1F2] rounded-full transition-all duration-300 border border-[#0055fe]/30 hover:border-[#1DA1F2] group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-[#0055fe] group-hover:text-white group-hover:scale-110 transition-all" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://in.linkedin.com/company/v-edcc"
                  className="p-3 bg-[#0055fe]/10 hover:bg-[#0A66C2] rounded-full transition-all duration-300 border border-[#0055fe]/30 hover:border-[#0A66C2] group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-[#0055fe] group-hover:text-white group-hover:scale-110 transition-all" />
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-[#0055fe]/20 text-center text-white/60">
            <p>&copy; 2025 VIT Entrepreneurship Development Cell. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ✅ ADDED: CSS definitions for glass effect and color tokens */}
      <style>{`
        :root {
          --token-59e77027-930e-45f7-94aa-a8ffadf9e382: #ffffff;
          --token-8f8054d9-8a09-4e7e-b957-8a76557c5e75: #e0e0e0;
          --token-f951c3a8-aa43-4825-aa75-915aa92c20d1: rgba(0, 85, 254, 0.5);
        }

        .glass-container {
          position: relative;
          border-radius: 1.5rem; /* 24px */
          border: 1px solid rgba(0, 85, 254, 0.2);
          background: rgba(10, 25, 50, 0.5); /* Dark blue, semi-transparent */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          overflow: hidden;
        }
        
        .glass-content-wrapper {
          position: relative;
          z-index: 2;
          padding: 2.5rem; /* 40px */
        }
        
        .glass-content-wrapper.wide {
          max-width: 100%;
        }
        
        .glass-content-wrapper.narrow-center {
          max-width: 42rem; /* 672px */
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
}