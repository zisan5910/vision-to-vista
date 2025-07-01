
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Code2,
  ArrowUp,
  Home,
  Droplet as BloodDrop,
  HandHeart,
  HeartHandshake,
  Bell,
  BookOpen,
  Info,
  Phone,
  Building2,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { scrollToTop } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 transition-transform hover:scale-105 shrink-0"
            onClick={() => scrollToTop()}
          >
            <img 
              src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
              alt="BOBDO Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-blood-600">BOBDO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
              <NavLinks />
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://ridoan-zisan.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blood-600 transition-colors ml-3 shrink-0"
                  >
                    <Code2 className="h-4 w-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Developer Info</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              ref={buttonRef}
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-blood-50"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={`lg:hidden bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-2">
            <NavLinks mobile />
            <a
              href="https://ridoan-zisan.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-blood-600 transition-colors py-2 px-2 rounded hover:bg-blood-50 text-sm col-span-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code2 className="h-4 w-4" />
              <span>Developer Info</span>
            </a>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg bg-blood-600 text-white hover:bg-blood-700"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClass = (path: string) => `
    relative flex items-center gap-1 text-gray-700 hover:text-blood-600 font-medium transition-colors py-2 px-2 rounded hover:bg-blood-50
    ${mobile ? 'text-sm' : 'text-xs lg:text-sm'}
    whitespace-nowrap
    ${
      isActive(path)
        ? 'text-blood-600 bg-blood-50'
        : ''
    }
  `;

  const links = [
    { to: '/', icon: Home, text: 'হোম' },
    { to: '/donate-blood', icon: BloodDrop, text: 'রক্ত দিন' },
    { to: '/get-blood', icon: BloodDrop, text: 'রক্ত নিন' },
    { to: '/find-donors', icon: BloodDrop, text: 'ডোনার খুঁজুন' },
    { to: '/be-a-volunteer', icon: HandHeart, text: 'স্বেচ্ছাসেবক' },
    { to: '/donate', icon: HeartHandshake, text: 'আর্থিক অনুদান' },
    { to: '/certificate', icon: Award, text: 'সার্টিফিকেট' },
    { to: '/hospitals', icon: Building2, text: 'হাসপাতাল' },
    { to: '/notice', icon: Bell, text: 'নোটিশ' },
    { to: '/medical-knowledge', icon: BookOpen, text: 'চিকিৎসা জ্ঞান' },
    { to: '/about-us', icon: Info, text: 'আমাদের সম্পর্কে' },
    { to: '/contacts', icon: Phone, text: 'যোগাযোগ' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link key={link.to} to={link.to} className={linkClass(link.to)}>
          <link.icon className="h-3 w-3 lg:h-4 lg:w-4" />
          <span>{link.text}</span>
        </Link>
      ))}
    </>
  );
};

export default Header;
