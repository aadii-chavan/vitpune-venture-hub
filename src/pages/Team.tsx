import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import TeamCard from '@/components/TeamCard';

const Team = () => {
  const teamSections = [
    {
      title: 'Convener',
      members: [
        { name: 'Dr. Faculty Name', role: 'Faculty Convener' },
      ],
    },
    {
      title: 'Advisory Board',
      members: [
        { name: 'Prof. Advisory Member 1', role: 'Senior Advisor' },
        { name: 'Prof. Advisory Member 2', role: 'Technical Advisor' },
      ],
    },
    {
      title: 'Chiefs',
      members: [
        { name: 'Student Chief 1', role: 'Chief - Operations' },
        { name: 'Student Chief 2', role: 'Chief - Events' },
        { name: 'Student Chief 3', role: 'Chief - Marketing' },
        { name: 'Student Chief 4', role: 'Chief - Sponsorship' },
      ],
    },
    {
      title: 'Liaisons',
      members: [
        { name: 'Liaison Member 1', role: 'Technical Liaison' },
        { name: 'Liaison Member 2', role: 'Content Liaison' },
        { name: 'Liaison Member 3', role: 'Design Liaison' },
        { name: 'Liaison Member 4', role: 'Outreach Liaison' },
        { name: 'Liaison Member 5', role: 'Finance Liaison' },
        { name: 'Liaison Member 6', role: 'Events Liaison' },
      ],
    },
    {
      title: 'Secretaries',
      members: [
        { name: 'Secretary 1', role: 'Operations Secretary' },
        { name: 'Secretary 2', role: 'Events Secretary' },
        { name: 'Secretary 3', role: 'Marketing Secretary' },
        { name: 'Secretary 4', role: 'Technical Secretary' },
        { name: 'Secretary 5', role: 'Design Secretary' },
        { name: 'Secretary 6', role: 'Content Secretary' },
        { name: 'Secretary 7', role: 'Finance Secretary' },
        { name: 'Secretary 8', role: 'Sponsorship Secretary' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Team"
          subtitle="Meet the passionate individuals driving V-EDC forward"
          centered
        />

        <div className="space-y-16">
          {teamSections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                {section.title}
              </h2>

              <div
                className={`grid gap-6 ${
                  section.members.length === 1
                    ? 'grid-cols-1 max-w-xs mx-auto'
                    : section.members.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                    : section.members.length <= 4
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}
              >
                {section.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: memberIndex * 0.05,
                    }}
                  >
                    <TeamCard {...member} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-card rounded-2xl p-12 border border-border"
        >
          <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            We're always looking for passionate students to join V-EDC. 
            Be part of building the entrepreneurial ecosystem at VIT Pune.
          </p>
          <a href="/contact" className="inline-block">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-glow">
              Get in Touch
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
