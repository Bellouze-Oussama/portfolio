import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import { useLang } from './LanguageContext';

const Contact = () => {
  const { t } = useLang();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 });

  const contactCards = [
    { icon: <FaEnvelope size={28} />, label: 'Email', value: 'bellouzeoussama06@gmail.com', href: 'mailto:bellouzeoussama06@gmail.com' },
    { icon: <FaPhone size={28} />, label: t.contact.phone, value: '+213 657 96 68 24', href: 'tel:+213657966824' },
    { icon: <FaLinkedin size={28} />, label: 'LinkedIn', value: 'oussama-bellouze', href: 'https://www.linkedin.com/in/oussama-bellouze-5a7936220' },
    { icon: <FaGithub size={28} />, label: 'GitHub', value: 'Bellouze-Oussama', href: 'https://github.com/Bellouze-Oussama' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20"
    >
      <div className="pt-12 w-full max-w-5xl">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4"
        >
          {t.contact.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-md md:text-lg text-center max-w-2xl mx-auto mb-12"
        >
          {t.contact.intro}
        </motion.p>

        {/* Grille des 4 contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {contactCards.map((card, idx) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 + idx * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-5 p-5 rounded-lg bg-indigo-900/20 border border-indigo-700 hover:bg-indigo-900/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[oklch(30%_0.15_268)] text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-xs text-indigo-300 uppercase tracking-wide font-semibold">
                  {card.label}
                </p>
                <p className="text-white text-sm md:text-base truncate group-hover:text-indigo-200 transition-colors">
                  {card.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Localisation centrée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mt-10 text-gray-400"
        >
          <FaMapMarkerAlt size={18} />
          <span>{t.contact.location}</span>
        </motion.div>

        {/* CTA principal : envoyer un email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <a
            href="mailto:bellouzeoussama06@gmail.com?subject=Opportunité%20-%20AI%20Engineer&body=Bonjour%20Oussama%2C%0A%0A"
            className="flex items-center gap-3 px-8 py-3 rounded-lg bg-white text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]"
          >
            <FaPaperPlane />
            {t.contact.sendEmail}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
