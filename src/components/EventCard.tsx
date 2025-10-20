import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  external?: boolean;
}

const EventCard = ({ title, description, image, link, external }: EventCardProps) => {
  const CardContent = () => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-glow"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        {link && (
          <div className="flex items-center gap-2 text-primary text-sm font-medium">
            <span>Learn more</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </motion.div>
  );

  if (link) {
    if (external) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardContent />
        </a>
      );
    }
    return (
      <Link to={link}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default EventCard;
