
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
    { to: '/donate-blood', text: 'রক্ত দিন' },
    { to: '/get-blood', text: 'রক্ত নিন' },
    { to: '/find-donors', text: 'ডোনার খুঁজুন' },
    { to: '/hospitals', text: 'হাসপাতাল' },
    { to: '/about-us', text: 'আমাদের সম্পর্কে' },
  ];

  const serviceLinks = [
    { to: '/be-a-volunteer', text: 'স্বেচ্ছাসেবক হোন' },
    { to: '/donate', text: 'আর্থিক অনুদান' },
    { to: '/certificate', text: 'সার্টিফিকেট' },
    { to: '/medical-knowledge', text: 'চিকিৎসা জ্ঞান' },
    { to: '/notice', text: 'নোটিশ' },
    { to: '/contacts', text: 'যোগাযোগ' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3">
              <Droplet className="h-5 w-5 text-blood-500" />
              <span className="text-lg font-bold">BOBDO</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) স্বেচ্ছায় রক্তদানের মাধ্যমে
              জীবন বাঁচাতে নিবেদিত।
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/bobdo.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/groups/BOBO.BD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook Group"
              >
                <Users className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@BograOnlineBloodDonationOrgani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-3">সেবাসমূহ</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3">যোগাযোগ</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-gray-400" />
                <a
                  href="tel:01722528164"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  ০১৭২২-৫২৮১৬৤
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-gray-400" />
                <a
                  href={getEmailLink()}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  target={typeof window !== 'undefined' && window.innerWidth < 768 ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                >
                  bobdo5800@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  বিআরটিসি শপিং কমপ্লক্স ৩য় তলা, সাতমাথা, বগুড়া
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2016 BOBDO. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
