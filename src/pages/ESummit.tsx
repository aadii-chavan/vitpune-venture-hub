import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';

const ESummit = () => {
  const features = [
    {
      icon: Users,
      title: 'Industry Leaders',
      description: 'Keynote sessions from successful entrepreneurs and business leaders',
    },
    {
      icon: Trophy,
      title: 'Startup Competitions',
      description: 'Pitch your ideas and compete for exciting prizes and funding opportunities',
    },
    {
      icon: Calendar,
      title: 'Multi-Day Event',
      description: 'Packed schedule of workshops, panels, and networking sessions',
    },
    {
      icon: MapPin,
      title: 'VIT Pune Campus',
      description: 'State-of-the-art venues and facilities for an immersive experience',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Annual Flagship Event
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            E-Summit
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            The Premier Entrepreneurship Summit at VIT Pune - Where Innovation Meets Opportunity
          </p>

          <a
            href="https://esummit.ecellvitpune.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="group shadow-glow">
              Visit E-Summit Website
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </a>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="About E-Summit"
              subtitle="A celebration of innovation, entrepreneurship, and ideas"
              centered
            />

            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  E-Summit is the flagship annual event organized by V-EDC, bringing together the brightest minds 
                  in entrepreneurship, innovation, and business. This multi-day summit serves as a platform for 
                  aspiring entrepreneurs to learn, network, and showcase their ideas to industry leaders, investors, 
                  and mentors.
                </p>
                <p>
                  With keynote speeches from renowned entrepreneurs, interactive workshops, startup competitions, 
                  investor pitching sessions, and panel discussions, E-Summit provides comprehensive exposure to 
                  the startup ecosystem. The event attracts participation from students, professionals, and 
                  entrepreneurs across the nation.
                </p>
                <p>
                  Whether you're an aspiring founder, an investor looking for the next big idea, or simply someone 
                  interested in the world of startups, E-Summit offers valuable insights, connections, and 
                  opportunities that can shape your entrepreneurial journey.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <section className="mb-20">
          <SectionHeader
            title="What to Expect"
            subtitle="Key highlights of E-Summit"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-glow group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-2xl border border-border p-12 text-center shadow-lg"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join the Summit?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Visit the official E-Summit website for event schedules, registration, and more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://esummit.ecellvitpune.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group">
                Visit Website
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ESummit;
