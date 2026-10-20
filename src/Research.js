import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useLang } from './LanguageContext';

const base = process.env.PUBLIC_URL;

// Liens et photos de la conférence (non traduits). Renseigner ieeeXplore dès que l'article est indexé.
const paperMeta = {
  certificate: `${base}/conference/cymaen26-certificat.pdf`,
  ieeeXplore: null,
  photos: [`${base}/conference/cymaen26-presentation.jpg`, `${base}/conference/cymaen26-groupe.jpg`],
};

const Research = () => {
  const { t } = useLang();
  const r = t.research;
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <section id="research" className="pt-24 relative bg-black px-6 py-20 text-white">
      <div ref={ref}>
        {/* Grand titre en arrière-plan */}
        <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-[60px] md:text-[120px] text-gray-500 opacity-5 font-bold z-0 pointer-events-none select-none whitespace-nowrap">
          {r.title.toUpperCase()}
        </h2>

        {/* Titre animé */}
        <motion.h1
          className="relative text-4xl md:text-6xl font-bold text-center mb-16 z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {r.title}
        </motion.h1>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto border border-indigo-600 rounded-lg bg-black shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-shadow duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Texte */}
            <div className="p-6 md:p-8 flex flex-col text-left">
              <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700 text-indigo-200">
                {r.badge}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">{r.paperTitle}</h3>

              <p className="text-gray-400 mt-3 text-sm">{r.conference}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-gray-300">
                <span className="flex items-center gap-2"><FaCalendarAlt className="text-indigo-400" /> {r.dates}</span>
                <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-400" /> {r.place}</span>
              </div>

              <p className="text-gray-300 mt-5 leading-relaxed">{r.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {r.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-indigo-900/40 border border-indigo-700 text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-gray-800">
                <a
                  href={paperMeta.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[oklch(30%_0.15_268)] text-white text-sm font-semibold hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-all duration-300"
                >
                  <FaCertificate /> {r.certificate}
                </a>
                {paperMeta.ieeeXplore && (
                  <a
                    href={paperMeta.ieeeXplore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded border border-white text-white text-sm font-semibold hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> IEEE Xplore
                  </a>
                )}
              </div>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-1 gap-1 bg-gray-900">
              {paperMeta.photos.map((src, i) => (
                <figure key={src} className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={r.photoCaptions[i]}
                    loading="lazy"
                    className="w-full h-56 md:h-64 object-cover"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 pt-8 pb-3 text-sm text-gray-200">
                    {r.photoCaptions[i]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
