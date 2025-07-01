
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplet,
  Facebook,
  Youtube,
  Users,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';

const Footer = () => {
  const getEmailLink = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
        ? 'mailto:bobdo5800@gmail.com'
        : 'https://mail.google.com/mail/?view=cm&fs=1&to=bobdo5800@gmail.com';
    }
    return 'mailto:bobdo5800@gmail.com';
  };

  const quickLinks = [
    { to: '/', text: 'হোম' },
    { to: '/find-donors', text: 'ডোনার খুঁজুন' },
    { to: '/donate-blood', text: 'রক্ত দিন' },
    { to: '/be-a-volunteer', text: 'স্বেচ্ছাসেবক' },
    { to: '/certificate', text: 'সার্টিফিকেট' },
    { to: '/about-us', text: 'আমাদের সম্পর্কে' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Organization Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <Droplet className="h-6 w-6 text-blood-500" />
              <span className="text-xl font-bold">BOBDO</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-xs mx-auto md:mx-0">
              বগুড়া অনলাইন রক্তদান সংগঠন - স্বেচ্ছায় রক্তদানের মাধ্যমে জীবন বাঁচাতে নিবেদিত।
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/bobdo.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Facebook Page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/groups/BOBO.BD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Facebook Group"
              >
                <Users className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@BograOnlineBloodDonationOrgani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">দ্রুত লিংক</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-white transition-colors text-sm py-1 hover:underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href="tel:01722528164"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  ০১৭২২-৫২৮১৬৪
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href={getEmailLink()}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  target={typeof window !== 'undefined' && window.innerWidth < 768 ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                >
                  bobdo5800@gmail.com
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm text-center md:text-left">
                  বিআরটিসি শপিং কমপ্লেক্স ৩য় তলা, সাতমাথা, বগুড়া
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2016 BOBDO. সকল অধিকার সংরক্ষিত।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
