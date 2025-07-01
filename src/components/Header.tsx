
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
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { scrollToTop } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsSheetOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 border-b ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="container mx-auto px-3 py-2">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
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
              <span className="text-lg font-bold text-blood-600">BOBDO</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <NavButton to="/" icon={Home} text="হোম" />
              
              {/* Blood Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-10 px-3">
                    <BloodDrop className="h-4 w-4 mr-1" />
                    রক্তদান
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/donate-blood" className="flex items-center">
                      <BloodDrop className="h-4 w-4 mr-2" />
                      রক্ত দিন
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/get-blood" className="flex items-center">
                      <BloodDrop className="h-4 w-4 mr-2" />
                      রক্ত নিন
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/find-donors" className="flex items-center">
                      <BloodDrop className="h-4 w-4 mr-2" />
                      ডোনার খুঁজুন
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-10 px-3">
                    <HandHeart className="h-4 w-4 mr-1" />
                    সেবা
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/be-a-volunteer" className="flex items-center">
                      <HandHeart className="h-4 w-4 mr-2" />
                      স্বেচ্ছাসেবক
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/donate" className="flex items-center">
                      <HeartHandshake className="h-4 w-4 mr-2" />
                      আর্থিক অনুদান
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/certificate" className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      সার্টিফিকেট
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/hospitals" className="flex items-center">
                      <Building2 className="h-4 w-4 mr-2" />
                      হাসপাতাল
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Info Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-10 px-3">
                    <Info className="h-4 w-4 mr-1" />
                    তথ্য
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/notice" className="flex items-center">
                      <Bell className="h-4 w-4 mr-2" />
                      নোটিশ
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/medical-knowledge" className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      চিকিৎসা জ্ঞান
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/about-us" className="flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      আমাদের সম্পর্কে
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contacts" className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      যোগাযোগ
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://ridoan-zisan.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blood-600 transition-colors p-2 rounded hover:bg-blood-50"
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

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <img 
                        src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                        alt="BOBDO Logo"
                        className="h-8 w-8 object-contain"
                      />
                      <span className="text-lg font-bold text-blood-600">BOBDO</span>
                    </div>
                    <MobileNavLinks onLinkClick={() => setIsSheetOpen(false)} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg bg-blood-600 text-white hover:bg-blood-700 h-12 w-12"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  );
};

const NavButton = ({ to, icon: Icon, text }: { to: string; icon: any; text: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'text-blood-600 bg-blood-50'
          : 'text-gray-700 hover:text-blood-600 hover:bg-blood-50'
      }`}
    >
      <Icon className="h-4 w-4" />
      {text}
    </Link>
  );
};

const MobileNavLinks = ({ onLinkClick }: { onLinkClick: () => void }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => `
    flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors
    ${
      isActive(path)
        ? 'text-blood-600 bg-blood-50'
        : 'text-gray-700 hover:text-blood-600 hover:bg-blood-50'
    }
  `;

  const links = [
    { to: '/', icon: Home, text: 'হোম' },
    { to: '/donate-blood', icon: BloodDrop, text: 'রক্ত দিন' },
    { to: '/get-blood', icon: BloodDrop, text: 'রক্ত নিন' },
    { to: '/find-donors', icon: BloodDrop, text: 'ডোনার খুঁজুন' },
    { to: '/be-a-volunteer', icon: HandHeart, text: 'স্বেচ্ছাসেবক হোন' },
    { to: '/donate', icon: HeartHandshake, text: 'আর্থিক অনুদান' },
    { to: '/certificate', icon: Award, text: 'সার্টিফিকেট' },
    { to: '/hospitals', icon: Building2, text: 'হাসপাতাল' },
    { to: '/notice', icon: Bell, text: 'নোটিশ' },
    { to: '/medical-knowledge', icon: BookOpen, text: 'চিকিৎসা জ্ঞান' },
    { to: '/about-us', icon: Info, text: 'আমাদের সম্পর্কে' },
    { to: '/contacts', icon: Phone, text: 'যোগাযোগ' },
  ];

  return (
    <nav className="space-y-2">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={linkClass(link.to)}
          onClick={onLinkClick}
        >
          <link.icon className="h-5 w-5" />
          <span>{link.text}</span>
        </Link>
      ))}
      <div className="pt-4 border-t border-gray-200">
        <a
          href="https://ridoan-zisan.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blood-600 hover:bg-blood-50 transition-colors"
          onClick={onLinkClick}
        >
          <Code2 className="h-5 w-5" />
          <span>Developer Info</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
