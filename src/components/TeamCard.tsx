import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { User } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

const TeamCard = ({ name, role, image, linkedin }: TeamCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-glow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-secondary border-2 border-border group-hover:border-primary transition-colors">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User size={40} className="text-muted-foreground" />
              </div>
            )}
          </div>
          
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-primary-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={14} />
            </a>
          )}
        </div>

        <h3 className="font-heading font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
