import { motion } from 'framer-motion';
import { Sparkles, Users, Award, Target, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

// Enhanced TeamCard Component with Modern Design
const TeamCard = ({ name, role, email, phone, linkedinUrl, instagramUrl }) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative group w-full max-w-sm mx-auto"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border/40 group-hover:border-primary/40 shadow-xl overflow-hidden transition-all duration-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl" />
        </div>

        <div className="relative z-10">
          {/* Avatar with Floating Animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
            className="relative w-28 h-28 mx-auto mb-6"
          >
            {/* Avatar Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-card" />
            </div>
            
            {/* Avatar Content */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary/90 via-purple-500/90 to-pink-500/90 flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white tracking-tight">
                {initials}
              </span>
            </div>

            {/* Floating Sparkle */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Name */}
          <h3 className="font-heading text-2xl font-bold text-center mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">
            {name}
          </h3>

          {/* Role Badge */}
          <div className="flex justify-center mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 group-hover:border-primary/40 transition-all"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                {role}
              </span>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />

          {/* Contact Info */}
          <div className="space-y-3 mb-6">
            <motion.a
              whileHover={{ x: 5 }}
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group/item"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors truncate">
                {email}
              </span>
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href={`tel:${phone}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group/item"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-green-500" />
              </div>
              <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                {phone}
              </span>
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={linkedinUrl}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50 transition-shadow"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={instagramUrl}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg hover:shadow-pink-500/50 transition-shadow"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Section Header Component
const SectionHeader = ({ title, subtitle, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-20"
  >
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 mb-6 shadow-lg"
    >
      {Icon && <Icon className="w-10 h-10 text-primary" />}
    </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="font-heading text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
    >
      {title}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
    >
      {subtitle}
    </motion.p>
  </motion.div>
);

const Team = () => {
  const teamSections = [
    {
      title: 'Convener',
      icon: Target,
      members: [
        {
          name: 'Rohit Dane',
          role: 'Convener',
          email: 'rohit.dane23@vit.edu',
          phone: '+91 8668816853',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
      ],
    },
    {
      title: 'Advisory Board',
      icon: Award,
      members: [
        {
          name: 'Ishawar Borade',
          role: 'Chief Advisor',
          email: 'ishawar.borade22@vit.edu',
          phone: '+91 9156834407',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
        {
          name: 'Ashlesha Wagh',
          role: 'Chief Advisor',
          email: 'ashlesha.wagh22@vit.edu',
          phone: '+91 9422088506',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
        {
          name: 'Pratik Jadhav',
          role: 'Chief Advisor',
          email: 'pratik.jadhav22@vit.edu',
          phone: '+91 8080897812',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
      ],
    },
    {
      title: 'Chiefs',
      icon: Users,
      members: [
        {
          name: 'Siddhi Chollangi',
          role: 'Chief of Branding',
          email: 'siddhi.chollangi23@vit.edu',
          phone: '+91 9226270324',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
        {
          name: 'Rushabh Mane',
          role: 'Chief of Management',
          email: 'rushabh.mane23@vit.edu',
          phone: '+91 9175377652',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
        {
          name: 'Rajvee Pardeshi',
          role: 'Chief of Relations',
          email: 'rajvee.pardeshi23@vit.edu',
          phone: '+91 7218122005',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
      ],
    },
    {
      title: 'Liaisons',
      icon: Sparkles,
      members: [
        {
          name: 'Labhesh Pahade',
          role: 'Liaison of Branding',
          email: 'labhesh.pahade23@vit.edu',
          phone: '+91 9421340121',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
        {
          name: 'Atharva Khode',
          role: 'Liaison of Management',
          email: 'atharva.khode23@vit.edu',
          phone: '+91 8624004106',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
        {
          name: 'Aditya Inamdar',
          role: 'Liaison of Relations',
          email: 'aditya.inamdar23@vit.edu',
          phone: '+91 7410536280',
          linkedinUrl: '#',
          instagramUrl: '#',
        },
      ],
    },
    {
      title: 'Secretaries',
      icon: Users,
      members: [
        { name: 'Mahi Parmar', role: 'Secretary', email: 'mahi.parmar24@vit.edu', phone: '+91 7499978075', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Sayali Mashale', role: 'Aesthetics Secretary', email: 'sayali.mashale24@vit.edu', phone: '+91 9970891426', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Anshul Patidar', role: 'Corporate Relations Secretary', email: 'patidar.anshul24@vit.edu', phone: '+91 8770645003', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Ayush Deshmukh', role: 'Corporate Relations Secretary', email: 'avush.deshmukh24@vit.edu', phone: '+91 9304857932', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Jiya Rathod', role: 'Event Execution Secretary', email: 'jiya.rathod24@vit.edu', phone: '+91 9272116336', linkedinUrl: '#', instagramUrl: '#' },
        // { name: 'Pruthviraj Motade', role: 'Event Execution Secretary', email: 'pruthviraj.motade231@vit.edu', phone: '+91 8623845919', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Gaurang Bagwe', role: 'Secretary', email: 'gaurang.bagwe24@vit.edu', phone: '+91 8459250314', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Prem Deore', role: 'Finance Secretary', email: 'prem.deore23@vit.edu', phone: '+91 9359636423', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Akshat Mutha', role: 'Secretary', email: 'akshat.mutha24@vit.edu', phone: '+91 7972108827', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Gayatri Dhikale', role: 'Marketing and Outreach Secretary', email: 'gayatri.dhikale24@vit.edu', phone: '+91 8605573593', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Sanskriti Dhakar', role: 'Marketing and Outreach Secretary', email: 'sanskriti.dhakar24@vit.edu', phone: '+91 9981949981', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Aditi Kolhapure', role: 'Secretary', email: 'aditi.kolhapure24@vit.edu', phone: '+91 8484808122', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Anuj Pol', role: 'Multimedia and Design Secretary', email: 'anuj.pol24@vit.edu', phone: '+91 7020546889', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Omkar Patil', role: 'Multimedia and Design Secretary', email: 'niwas.omkar24@vit.edu', phone: '+91 9026233081', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Atharv Kulkarni', role: 'Operations and Venue Secretary', email: 'atharva.kulkarni24@vit.edu', phone: '+91 7066218925', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Ayush Gurav', role: 'Operations and Venue Secretary', email: 'ayush.gurav23@vit.edu', phone: '+91 8999281762', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Sanika Piraji', role: 'Public Relations Secretary', email: 'sanika.piraji241@vit.edu', phone: '+91 9881616930', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Utkarsh Sisodiya', role: 'Public Relations Secretary', email: 'utkarsh.sisodiya24@vit.edu', phone: '+91 9503326999', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Ritika Navghare', role: 'Research and Media Secretary', email: 'ritika.navghare24@vit.edu', phone: '+91 9370170173', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Shlok Borade', role: 'Research and Media Secretary', email: 'shlok.borade24@vit.edu', phone: '+91 9325084237', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Pujan Sonani', role: 'Secretary', email: 'pujan.sonani24@vit.edu', phone: '+91 9099282768', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Yash Nalawade', role: 'Sponsorship Secretary', email: 'yash.nalawade241@vit.edu', phone: '+91 9607484973', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Madhura Veer', role: 'Startup Connect Secretary', email: 'madhura.veer24@vit.edu', phone: '+91 9527963484', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Manas Parikh', role: 'Startup Connect Secretary', email: 'manas.parikh24@vit.edu', phone: '+91 9529767923', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Aditya Kale', role: 'Website and Broadcasting Secretary', email: 'aditya.kale23@vit.edu', phone: '+91 8766015040', linkedinUrl: '#', instagramUrl: '#' },
        { name: 'Shreyas Kudale', role: 'Website and Broadcasting Secretary', email: 'shreyas.kudale23@vit.edu', phone: '+91 9657550055', linkedinUrl: '#', instagramUrl: '#' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-background to-primary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Team"
          subtitle="Meet the passionate individuals driving V-EDC forward"
          icon={Users}
        />

        <div className="space-y-24">
          {teamSections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: sectionIndex * 0.1 }}
            >
              {/* Section Header */}
              <div className="flex flex-col items-center gap-4 mb-12">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center shadow-lg"
                >
                  <section.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent text-center"
                >
                  {section.title}
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>

              {/* Cards Grid - CENTERED FOR ALL LAYOUTS */}
              <div className="flex justify-center">
                <div
                  className={`grid gap-8 w-full ${
                    section.members.length === 1
                      ? 'max-w-sm'
                      : section.members.length === 2
                      ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl'
                      : section.members.length === 3
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  }`}
                >
                  {section.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.8, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: memberIndex * 0.05,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      <TeamCard {...member} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20" />
          
          <div className="relative bg-gradient-to-br from-card/90 via-card to-card/90 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-border/50 shadow-2xl overflow-hidden">
            {/* Animated Background Shapes */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
            />

            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex mx-auto mb-6 p-4 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="font-heading text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Want to Join Our Team?
              </h3>
              <p className="text-muted-foreground text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                We're always looking for passionate students to join V-EDC.
                Be part of building the entrepreneurial ecosystem at VIT Pune.
              </p>
              
              <div className="flex justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity" />
                  <button className="relative bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl flex items-center gap-3 overflow-hidden">
                    <span className="relative z-10">Get in Touch</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10 text-xl"
                    >
                      →
                    </motion.span>
                  </button>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;