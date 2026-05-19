import React, { useState, useEffect } from "react";

const sections = ["home", "about", "projects", "skills", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    handleScroll(); // pour définir la section active au premier chargement

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-8 py-2 bg-black shadow-md">
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

      {/* Liens de navigation */}
      <ul className="hidden md:flex gap-6 font-bold text-white">
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
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
