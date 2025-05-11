// components/Navbar.js
"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";    
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Learn", 
    href: "/learn",
    subLinks: [
      { name: "Beginner Courses", href: "/learn/beginner" },
      { name: "Intermediate", href: "/learn/intermediate" },
      { name: "Advanced Techniques", href: "/learn/advanced" },
    ]
  },
  { 
    name: "Tools", 
    href: "/tools",
    subLinks: [
      { name: "Tanpura", href: "/tanpura" }, // Changed from /tools/tanpura
      { name: "Metronome", href: "/tools/metronome" },
      { name: "Tuner", href: "/tools/tuner" },
    ]
  },
  { name: "Raags", href: "/explore" }, // Changed from /raags to match your folder
  { name: "Community", href: "/community" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname();

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-raga-dark-100 text-raga-dark-800 px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Music Diary
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              {link.subLinks ? (
                <>
                  <button 
                    onClick={() => toggleSubmenu(index)}
                    className="flex items-center gap-1 hover:text-raga-gold-500 transition-colors"
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`}/>
                  </button>
                  {openSubmenu === index && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 hover:bg-raga-cream-100"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`hover:text-raga-gold-500 transition-colors ${pathname === link.href ? 'text-raga-gold-600 font-medium' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sign In Button (Desktop) */}
        <Link
          href="/login"
          className="hidden md:block bg-raga-gold-500 hover:bg-raga-gold-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 border-t shadow-lg py-4 px-4">
          {navLinks.map((link) => (
            <div key={link.name} className="mb-4">
              {link.subLinks ? (
                <>
                  <button 
                    onClick={() => toggleSubmenu(navLinks.indexOf(link))}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} className={`transition-transform ${openSubmenu === navLinks.indexOf(link) ? 'rotate-180' : ''}`}/>
                  </button>
                  {openSubmenu === navLinks.indexOf(link) && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block py-2 hover:text-raga-gold-500"
                          onClick={() => setMenuOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-2 hover:text-raga-gold-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/login"
            className="block w-full text-center bg-raga-gold-500 hover:bg-raga-gold-600 text-white px-6 py-2 rounded-full font-medium transition-colors mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}