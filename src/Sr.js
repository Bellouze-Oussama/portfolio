import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBrain, FaChartLine, FaDatabase, FaCode, FaChartBar } from 'react-icons/fa';
import { useLang } from './LanguageContext';

const iconMap = {
  brain: <FaBrain size={30} className="text-indigo-400" />,
  line: <FaChartLine size={30} className="text-indigo-400" />,
  code: <FaCode size={30} className="text-indigo-400" />,
  database: <FaDatabase size={30} className="text-indigo-400" />,
  bar: <FaChartBar size={30} className="text-indigo-400" />,
};

const Services = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-b from-[oklch(30%_0.15_268)] to-black text-white px-6 md:px-16"
    >
      <div className="pt-24 flex flex-col w-full max-w-6xl mx-auto gap-10">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center"
        >
          {t.skills.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-md md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
        >
          {t.skills.intro}
        </motion.p>

        {/* Grille des skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {t.skills.categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="border border-indigo-600 p-6 rounded-lg bg-black text-white shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.7)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {iconMap[cat.icon]}
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-700 text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mt-8"
        >
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
          >
            {t.skills.viewProjects}
          </a>
          <a
            href="/cv.pdf"
            download
            className="border border-white px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
          >
            {t.skills.downloadCV}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
