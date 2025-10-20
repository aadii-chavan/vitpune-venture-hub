import { motion } from 'framer-motion';
import { ExternalLink, Megaphone, ShoppingBag, Users as UsersIcon } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

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
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Events"
          subtitle="Empowering students through impactful entrepreneurial experiences"
          centered
        />

        <div className="space-y-20">
          {events.map((event, index) => (
            <motion.section
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <event.icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                      {event.title}
                    </h2>
                    <p className="text-primary text-sm font-medium mt-1">
                      {event.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {event.description}
                </p>

                <div className="space-y-3">
                  <h3 className="font-heading font-semibold text-foreground text-lg">
                    Event Highlights
                  </h3>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
                        <Button size="lg" className="group">
                          Visit E-Summit Website
                          <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                      </a>
                    ) : (
                      <Button size="lg">Learn More</Button>
                    )}
                  </div>
                )}
              </div>

              {/* Visual */}
              <div className="flex-1 w-full">
                <div className="bg-gradient-card rounded-2xl border border-border p-12 flex items-center justify-center min-h-[400px] shadow-lg">
                  <event.icon className="text-primary opacity-20" size={200} />
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
