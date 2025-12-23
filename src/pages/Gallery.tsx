import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import GalleryItem from '@/components/GalleryItem';
import Navbar from '@/components/Navbar';
import Starfield from '../components/ui/Starfield';

// Asset Imports
import img1 from '../assets/gallery/1.jpg'
import img2 from '../assets/gallery/2.jpg'
import img3 from '../assets/gallery/3.jpg'
import img4 from '../assets/gallery/4.jpg'
import img5 from '../assets/gallery/5.jpg'
import img6 from '../assets/gallery/6.jpg'
import img7 from '../assets/gallery/7.jpg'

// Glacier Palette Reference
const COLORS = {
  frost: '#D6D6DB',    // Lightest
  silver: '#AFB7C7',   // Soft Gray
  steel: '#8A9BB4',    // Muted Blue
  glacier: '#2C6EA1',  // Primary Blue
  deep: '#0a0c10',     // Background
  card: '#16212e'      // Card Base
};

const Gallery = () => {
  const categories = ['All', 'E-Summit', 'Workshops', 'Networking', 'Competitions'];
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryItems = [
    { image: img1, title: 'E-Summit 2023 Opening', category: 'E-Summit' },
    { image: img2, title: 'Startup Workshop', category: 'Workshops' },
    { image: img3, title: 'Networking Session', category: 'Networking' },
    { image: img4, title: 'Pitch Competition', category: 'Competitions' },
    { image: img5, title: 'Panel Discussion', category: 'E-Summit' },
    { image: img6, title: 'Innovation Workshop', category: 'Workshops' },
    { image: img7, title: 'Investor Meetup', category: 'Networking' },
    { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', title: 'Team Building', category: 'Workshops' },
    { image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', title: 'Hackathon Finals', category: 'Competitions' },
    { image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800', title: 'Guest Speaker', category: 'E-Summit' },
    { image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800', title: 'Mentorship Session', category: 'Workshops' },
    { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', title: 'Corporate Meeting', category: 'Networking' },
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#D6D6DB] selection:bg-[#2C6EA1] selection:text-white relative overflow-hidden">
      <Navbar />

      {/* FIXED INFRASTRUCTURE: Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <Starfield gridColor="#8A9BB4" speed={0.15} />
      </div>

      <div className="container mx-auto px-4 pt-40 pb-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 font-heading text-[#D6D6DB] tracking-tighter uppercase">
            Gallery
          </h1>
          <p className="text-xl text-[#AFB7C7] max-w-2xl mx-auto font-light">
            Capturing the icy precision and explosive energy of our journey.
          </p>
        </div>

        {/* Category Filter: Custom Glacier Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 justify-center mb-20"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-2.5 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] transition-all duration-500 border ${
                activeCategory === category
                  ? 'bg-[#2C6EA1] border-[#2C6EA1] text-white shadow-[0_0_30px_rgba(44,110,161,0.5)]'
                  : 'bg-[#16212e]/50 border-[#8A9BB4]/20 text-[#8A9BB4] hover:border-[#2C6EA1]/50 hover:text-[#D6D6DB] backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group"
              >
                {/* Wrapper for the GalleryItem to maintain border/glow consistency */}
                <div className="rounded-3xl border border-[#8A9BB4]/20 bg-[#16212e] overflow-hidden hover:border-[#2C6EA1]/50 transition-colors shadow-2xl">
                   <GalleryItem {...item} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-40">
            <p className="text-[#8A9BB4] text-xl font-light italic">
              The ice is still forming in this category. Check back soon.
            </p>
          </div>
        )}
      </div>

      <footer className="py-20 text-center opacity-40">
        <p className="text-[#8A9BB4] text-[10px] tracking-[0.6em] font-black uppercase">
          V-EDC GALLERY • VIT PUNE • ESTD 1983
        </p>
      </footer>
    </div>
  );
};

export default Gallery;