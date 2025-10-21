import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

// Define the props for the card
interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string; // Use a URL for the image
  linkedinUrl?: string;
  twitterUrl?: string; // For X/Twitter
  githubUrl?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  imageUrl,
  linkedinUrl,
  twitterUrl,
  githubUrl,
}) => {
  return (
    <div className="group relative flex w-full h-full flex-col items-center rounded-2xl border border-white/10 bg-black/50 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20">
      
      {/* Image Container */}
      <div className="relative mb-4 h-32 w-32 rounded-full overflow-hidden border-2 border-white/10 transition-all duration-300 group-hover:border-primary/50 group-hover:scale-105">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover"
        />
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full transition-all duration-300 group-hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.3)]" />
      </div>

      {/* Text Content */}
      <div className="flex-grow text-center">
        <h3 className="font-heading text-xl font-bold text-white">
          {name}
        </h3>
        <p className="text-sm text-primary transition-colors duration-300 group-hover:text-purple-300">
          {role}
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-5 pt-5 border-t border-white/10 w-full">
        <div className="flex items-center justify-center gap-5">
          {/* LinkedIn */}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s LinkedIn`}
              className="text-white/60 transition-colors hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          )}

          {/* Twitter (X) */}
          {twitterUrl && (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s Twitter`}
              className="text-white/60 transition-colors hover:text-white"
            >
              <Twitter size={20} />
            </a>
          )}

          {/* GitHub */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s GitHub`}
              className="text-white/60 transition-colors hover:text-white"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;