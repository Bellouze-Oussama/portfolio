import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBullseye } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: 'Stagiaire IA',
    company: 'BigNova',
    location: 'Béjaïa, Algérie',
    period: 'Novembre 2025',
    description:
      "Conception et développement de DZ Edu RAG, un assistant pédagogique RAG pour le programme de Français Terminale 3AS algérien. Implémentation d'une recherche hybride BM25 + vectorielle (Qdrant) avec fusion RRF. Intégration de Llama 3.3 70B via Groq, CamemBERT et MXBAI pour les embeddings. Mise en place d'un validateur d'exercices automatique.",
    tags: ['Python', 'FastAPI', 'Streamlit', 'Qdrant', 'Groq', 'RAG'],
  },
  {
    id: 2,
    role: 'Stagiaire Développeur Front-End',
    company: 'Wyze Academy',
    location: 'France (à distance)',
    period: 'Juin – Août 2025',
    description:
      "Développement d'une plateforme de formation en ligne en équipe agile. Intégration des maquettes Figma en composants React et Next.js avec animations Framer Motion et GSAP. Collaboration distante avec une équipe française.",
    tags: ['React', 'Next.js', 'Framer Motion', 'GSAP', 'Figma'],
  },
];

const formations = [
  {
    id: 1,
    title: 'Master 2 — Intelligence Artificielle',
    school: 'Université Abderrahmane Mira, Béjaïa',
    period: '2025 – 2026',
    detail: 'En cours · Soutenance prévue juin 2026 · Mémoire sur la classification de la rétinopathie diabétique par apprentissage fédéré',
  },
  {
    id: 2,
    title: 'Master 1 — Intelligence Artificielle',
    school: 'Université Abderrahmane Mira, Béjaïa',
    period: '2024 – 2025',
    detail: "Apprentissage supervisé / non supervisé · Algorithmes de classification et régression · Initiation Computer Vision",
  },
  {
    id: 3,
    title: 'Cisco Certified Network Associate (CCNA)',
    school: 'Institut International de Management, Béjaïa',
    period: '2024 – 2025',
    detail: 'Réseaux · TCP/IP · Routing & switching · Sécurité réseau',
  },
  {
    id: 4,
    title: 'Licence — Systèmes Informatiques',
    school: 'Université Abderrahmane Mira, Béjaïa',
    period: '2021 – 2024',
    detail: "PFE : Application mobile de suivi du diabète (Flutter + SQLite)",
  },
  {
    id: 5,
    title: 'Baccalauréat — Sciences Expérimentales',
    school: 'Lycée Chahid Slimane BERKAT, Kherrata',
    period: '2020 – 2021',
    detail: 'Mention bien · 15.70/20',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.15 });

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
          About me
        </motion.h1>

        {/* Description perso */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-md md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12"
        >
          Étudiant en Master 2 Intelligence Artificielle à l'Université Abderrahmane Mira de Béjaïa (soutenance juin 2026), passionné par les LLMs, les agents IA et le Machine Learning. Je conçois des systèmes RAG production-ready, des agents autonomes multi-tools et des pipelines de détection en temps réel.
          Mon mémoire combine Computer Vision médicale et Federated Learning pour la classification de la rétinopathie diabétique.
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
              <h3 className="text-xl font-bold mb-2">Ce que je cherche</h3>
              <p className="text-gray-300 leading-relaxed">
                Un <span className="text-white font-semibold">premier poste en AI / LLM Engineering</span> ou <span className="text-white font-semibold">ML Engineering</span>, idéalement <span className="text-white font-semibold">en remote</span> pour une entreprise française, européenne francophone ou maghrébine.
                Disponible à partir de <span className="text-white font-semibold">juin 2026</span>, ouvert au stage de fin d'études dès maintenant.
              </p>
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
            <h2 className="text-2xl md:text-3xl font-bold">Expériences</h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
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
            <h2 className="text-2xl md:text-3xl font-bold">Formations</h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {formations.map((f, idx) => (
              <motion.div
                key={f.id}
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
            Télécharger mon CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
