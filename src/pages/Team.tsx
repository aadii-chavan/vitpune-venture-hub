import { motion, useMotionValue } from 'framer-motion';
import { Mail, Phone, Shield, Activity } from 'lucide-react';

// Import team photos
import gayatriPhoto from '../assets/team/gayatri.jpg';
import sanskritiPhoto from '../assets/team/sanskriti.jpg';
import akshatPhoto from '../assets/team/akshat.jpg';
import yashPhoto from '../assets/team/yash.jpg';
import pujanPhoto from '../assets/team/pujan.png';
import adityaPhoto from '../assets/team/aditya.jpg';
import shreyasPhoto from '../assets/team/shreyas.jpg';
import ayushPhoto from '../assets/team/Ayush_G.jpg';
import sanikaPhoto from '../assets/team/Sanika Piraji .jpg';
import utkarshPhoto from '../assets/team/Utkarsh Sisodiya .jpg';
import finance from '../assets/team/fianance.jpg';
import sayaliPhoto from '../assets/team/Sayali Mashale .jpg';
import cor from '../assets/team/Anshul.jpg';
import cor2 from '../assets/team/we.jpg';

const AvengersCard = ({ name, role, email, phone, linkedinUrl, image }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group p-[1px] bg-cyan-950/30 overflow-hidden rounded-bl-3xl rounded-tr-3xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-500 w-full"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-20" />
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500 opacity-50" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500 opacity-50" />

      <div className="relative z-10 p-5 bg-slate-950/80 backdrop-blur-xl h-full flex flex-col">
        <div className="relative w-full aspect-square mb-4 overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
          <div className="absolute inset-0 z-20 pointer-events-none group-hover:bg-cyan-500/10 transition-all" />
          
          <motion.div 
            style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
            className="absolute z-30 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
          </motion.div>

          {image ? (
            <img 
              src={image} 
              alt={name} 
              /* REMOVED grayscale and group-hover:grayscale-0 */
              className="w-full h-full object-cover contrast-125 transition-all duration-700" 
            />
          ) : (
            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
               <Shield className="w-12 h-12 text-cyan-900" />
            </div>
          )}
        </div>

        <div className="space-y-1 flex-grow">
          <div className="flex items-center gap-2">
            <Activity size={10} className="text-cyan-500 animate-pulse" />
            <span className="text-[9px] font-mono text-cyan-500/70 tracking-tighter uppercase">Link Active</span>
          </div>
          <h3 className="text-lg font-black text-white uppercase tracking-tighter group-hover:text-cyan-300 transition-colors leading-tight">
            {name}
          </h3>
          <div className="inline-block py-0.5 px-2 bg-cyan-500/10 border border-cyan-500/30 text-[8px] font-mono text-cyan-400 uppercase tracking-widest">
            {role}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-1">
          <a href={`mailto:${email}`} className="col-span-1 h-8 flex items-center justify-center border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all">
            <Mail size={12} />
          </a>
          <a href={`tel:${phone}`} className="col-span-1 h-8 flex items-center justify-center border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all">
            <Phone size={12} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 h-8 flex items-center justify-center gap-1 border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all font-mono text-[8px] uppercase">
             CONNECT
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamSections = [
    { title: 'The Leaders', members: [
      { name: 'Rohit Dane', role: 'Convener', email: 'rohit.dane23@vit.edu', phone: '+91 8668816853', linkedinUrl: '#' },
      { name: 'Ishawar Borade', role: 'Honorary Convener', email: 'ishawar.borade22@vit.edu', phone: '+91 9156834407', linkedinUrl: '#' }
    ]},
    { title: 'The Advisors', members: [
      { name: 'Ashlesha Wagh', role: 'Chief Advisor', email: 'ashlesha.wagh22@vit.edu', phone: '+91 9422088506', linkedinUrl: '#' },
      { name: 'Pratik Jadhav', role: 'Chief Advisor', email: 'pratik.jadhav22@vit.edu', phone: '+91 8080897812', linkedinUrl: '#' },
    ]},
    { title: 'The Chiefs', members: [
      { name: 'Siddhi Chollangi', role: 'Chief of Branding', email: 'siddhi.chollangi23@vit.edu', phone: '+91 9226270324', linkedinUrl: '#' },
      { name: 'Rushabh Mane', role: 'Chief of Management', email: 'rushabh.mane23@vit.edu', phone: '+91 9175377652', linkedinUrl: '#' },
      { name: 'Rajvee Pardeshi', role: 'Chief of Relations', email: 'rajvee.pardeshi23@vit.edu', phone: '+91 7218122005', linkedinUrl: '#' },
    ]},
    { title: 'Liasons', members: [
      { name: 'Labhesh Pahade', role: 'Liaison of Branding', email: 'labhesh.pahade23@vit.edu', phone: '+91 9421340121', linkedinUrl: '#' },
      { name: 'Atharva Khode', role: 'Liaison of Management', email: 'atharva.khode23@vit.edu', phone: '+91 8624004106', linkedinUrl: '#' },
      { name: 'Aditya Inamdar', role: 'Liaison of Relations', email: 'aditya.inamdar23@vit.edu', phone: '+91 7410536280', linkedinUrl: '#' },
    ]},
    { title: 'The Core Team', members: [
      { name: 'Sayali Mashale', role: 'Aesthetics Secretary', email: 'sayali.mashale24@vit.edu', phone: '+91 9970891426', image: sayaliPhoto },
      { name: 'Anshul Patidar', role: 'CR Secretary', email: 'patidar.anshul24@vit.edu', phone: '+91 8770645003', image: cor },
      { name: 'Ayush Deshmukh', role: 'CR Secretary', email: 'avush.deshmukh24@vit.edu', phone: '+91 9304857932', image: cor2 },
      { name: 'Jiya Rathod', role: 'Execution Secretary', email: 'jiya.rathod24@vit.edu', phone: '+91 9272116336' },
      { name: 'Gaurang Bagwe', role: 'Secretary', email: 'gaurang.bagwe24@vit.edu', phone: '+91 8459250314', image:finance },
      { name: 'Akshat Mutha', role: 'Secretary', email: 'akshat.mutha24@vit.edu', phone: '+91 7972108827', image: akshatPhoto },
      { name: 'Gayatri Dhikale', role: 'Marketing Secretary', email: 'gayatri.dhikale24@vit.edu', phone: '+91 8605573593', image: gayatriPhoto },
      { name: 'Sanskriti Dhakar', role: 'Marketing Secretary', email: 'sanskriti.dhakar24@vit.edu', phone: '+91 9981949981', image: sanskritiPhoto },
      { name: 'Aditi Kolhapure', role: 'Design Secretary', email: 'aditi.kolhapure24@vit.edu', phone: '+91 8484808122' },
      { name: 'Anuj Pol', role: 'Design Secretary', email: 'anuj.pol24@vit.edu', phone: '+91 7020546889' },
      { name: 'Omkar Patil', role: 'Design Secretary', email: 'niwas.omkar24@vit.edu', phone: '+91 9026233081' },
      { name: 'Ayush Gurav', role: 'Operations Secretary', email: 'ayush.gurav23@vit.edu', phone: '+91 8999281762', image: ayushPhoto },
      { name: 'Sanika Piraji', role: 'PR Secretary', email: 'sanika.piraji241@vit.edu', phone: '+91 9881616930', image: sanikaPhoto },
      { name: 'Utkarsh Sisodiya', role: 'PR Secretary', email: 'utkarsh.sisodiya24@vit.edu', phone: '+91 9503326999', image: utkarshPhoto },
      { name: 'Ritika Navghare', role: 'Media Secretary', email: 'ritika.navghare24@vit.edu', phone: '+91 9370170173' },
      { name: 'Shlok Borade', role: 'Media Secretary', email: 'shlok.borade24@vit.edu', phone: '+91 9325084237' },
      { name: 'Pujan Sonani', role: 'Sponsorship Secretary', email: 'pujan.sonani24@vit.edu', phone: '+91 9099282768', image: pujanPhoto },
      { name: 'Yash Nalawade', role: 'Sponsorship Secretary', email: 'yash.nalawade241@vit.edu', phone: '+91 9607484973', image: yashPhoto },
      { name: 'Madhura Veer', role: 'Connect Secretary', email: 'madhura.veer24@vit.edu', phone: '+91 9527963484' },
      { name: 'Manas Parikh', role: 'Connect Secretary', email: 'manas.parikh24@vit.edu', phone: '+91 9529767923' },
      { name: 'Aditya Kale', role: 'Website Secretary', email: 'aditya.kale23@vit.edu', phone: '+91 8766015040', image: adityaPhoto },
      { name: 'Shreyas Kudale', role: 'Website Secretary', email: 'shreyas.kudale23@vit.edu', phone: '+91 9657550055', image: shreyasPhoto },
    ]},
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="fixed inset-0 pointer-events-none opacity-40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] border-[1px] border-cyan-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-20 relative">
        <header className="mb-20 text-center">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="inline-flex items-center justify-center w-16 h-16 border-2 border-cyan-500 rounded-full mb-6">
             <Shield className="w-8 h-8 text-cyan-500" />
          </motion.div>
          <h1 className="text-4xl sm:text-7xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-800">
            Team Assemble
          </h1>
          <p className="text-cyan-500 font-mono text-xs tracking-widest mt-4 uppercase">Operational Command 2025-26</p>
        </header>

        <div className="space-y-24">
          {teamSections.map((section) => (
            <section key={section.title}>
              <div className="flex items-center gap-3 mb-12">
                <div className="h-px flex-1 bg-cyan-900" />
                <h2 className="text-xl sm:text-3xl font-black italic uppercase tracking-widest text-cyan-400">
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-cyan-900" />
              </div>

              {/* Conditional Layout: Grid for Core Team, Flex-Centered for others */}
              <div className={
                section.title === 'The Core Team' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
                : "flex flex-wrap justify-center gap-6"
              }>
                {section.members.map((member) => (
                  <div key={member.name} className={section.title === 'The Core Team' ? "w-full" : "w-full max-w-[280px]"}>
                    <AvengersCard {...member} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <motion.div className="mt-32 p-8 border-2 border-cyan-500 bg-slate-950 text-center relative">
          <h2 className="text-3xl sm:text-6xl font-black italic uppercase text-white mb-6">Access the Initiative</h2>
          <a href="/contact" className="inline-block px-8 py-4 bg-cyan-500 text-black font-black uppercase hover:bg-white transition-all transform skew-x-[-12deg]">
            Deploy Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;