import React, { useState } from "react";

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

  const handleNavItemLeave = () => {
    // Don't close immediately, let the mega menu container handle it
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
      {/* Navbar box */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 rounded-full bg-gray-900/80 backdrop-blur-sm border border-white/30">
        <nav className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">
          {/* Brand */}
          <div className="flex items-center">
            <span className="text-white text-lg sm:text-xl font-semibold uppercase tracking-wide">
              {brand}
            </span>
          </div>

          {/* Desktop links */}
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
                        onMouseLeave={handleNavItemLeave}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Mega Menu */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
                  <div className="bg-gray-800 border border-gray-600 rounded-xl shadow-2xl w-[90vw] max-w-[600px]">
                    <div className="flex">
                      {/* Left Column - Categories */}
                      <div className="w-1/2 p-6 border-r border-gray-600">
                        <h3 className="text-white font-semibold mb-4 text-lg">Categories</h3>
                        <ul className="space-y-2">
                          {megaMenuData.map((category) => (
                            <li key={category.name}>
                              <button
                                className={`w-full text-left px-3 py-2 rounded-lg transition ${hoveredCategory === category.name
                                  ? "bg-gray-700 text-white"
                                  : "text-gray-300 hover:text-white hover:bg-gray-700"
                                  }`}
                                onMouseEnter={() => handleCategoryHover(category.name)}
                              >
                                {category.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column - Subcategories */}
                      <div className="w-1/2 p-6">
                        <h3 className="text-white font-semibold mb-4 text-lg">
                          {hoveredCategory || "Select a category"}
                        </h3>
                        {hoveredCategory && (
                          <ul className="space-y-2">
                            {megaMenuData
                              .find((cat) => cat.name === hoveredCategory)
                              ?.subcategories.map((subcategory) => (
                                <li key={subcategory}>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition"
                                  >
                                    {subcategory}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        )}
                        {!hoveredCategory && (
                          <p className="text-gray-400 text-sm">
                            Hover over a category to see available courses
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center px-6 lg:px-10 py-2 lg:py-3 rounded-full text-sm lg:text-lg text-white font-medium hover:scale-[1.02] transition bg-gradient-to-r from-gray-600 via-slate-900 to-slate-900 border border-white/30">
              Sign In
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 18H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-gray-800 mt-2 rounded-md p-3">
            <ul className="flex flex-col gap-3" role="menubar">
              {links.map((link, i) => {
                const isActive = i === activeIndex;
                return (
                  <li key={link.label} role="none">
                    <a
                      role="menuitem"
                      href={link.href ?? "#"}
                      className={`block text-lg px-4 py-2 rounded-full ${isActive
                        ? "text-white font-semibold bg-gray-700"
                        : "text-gray-300 hover:text-white hover:bg-gray-600"
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3">
              <button className="w-full rounded-full px-4 py-2 border border-white/30 text-lg text-white">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
