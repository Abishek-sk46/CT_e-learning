import React, { useState } from "react";
import { Button } from "../ui";
import { MegaMenu, MobileMenu, MobileToggle } from "./";

interface NavLink {
  label: string;
  href?: string;
  hasMegaMenu?: boolean;
}

interface NavbarProps {
  links?: NavLink[];
  brand?: string;
  activeIndex?: number;
}

interface Category {
  name: string;
  subcategories: string[];
}

const megaMenuData: Category[] = [
  {
    name: "Software Development",
    subcategories: ["C++", "Java", "Python", "React", "Node.js", "JavaScript"]
  },
  {
    name: "Design",
    subcategories: ["UI/UX", "Graphics Design", "3D Modeling", "Web Design", "Branding"]
  },
  {
    name: "Electronics",
    subcategories: ["IoT", "Embedded Systems", "Robotics", "Arduino", "Circuit Design"]
  },
  {
    name: "Data Science",
    subcategories: ["Machine Learning", "Data Analysis", "Statistics", "AI", "Big Data"]
  },
  {
    name: "Business",
    subcategories: ["Marketing", "Finance", "Management", "Entrepreneurship", "Strategy"]
  }
];

const defaultLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Course", href: "#", hasMegaMenu: true },
  { label: "Program", href: "#", hasMegaMenu: true },
  { label: "Resources", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar: React.FC<NavbarProps> = ({
  links = defaultLinks,
  brand = "LOOMYN",
  activeIndex = 0,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleNavItemEnter = (label: string) => {
    if (links.find(link => link.label === label)?.hasMegaMenu) {
      setMegaMenuOpen(true);
    }
  };

  const handleMegaMenuContainerEnter = () => {
    setMegaMenuOpen(true);
  };

  const handleMegaMenuContainerLeave = () => {
    setMegaMenuOpen(false);
    setHoveredCategory(null);
  };

  const handleCategoryHover = (categoryName: string) => {
    setHoveredCategory(categoryName);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}Vector_1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className="backdrop-blur-lg  shadow-lg"
        style={{ background: 'rgba(13, 13, 18, 0.30)' }}
      >
        <div className={`max-w-[62rem] mx-auto px-4 sm:px-6 bg-gray-900/80 backdrop-blur-sm border border-white/30 ${mobileOpen ? "rounded-2xl" : "rounded-full"
          }`}>
          <nav className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">
            <div className="flex items-center">
              <span className="text-white text-lg sm:text-xl font-semibold uppercase tracking-wide">
                {brand}
              </span>
            </div>
            <div className="hidden md:flex flex-1 justify-center relative">
              <div
                className="relative"
                onMouseEnter={handleMegaMenuContainerEnter}
                onMouseLeave={handleMegaMenuContainerLeave}
              >
                <ul
                  className="flex items-center gap-2"
                  role="menubar"
                  aria-label="Main navigation"
                >
                  {links.map((link, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <li key={link.label} role="none" className="relative">
                        <a
                          role="menuitem"
                          href={link.href ?? "#"}
                          className={`text-sm lg:text-lg px-3 lg:px-4 py-2 lg:py-3 rounded-2xl transition ${isActive
                            ? "text-white font-semibold bg-gray-700"
                            : "text-gray-300 hover:text-white hover:bg-gray-600"
                            }`}
                          onMouseEnter={() => handleNavItemEnter(link.label)}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <MegaMenu
                  isOpen={megaMenuOpen}
                  hoveredCategory={hoveredCategory}
                  onCategoryHover={handleCategoryHover}
                  categories={megaMenuData}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="hidden md:inline-flex"
              >
                Sign In
              </Button>

              <MobileToggle
                isOpen={mobileOpen}
                onToggle={() => setMobileOpen((s) => !s)}
              />
            </div>
          </nav>

          <MobileMenu
            isOpen={mobileOpen}
            links={links}
            activeIndex={activeIndex}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
