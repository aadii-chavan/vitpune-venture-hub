import { motion } from 'framer-motion';
import { ExternalLink, Megaphone, ShoppingBag, Users as UsersIcon } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Starfield from '../components/ui/Starfield';

// Glacier Palette Constants
const COLORS = {
  frost: '#D6D6DB',
  silver: '#AFB7C7',
  steel: '#8A9BB4',
  glacier: '#2C6EA1',
  deep: '#0a0c10',
  cardBg: '#16212e'
};

const Events = () => {
  const events = [
    {
      id: 'esummit',
      title: 'E-Summit',
      icon: ExternalLink,
      tagline: 'The Premier Entrepreneurship Summit',
      description:
        'E-Summit is the flagship annual event of V-EDC, bringing together industry leaders, successful entrepreneurs, investors, and aspiring founders. This multi-day extravaganza features keynote speeches, panel discussions, startup competitions, and networking sessions designed to inspire and educate the next generation of entrepreneurs.',
      highlights: [
        'Keynote sessions from renowned entrepreneurs',
        'Startup pitch competitions with prize money',
        'Investor networking and mentorship opportunities',
        'Interactive workshops on business strategy',
        'Panel discussions on emerging trends',
      ],
      link: 'https://esummit.ecellvitpune.in/',
      external: true,
    },
    {
      id: 'earn-sell',
      title: 'Earn & Sell',
      icon: ShoppingBag,
      tagline: 'Learn Business by Doing Business',
      description:
        'Earn & Sell is a hands-on marketplace event where students can set up stalls and sell products or services. This practical experience teaches fundamental business skills including pricing, marketing, customer service, and sales—all in a supportive environment. It\'s entrepreneurship in action.',
      highlights: [
        'Real-world marketplace experience',
        'Direct interaction with customers',
        'Learning pricing and marketing strategies',
        'Building confidence in sales',
        'Networking with fellow student entrepreneurs',
      ],
    },
    {
      id: 'awareness',
      title: 'Entrepreneurship Awareness Drive',
      icon: Megaphone,
      tagline: 'Igniting the Entrepreneurial Spirit',
      description:
        'This initiative is dedicated to spreading awareness about entrepreneurship across the VIT Pune campus. Through interactive workshops, seminars, and guest lectures, we introduce students to the world of startups, innovation, and business creation, inspiring them to think beyond traditional career paths.',
      highlights: [
        'Introductory workshops for beginners',
        'Success stories from alumni entrepreneurs',
        'Sessions on ideation and problem-solving',
        'Career guidance in entrepreneurship',
        'Campus-wide awareness campaigns',
      ],
    },
    {
      id: 'intro-meet',
      title: 'Intro Meet',
      icon: UsersIcon,
      tagline: 'Welcome to the V-EDC Family',
      description:
        'The Intro Meet is an annual orientation event for new members and freshers interested in joining V-EDC. It\'s an opportunity to learn about the council\'s vision, upcoming events, team structure, and how you can get involved. Meet the team, connect with peers, and kickstart your entrepreneurial journey.',
      highlights: [
        'Introduction to V-EDC\'s vision and mission',
        'Meet the core team and senior members',
        'Overview of upcoming events and initiatives',
        'Networking with like-minded students',
        'Information on how to join and contribute',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#D6D6DB] selection:bg-[#2C6EA1] selection:text-white relative">
      <Navbar />
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <Starfield gridColor="#8A9BB4" speed={0.15} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        {/* Custom Section Header with Palette Colors */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 font-heading text-[#D6D6DB]">Our Events</h1>
          <p className="text-xl text-[#AFB7C7] max-w-2xl mx-auto">Empowering students through impactful entrepreneurial experiences</p>
        </div>

        <div className="space-y-24">
          {events.map((event, index) => (
            <motion.section
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#2C6EA1]/10 border border-[#2C6EA1]/30 flex items-center justify-center shadow-[0_0_30px_rgba(44,110,161,0.2)]">
                    <event.icon className="text-[#2C6EA1]" size={32} />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#D6D6DB]">
                      {event.title}
                    </h2>
                    <p className="text-[#8A9BB4] text-sm font-medium mt-2 tracking-wider uppercase">
                      {event.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-[#AFB7C7] leading-relaxed text-lg">
                  {event.description}
                </p>

                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-[#D6D6DB] text-lg">
                    Event Highlights
                  </h3>
                  <ul className="space-y-3">
                    {event.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[#AFB7C7]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2C6EA1] mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(44,110,161,0.8)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {event.link && (
                  <div>
                    {event.external ? (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="lg" className="group bg-[#2C6EA1] hover:bg-[#667B98] text-white border-none shadow-lg shadow-[#2C6EA1]/30">
                          Visit E-Summit Website
                          <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                      </a>
                    ) : (
                      <Button size="lg" className="bg-[#2C6EA1] hover:bg-[#667B98] text-white border-none shadow-lg shadow-[#2C6EA1]/30">Learn More</Button>
                    )}
                  </div>
                )}
              </div>

              {/* Visual Card - Glacier Style */}
              <div className="flex-1 w-full">
                <div className="relative rounded-[3rem] border border-[#8A9BB4]/20 bg-gradient-to-br from-[#16212e] to-[#0a0c10] p-12 flex items-center justify-center min-h-[400px] shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2C6EA1]/10 blur-[100px] rounded-full" />
                  <event.icon className="text-[#2C6EA1] opacity-10 relative z-10" size={200} />
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
      
      {/* Contact Footer */}
      <div className="text-center py-10 px-6 mt-10 border-t border-[#8A9BB4]/10 relative z-10">
        <p className="text-[#8A9BB4] font-medium tracking-wide">
          Contact: Chief Of Relations <span className="text-[#D6D6DB] font-bold">Rajvee Pardeshi</span> <span className="text-[#2C6EA1]">+91 7218122005</span>
        </p>
      </div>
    </div>
  );
};

export default Events;