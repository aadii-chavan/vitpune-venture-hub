import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItemProps {
  image: string;
  title: string;
  category?: string;
}

const GalleryItem = ({ image, title, category }: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
        className="group relative aspect-square overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-glow"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-heading font-semibold text-foreground mb-1">
              {title}
            </h3>
            {category && (
              <p className="text-sm text-muted-foreground">
                {category}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={image}
            alt={title}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default GalleryItem;
