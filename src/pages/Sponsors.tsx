import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import SponsorCard from '@/components/SponsorCard';
import { Button } from '@/components/ui/button';

const Sponsors = () => {
  const currentSponsors = [
    { name: 'Platinum Sponsor 1', tier: 'platinum' as const },
    { name: 'Gold Sponsor 1', tier: 'gold' as const },
    { name: 'Gold Sponsor 2', tier: 'gold' as const },
    { name: 'Silver Sponsor 1', tier: 'silver' as const },
    { name: 'Silver Sponsor 2', tier: 'silver' as const },
    { name: 'Silver Sponsor 3', tier: 'silver' as const },
  ];

  const pastSponsors = [
    { name: 'Past Sponsor 1' },
    { name: 'Past Sponsor 2' },
    { name: 'Past Sponsor 3' },
    { name: 'Past Sponsor 4' },
    { name: 'Past Sponsor 5' },
    { name: 'Past Sponsor 6' },
  ];

  const sponsorshipBenefits = [
    'Brand visibility across all V-EDC events and platforms',
    'Direct access to talented students and future entrepreneurs',
    'Speaking and workshop opportunities at major events',
    'Custom branding and promotional opportunities',
    'Early access to innovative student projects and startups',
    'Networking with industry leaders and investors',
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Sponsors"
          subtitle="Partnering with leading organizations to empower entrepreneurship"
          centered
        />

        {/* Current Sponsors */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
              Current Sponsors
            </h2>
            <p className="text-muted-foreground text-center">
              Thank you to our sponsors for making our events possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <SponsorCard {...sponsor} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Sponsors */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
              Past Sponsors
            </h2>
            <p className="text-muted-foreground text-center">
              Organizations that have supported us over the years
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {pastSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
              >
                <SponsorCard {...sponsor} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Become a Sponsor */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-2xl border border-border p-8 md:p-12 shadow-lg"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Become a Sponsor
              </h2>
              <p className="text-muted-foreground text-lg">
                Partner with V-EDC and support the next generation of entrepreneurs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Why Sponsor V-EDC?
                </h3>
                <ul className="space-y-3">
                  {sponsorshipBenefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border flex flex-col justify-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to discuss sponsorship opportunities and customize a package that fits your goals.
                </p>
                <a href="mailto:vedc@vitpune.edu.in">
                  <Button size="lg" className="w-full group">
                    Contact Us
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                For detailed sponsorship brochure and partnership opportunities
              </p>
              <a
                href="mailto:vedc@vitpune.edu.in"
                className="text-primary font-medium hover:underline"
              >
                vedc@vitpune.edu.in
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Sponsors;
