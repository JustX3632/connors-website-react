// Nav component – dark mode only (light mode removed)
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  FlaskConical,
  Briefcase,
  BookOpen,
  FileText,
  Heart,
  Newspaper,
} from "lucide-react"; // Sun and Moon icons removed as theme toggle is disabled

export default function Nav(): JSX.Element {
  // Theme is forced to dark mode via main.tsx; no toggling needed.
  // Retain scroll-hide functionality for navigation bar.
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) {
        // scrolling down – hide
        setNavVisible(false);
      } else {
        // scrolling up – show
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/", icon: Home },
    { name: "About", to: "/aboutme", icon: User },
    { name: "Research", to: "/research", icon: FlaskConical },
    { name: "Projects", to: "/projects", icon: Briefcase },
    { name: "Resources", to: "/resources", icon: BookOpen },
    { name: "Blog", to: "/blog", icon: Newspaper },
    { name: "Resume", to: "/resume", icon: FileText },
    { name: "Credits", to: "/credits", icon: Heart },
  ];

  return (
    <>
      {/* Centered Top Nav */}
      <nav className={`fixed top-0 w-full z-50 flex justify-center py-10 pointer-events-none px-4 ${navVisible ? '' : 'hide-on-scroll'}`}>
        <div className="flex gap-4 sm:gap-6 items-center pointer-events-auto reveal">
          <div className="flex gap-2 sm:gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                title={item.name}
                className={({ isActive }) =>
                  `p-2 transition-all duration-300 hover:scale-120 hover:rotate-3 active:scale-90 ${
                    isActive
                      ? "text-brand"
                      : "text-text-dim/60 hover:text-text-main"
                  }`
                }
              >
                <item.icon size={18} strokeWidth={1.5} />
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Theme toggle removed – dark mode forced */}
    </>
  );
}
