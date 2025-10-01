import React from 'react';
import { Button } from '../ui';

interface NavLink {
    label: string;
    href?: string;
    hasMegaMenu?: boolean;
}

interface MobileMenuProps {
    isOpen: boolean;
    links: NavLink[];
    activeIndex: number;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    links,
    activeIndex,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <div className="md:hidden mt-4 pb-4">
            <div className="border-t border-white/20 pt-4">
                <ul className="flex flex-col gap-2" role="menubar">
                    {links.map((link, i) => {
                        const isActive = i === activeIndex;
                        return (
                            <li key={link.label} role="none">
                                <a
                                    role="menuitem"
                                    href={link.href ?? "#"}
                                    className={`block text-base px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? "text-white font-semibold bg-white/10"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                        }`}
                                    onClick={onClose}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                    <Button
                        variant="ghost"
                        className="w-full"
                        onClick={onClose}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;