import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import GalleryItem from '@/components/GalleryItem';

const Gallery = () => {
  const categories = ['All', 'E-Summit', 'Workshops', 'Networking', 'Competitions'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Placeholder gallery items (replace with actual images)
  const galleryItems = [
    { image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', title: 'E-Summit 2023 Opening', category: 'E-Summit' },
    { image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800', title: 'Startup Workshop', category: 'Workshops' },
    { image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800', title: 'Networking Session', category: 'Networking' },
    { image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', title: 'Pitch Competition', category: 'Competitions' },
    { image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800', title: 'Panel Discussion', category: 'E-Summit' },
    { image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800', title: 'Innovation Workshop', category: 'Workshops' },
    { image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', title: 'Investor Meetup', category: 'Networking' },
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
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Gallery"
          subtitle="Capturing moments from our events and activities"
          centered
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <GalleryItem {...item} />
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
