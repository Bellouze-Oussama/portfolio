import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBullseye } from 'react-icons/fa';
import { useLang } from './LanguageContext';

const About = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.15 });

  const experiences = t.about.experiences;
  const formations = t.about.formations;

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black to-[oklch(30%_0.15_268)] text-white px-6 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto pt-12">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4"
        >
          {t.about.title}
        </motion.h1>

        {/* Description perso */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-md md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12"
        >
          {t.about.intro}
        </motion.p>

        {/* Objectif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border border-indigo-600 rounded-lg p-6 bg-black/40 mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <FaBullseye size={28} className="text-indigo-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">{t.about.lookingTitle}</h3>
              <p className="text-gray-300 leading-relaxed">{t.about.lookingText}</p>
            </div>
          </div>
        </motion.div>

        {/* Expériences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <FaBriefcase size={28} className="text-indigo-400" />
            <h2 className="text-2xl md:text-3xl font-bold">{t.about.expTitle}</h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                className="border-l-4 border-indigo-600 pl-6 py-4 bg-black/40 rounded-r-lg"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-indigo-300 font-semibold">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-900/40 border border-indigo-700 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <FaGraduationCap size={28} className="text-indigo-400" />
            <h2 className="text-2xl md:text-3xl font-bold">{t.about.eduTitle}</h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {formations.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.7 + idx * 0.15, duration: 0.5 }}
                className="border-l-4 border-indigo-600 pl-6 py-3 bg-black/40 rounded-r-lg"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="text-indigo-300 text-sm">{f.school}</p>
                    <p className="text-gray-400 text-sm mt-1">{f.detail}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap md:ml-4">{f.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 rounded-lg bg-white text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]"
          >
            {t.about.downloadCV}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
