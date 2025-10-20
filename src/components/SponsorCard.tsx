import { motion } from 'framer-motion';

interface SponsorCardProps {
  name: string;
  logo?: string;
  tier?: 'platinum' | 'gold' | 'silver';
}

const SponsorCard = ({ name, logo, tier }: SponsorCardProps) => {
  const tierColors = {
    platinum: 'border-primary/50 hover:border-primary',
    gold: 'border-yellow-500/30 hover:border-yellow-500',
    silver: 'border-gray-400/30 hover:border-gray-400',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`bg-card rounded-2xl p-8 border-2 ${tier ? tierColors[tier] : 'border-border hover:border-primary/50'} transition-all duration-300 shadow-md hover:shadow-glow flex items-center justify-center min-h-[180px]`}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="max-w-full max-h-24 object-contain filter brightness-90 hover:brightness-100 transition-all"
        />
      ) : (
        <div className="text-center">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {name}
          </h3>
          {tier && (
            <p className="text-sm text-muted-foreground mt-2 capitalize">
              {tier} Sponsor
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default SponsorCard;
