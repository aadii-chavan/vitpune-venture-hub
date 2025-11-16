import React, { useRef, useState } from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

interface VisionMissionCardProps {
  type: 'vision' | 'mission' | 'objectives';
  title: string;
  description: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const getIconForType = (type: 'vision' | 'mission' | 'objectives') => {
  switch (type) {
    case 'vision':
      return Target;
    case 'mission':
      return Lightbulb;
    case 'objectives':
      return Users;
    default:
      return Target;
  }
};

const VisionMissionCard: React.FC<VisionMissionCardProps> = ({ type, title, description, spotlightColor = 'rgba(0,170,255,0.22)' }) => {
  const IconComponent = getIconForType(type);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const maxTilt = 15; // Maximum tilt angle in degrees
    const tiltXValue = (mouseY / (rect.height / 2)) * maxTilt;
    const tiltYValue = -(mouseX / (rect.width / 2)) * maxTilt;
    setTiltX(tiltXValue);
    setTiltY(tiltYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltX(0);
    setTiltY(0);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="perspective-1000 w-[22rem] h-[13rem] mx-auto"
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered
          ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.3s cubic-bezier(.25,.9,.26,1.15)',
      }}
    >
      <div className="relative rounded-xl border border-white/10 bg-white/5 shadow-xl transition-all duration-300 overflow-hidden" style={{height:'100%'}}>
        {/* Spotlight effect bg */}
        <div style={{
          background: `radial-gradient(ellipse 120% 90% at 50% 10%, ${spotlightColor}, transparent 80%)`,
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }} />
        <div className="relative flex flex-col gap-3 p-4 tracking-tight text-slate-100/80 w-full h-full z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <IconComponent size={28} className="text-white/80" />
            </div>
            <div className="font-heading text-2xl md:text-3xl font-extrabold text-slate-100">
              {title}
            </div>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-slate-300/90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionCard;
