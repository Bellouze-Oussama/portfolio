import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLang } from './LanguageContext';

const Footer = () => {
  const { t } = useLang();
  const year = 2026;

  return (
    <footer className="bg-black text-white py-8 px-6 border-t border-indigo-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo + nom */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[oklch(30%_0.15_268)] text-white font-bold text-sm">
            O
          </div>
          <span className="text-sm">
            Oussama BELLOUZE · {t.footer.role}
          </span>
        </div>

        {/* Liens sociaux */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:bellouzeoussama06@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-indigo-300 transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="tel:+213657966824"
            aria-label="Phone"
            className="text-gray-400 hover:text-indigo-300 transition-colors"
          >
            <FaPhone size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/oussama-bellouze-5a7936220"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-indigo-300 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Bellouze-Oussama"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-indigo-300 transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {year} Oussama BELLOUZE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
