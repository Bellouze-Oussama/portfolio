import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { useLang } from "./LanguageContext";

const sections = ["home", "about", "projects", "skills", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
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
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-6 md:px-8 py-2 bg-black shadow-md">
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

      {/* Liens de navigation + bouton langue */}
      <div className="flex items-center gap-4">
        <ul className="hidden md:flex gap-4 lg:gap-6 font-bold text-white">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
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

        {/* Bouton bascule de langue FR / EN */}
        <button
          onClick={toggle}
          aria-label="Changer de langue"
          className="flex items-center gap-2 px-3 py-2 rounded-md border border-indigo-500 text-white font-bold text-sm hover:bg-[oklch(30%_0.15_268)] hover:shadow-[0_0_20px_rgba(99,102,241,0.7)] transition-all duration-300"
        >
          <FaGlobe />
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
