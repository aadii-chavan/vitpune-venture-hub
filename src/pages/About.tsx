import { motion } from 'framer-motion';
import { Award, Users, Rocket, Target } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const About = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'V-EDC was established with a vision to promote entrepreneurship culture at VIT Pune.',
    },
    {
      year: '2019',
      title: 'First E-Summit',
      description: 'Successfully organized the inaugural E-Summit with participation from 500+ students.',
    },
    {
      year: '2020',
      title: 'Startup Incubation',
      description: 'Launched mentorship programs helping students develop and launch their startups.',
    },
    {
      year: '2021',
      title: 'Industry Partnerships',
      description: 'Forged strategic partnerships with leading corporates and venture capitalists.',
    },
    {
      year: '2022',
      title: 'National Recognition',
      description: 'V-EDC recognized as one of the leading entrepreneurship cells in Maharashtra.',
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Grew to over 500 active members and launched multiple new initiatives.',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Award-Winning Events',
      description: 'Organized 100+ events including workshops, competitions, and speaker sessions.',
    },
    {
      icon: Users,
      title: 'Strong Community',
      description: 'Built a network of 500+ student entrepreneurs and mentors across industries.',
    },
    {
      icon: Rocket,
      title: 'Startup Success',
      description: 'Mentored 50+ startups, with several securing funding and growing successfully.',
    },
    {
      icon: Target,
      title: 'Strategic Initiatives',
      description: 'Launched programs like Earn & Sell, E-Summit, and Awareness Drives to foster entrepreneurship.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <SectionHeader
            title="Who We Are"
            subtitle="Building the entrepreneurial ecosystem at VIT Pune"
            centered
          />
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The Entrepreneurship Development Council (V-EDC) at VIT Pune is a student-driven organization 
              dedicated to fostering innovation, creativity, and entrepreneurial thinking. We believe that 
              every student has the potential to create something remarkable, and we're here to provide the 
              platform, resources, and community to make it happen.
            </p>
            <p>
              Since our inception, V-EDC has been at the forefront of promoting startup culture within the 
              campus. Through workshops, mentorship programs, networking events, and competitions, we empower 
              students to transform their ideas into viable businesses. Our mission is not just to create 
              entrepreneurs, but to build a sustainable ecosystem where innovation thrives.
            </p>
            <p>
              We collaborate with industry leaders, successful entrepreneurs, and investors to provide 
              real-world insights and opportunities to our members. Whether you're an aspiring entrepreneur 
              or simply curious about the startup world, V-EDC welcomes you to be part of this exciting journey.
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <section className="mb-20">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones that shaped V-EDC"
            centered
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 shadow-md">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow">
                      <span className="font-heading font-bold text-sm text-primary-foreground">
                        {milestone.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <SectionHeader
            title="Key Achievements"
            subtitle="What we've accomplished together"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-glow group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
