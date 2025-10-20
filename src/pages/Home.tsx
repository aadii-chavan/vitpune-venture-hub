import { motion } from 'framer-motion';
import DarkVeil from '@/components/DarkVeil';
import { ArrowRight, Target, Lightbulb, Users, TrendingUp, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import SectionHeader from '@/components/SectionHeader';

const Home = () => {
  const stats = [
    { label: 'Active Members', value: '500+', icon: Users },
    { label: 'Startups Mentored', value: '50+', icon: TrendingUp },
    { label: 'Events Organized', value: '100+', icon: Calendar },
    { label: 'Collaborations', value: '30+', icon: Award },
  ];

  const visionMissionCards = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To foster a vibrant entrepreneurial ecosystem at VIT Pune, empowering students to transform innovative ideas into impactful ventures.',
    },
    {
      icon: Lightbulb,
      title: 'Our Mission',
      description: 'Providing mentorship, resources, and networking opportunities to nurture the next generation of entrepreneurs and business leaders.',
    },
    {
      icon: Users,
      title: 'Our Objectives',
      description: 'Building a community of innovators, facilitating skill development, and creating pathways for startup success through strategic initiatives.',
    },
  ];

  const featuredEvents = [
    {
      title: 'E-Summit',
      description: 'The flagship entrepreneurship summit featuring industry leaders, investors, and innovative startups from across the nation.',
      link: '/esummit',
    },
    {
      title: 'Earn & Sell',
      description: 'A practical marketplace event where students can showcase and sell their products, learning real-world business skills.',
      link: '/events',
    },
    {
      title: 'Entrepreneurship Awareness Drive',
      description: 'Inspiring workshops and sessions designed to ignite the entrepreneurial spirit among students at VIT Pune.',
      link: '/events',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <DarkVeil
            speed={2.4}
            hueShift={15}
            noiseIntensity={0.02}
            scanlineFrequency={4.6}
            scanlineIntensity={0}
            warpAmount={1.5}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-glow" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 md:space-y-10 [&>*:last-child]:mb-0"
          >
            <motion.h1
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white/90 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Empowering Entrepreneurship at <span className="text-primary">VIT Pune</span>
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The Entrepreneurship Development Council at VIT Pune is dedicated to nurturing innovation, fostering collaboration, and building the next generation of entrepreneurs through events, mentorship, and a thriving community.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/contact">
                <button
                  className="group relative inline-flex items-center justify-center rounded-xl font-semibold text-white transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:text-black w-full sm:w-auto"
                >
                  <span className="relative z-[2] flex items-center gap-2 px-6 py-3 sm:px-7">
                    <span>Join V-EDC</span>
                    <span className="inline-block"><ArrowRight size={18} /></span>
                  </span>
                  <svg className="absolute inset-0 -z-0 rounded-[inherit]" width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" fill="transparent" />
                    <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" className="transition-colors fill-black/70 group-hover:fill-white" />
                    <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" className="animate-dash" />
                  </svg>
                </button>
              </Link>
              <Link to="/events">
                <button className="px-6 py-3 sm:px-7 rounded-xl font-semibold text-white/90 bg-white/10 border border-white/10 hover:bg-white/15 transition-colors w-full sm:w-auto">
                  View Events
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Objectives */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionMissionCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-glow group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div className="font-heading text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Events"
            subtitle="Discover our signature events that drive entrepreneurial excellence"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join V-EDC and become part of a thriving community of innovators, builders, and changemakers.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
