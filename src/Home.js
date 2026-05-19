import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profilePic from './assets/profil1.jpg';
import CountUp from 'react-countup';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.4, duration: 0.9 },
  }),
};

const nameVariants = {
  hidden: {
    opacity: 0,
    rotateX: 180,
    scale: 0.9,
    transformOrigin: 'top center',
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1.1,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="pt-24 min-h-screen flex items-center bg-gradient-to-b from-[oklch(30%_0.15_268)] to-black px-6 md:px-12 text-white"
    >
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-between items-center gap-10">
        {/* Colonne gauche */}
        <div className="w-full md:w-1/2 space-y-6">
          <motion.p
            className="text-xl md:text-2xl font-medium"
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            Hello, I am
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-oswald font-bold"
            variants={nameVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
          >
            Bellouze Oussama
          </motion.h1>

          <motion.div
            className="space-y-3 max-w-xl"
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            <p className="text-lg md:text-xl text-indigo-200 font-semibold">
              AI / LLM Engineer Junior · Master 2 IA
            </p>
            <p className="text-md md:text-lg text-gray-300 leading-relaxed">
              Je conçois des systèmes <span className="text-white font-medium">RAG</span>, des <span className="text-white font-medium">agents IA</span> et des pipelines de <span className="text-white font-medium">Machine Learning</span>.
              Mémoire en cours sur la classification d'images médicales par apprentissage fédéré.
            </p>
            <p className="text-sm md:text-base text-gray-400">
              Disponible pour un premier poste en remote dès juin 2026.
            </p>
          </motion.div>

          {/* Statistiques honnêtes */}
          <motion.div
            className="mt-10 px-6 py-4 rounded-lg bg-gradient-to-r from-indigo-900 to-black text-white flex flex-row justify-between items-center w-full max-w-3xl gap-6 shadow-lg"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                <CountUp end={4} duration={2.5} suffix="+" enableScrollSpy />
              </span>
              <span className="text-sm">Projets IA</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                <CountUp end={2} duration={2.5} enableScrollSpy />
              </span>
              <span className="text-sm">Stages</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                <CountUp end={15} duration={2.5} suffix="+" enableScrollSpy />
              </span>
              <span className="text-sm">Technos maîtrisées</span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.8 } },
            }}
          >
            <a
              href="#projects"
              className="px-6 py-2 rounded-lg bg-white text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
            >
              Voir mes projets
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-2 rounded-lg border border-white text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
            >
              Télécharger CV
            </a>
            <a
              href="https://github.com/Bellouze-Oussama"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg border border-white text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Colonne droite : image */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.8 } },
          }}
          className="w-full md:w-1/2 flex justify-center md:justify-end flex-shrink-0 mt-10 md:mt-0"
        >
          <div className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[480px] md:w-[450px] md:h-[560px] lg:w-[500px] lg:h-[620px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.4)] border-4 border-white">
            <img
              src={profilePic}
              alt="Bellouze Oussama"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
