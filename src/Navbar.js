import React, { useState, useEffect } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useLang } from "./LanguageContext";

const sections = ["home", "about", "projects", "skills", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetHeight = section.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black shadow-md">
      <div className="flex justify-between items-center px-4 md:px-8 py-2">
        {/* Logo */}
        <div className="flex items-center font-bold text-xl">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full text-white"
            style={{ backgroundColor: "oklch(30% 0.15 268)" }}
          >
            P
          </div>
          <span className="text-white -ml-0.5">ortfolio</span>
        </div>

        {/* Liens desktop */}
        <ul className="hidden md:flex gap-3 lg:gap-6 font-bold text-white">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`px-3 lg:px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === section
                    ? "bg-[oklch(30%_0.15_268)] shadow-[0_0_30px_10px_oklch(30%_0.15_268)]"
                    : "hover:bg-[oklch(30%_0.15_268)] hover:shadow-[0_0_30px_10px_oklch(30%_0.15_268)]"
                }`}
              >
                {t.nav[section]}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions droite : langue + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Changer de langue"
            className="flex items-center gap-2 px-3 py-2 rounded-md border border-indigo-500 text-white font-bold text-sm hover:bg-[oklch(30%_0.15_268)] hover:shadow-[0_0_20px_rgba(99,102,241,0.7)] transition-all duration-300"
          >
            <FaGlobe />
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* Bouton hamburger (mobile uniquement) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden text-white text-2xl p-1"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu déroulant mobile */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black border-t border-indigo-900 px-4 pb-4 font-bold text-white">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-md transition-all duration-200 ${
                  activeSection === section
                    ? "bg-[oklch(30%_0.15_268)]"
                    : "hover:bg-[oklch(30%_0.15_268)]"
                }`}
              >
                {t.nav[section]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
