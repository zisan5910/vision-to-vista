
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, Facebook, Droplet, Award, Building2, HandHeart, HeartHandshake, Phone, Mail, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Stats from '@/components/Stats';

const Home = () => {
  const quickActions = [
    {
      title: 'ডোনার খুঁজুন',
      description: 'প্রয়োজনীয় রক্তের দাতা খুঁজুন',
      icon: <Search className="h-6 w-6" />,
      link: '/find-donors',
      color: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
      primary: true
    },
    {
      title: 'রক্তদাতা হোন',
      description: 'রক্তদাতা হিসেবে যোগদান করুন',
      icon: <Plus className="h-6 w-6" />,
      link: '/donate-blood',
      color: 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200',
      primary: true
    },
    {
      title: 'স্বেচ্ছাসেবক',
      description: 'স্বেচ্ছাসেবক হিসেবে যোগদান',
      icon: <Users className="h-6 w-6" />,
      link: '/be-a-volunteer',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'
    },
    {
      title: 'সার্টিফিকেট',
      description: 'আপনার অবদানের স্বীকৃতি নিন',
      icon: <Award className="h-6 w-6" />,
      link: '/certificate',
      color: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
    },
    {
      title: 'হাসপাতাল',
      description: 'নিকটস্থ হাসপাতালের তথ্য',
      icon: <Building2 className="h-6 w-6" />,
      link: '/hospitals',
      color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200'
    },
    {
      title: 'আর্থিক সহায়তা',
      description: 'সংগঠনকে সহায়তা প্রদান',
      icon: <HeartHandshake className="h-6 w-6" />,
      link: '/donate',
      color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200'
    }
  ];

  return (
    <div>
      {/* Hero Section - Mobile App Style */}
      <section className="bg-gradient-to-br from-blood-50 via-white to-pink-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo and Title */}
            <div className="mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                  alt="BOBDO Logo" 
                  className="h-12 w-12 md:h-14 md:w-14 object-contain"
                />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-blood-700 leading-tight mb-3">
                বগুড়া অনলাইন রক্তদান সংগঠন
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-blood-600 hover:bg-blood-700 text-white shadow-lg h-12 px-8"
              >
                <Link to="/find-donors" className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  ডোনার খুঁজুন
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blood-600 text-blood-600 hover:bg-blood-50 shadow-lg h-12 px-8"
              >
                <Link to="/donate-blood" className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  রক্তদাতা হোন
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.facebook.com/groups/BOBO.BD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all text-sm font-medium text-gray-700 hover:text-blood-600"
              >
                <Facebook className="h-4 w-4" />
                গ্রুপ
              </a>
              <a 
                href="https://www.facebook.com/bobdo.official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all text-sm font-medium text-gray-700 hover:text-blood-600"
              >
                <Facebook className="h-4 w-4" />
                পেজ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Quick Actions - Mobile App Grid */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-900">
            কিভাবে সাহায্য করতে পারেন
          </h2>
          
          {/* Primary Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
            {quickActions.filter(action => action.primary).map((action, index) => (
              <Card key={index} className={`${action.color} border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-6 text-center">
                  <div className="text-blood-600 mb-3">{action.icon}</div>
                  <CardTitle className="text-lg mb-2">{action.title}</CardTitle>
                  <CardDescription className="text-sm mb-4">{action.description}</CardDescription>
                  <Button asChild className="w-full bg-blood-600 hover:bg-blood-700">
                    <Link to={action.link}>
                      শুরু করুন
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Secondary Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {quickActions.filter(action => !action.primary).map((action, index) => (
              <Card key={index} className={`${action.color} border shadow-sm hover:shadow-md transition-all duration-300`}>
                <CardContent className="p-4 text-center">
                  <div className="text-blood-600 mb-2">{action.icon}</div>
                  <CardTitle className="text-sm mb-1">{action.title}</CardTitle>
                  <Button asChild size="sm" variant="ghost" className="w-full text-xs mt-2 h-8">
                    <Link to={action.link}>
                      দেখুন
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-900">
            জরুরি যোগাযোগ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-blood-600">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-blood-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">হটলাইন</h3>  
                <a
                  href="tel:01722528164"
                  className="text-blood-600 hover:text-blood-700 font-medium text-lg"
                >
                  ০১৭২২-৫২৮১৬৪
                </a>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-blood-600">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-blood-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">ইমেইল</h3>
                <a
                  href="mailto:bobdo5800@gmail.com"
                  className="text-blood-600 hover:text-blood-700 font-medium"
                >
                  bobdo5800@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blood-600 to-blood-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-10 w-10 mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            চিকিৎসা জ্ঞান অর্জন করুন
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            রক্তদান ও প্রাথমিক চিকিৎসা সম্পর্কে জানুন
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link to="/medical-knowledge">বিস্তারিত জানুন</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
