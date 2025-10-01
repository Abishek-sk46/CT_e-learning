import React from 'react';

interface Category {
  name: string;
  subcategories: string[];
}

interface MegaMenuProps {
  isOpen: boolean;
  hoveredCategory: string | null;
  onCategoryHover: (categoryName: string) => void;
  categories: Category[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  isOpen,
  hoveredCategory,
  onCategoryHover,
  categories,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
      <div className="bg-gray-800 border border-gray-600 rounded-xl shadow-2xl w-[90vw] max-w-[600px]">
        <div className="flex">
          <div className="w-1/2 p-6 border-r border-gray-600">
            <h3 className="text-white font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      hoveredCategory === category.name
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                    onMouseEnter={() => onCategoryHover(category.name)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/2 p-6">
            <h3 className="text-white font-semibold mb-4 text-lg">
              {hoveredCategory || "Select a category"}
            </h3>
            {hoveredCategory && (
              <ul className="space-y-2">
                {categories
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
  );
};

export default MegaMenu;