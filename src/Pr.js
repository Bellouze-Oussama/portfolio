import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLang } from './LanguageContext';

// Métadonnées non traduites (liens + style), fusionnées par index avec le contenu traduit.
const projectMeta = [
  { gradient: 'from-teal-900 to-cyan-900', github: null, demo: 'https://bellouze-oussama.github.io/portfolio/email-ia.html' },
  { gradient: 'from-rose-900 to-pink-900', github: null, demo: 'https://bellouze-oussama.github.io/portfolio/dz-boutique/' },
  { gradient: 'from-violet-900 to-indigo-900', github: 'https://github.com/Bellouze-Oussama/dz-edu-rag', demo: null },
  { gradient: 'from-blue-900 to-cyan-900', github: 'https://github.com/Bellouze-Oussama/transport-ai-agent', demo: null },
  { gradient: 'from-emerald-900 to-teal-900', github: 'https://github.com/Bellouze-Oussama/bank-fraud-detection', demo: null },
  { gradient: 'from-fuchsia-900 to-pink-900', github: 'https://github.com/Bellouze-Oussama/projet-detection-anomalies', demo: null },
];

const Projects = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  const projects = t.projects.items.map((p, i) => ({ ...p, ...projectMeta[i] }));

  return (
    <section id="projects" className="pt-24 relative min-h-screen bg-black px-6 py-20 text-white">
      <div ref={ref}>
        {/* Grand titre en arrière-plan */}
        <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-[60px] md:text-[120px] text-gray-500 opacity-5 font-bold z-0 pointer-events-none select-none whitespace-nowrap">
          {t.projects.title.toUpperCase()}
        </h2>

        {/* Titre animé */}
        <motion.h1
          className="relative text-4xl md:text-6xl font-bold text-center mb-16 z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {t.projects.title}
        </motion.h1>

        {/* Grille des projets */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="group border border-indigo-600 rounded-lg bg-black shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-transform duration-300 hover:scale-[1.02] overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 + idx * 0.15, duration: 0.6 }}
            >
              {/* Header avec gradient + emoji */}
              <div className={`bg-gradient-to-br ${proj.gradient} h-32 flex items-center justify-center`}>
                <span className="text-6xl">{proj.emoji}</span>
              </div>

              {/* Contenu */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed">{proj.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-900/40 border border-indigo-700 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Boutons */}
                <div className="flex gap-3 mt-5 pt-4 border-t border-gray-800">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded bg-[oklch(30%_0.15_268)] text-white text-sm font-semibold hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-all duration-300"
                    >
                      <FaGithub /> {t.projects.code}
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded border border-white text-white text-sm font-semibold hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-all duration-300"
                    >
                      <FaExternalLinkAlt /> {t.projects.demo}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
