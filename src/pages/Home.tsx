
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, Facebook, Droplet, Award, Building2, HandHeart, HeartHandshake, Phone, Mail } from 'lucide-react';
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
      title: 'রক্তদাতা খুঁজুন',
      description: 'প্রয়োজনীয় রক্তের গ্রুপ অনুযায়ী দাতা খুঁজুন',
      icon: <Droplet className="h-8 w-8 text-blood-600" />,
      link: '/find-donors',
      color: 'bg-red-50 hover:bg-red-100'
    },
    {
      title: 'রক্তদাতা হোন',
      description: 'রক্তদাতা হিসেবে যোগদান করুন',
      icon: <Heart className="h-8 w-8 text-blood-600" />,
      link: '/donate-blood',
      color: 'bg-pink-50 hover:bg-pink-100'
    },
    {
      title: 'স্বেচ্ছাসেবক হোন',
      description: 'স্বেচ্ছাসেবক হিসেবে যোগদান করুন',
      icon: <Users className="h-8 w-8 text-blood-600" />,
      link: '/be-a-volunteer',
      color: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      title: 'সার্টিফিকেট পান',
      description: 'আপনার অবদানের স্বীকৃতি নিন',
      icon: <Award className="h-8 w-8 text-blood-600" />,
      link: '/certificate',
      color: 'bg-yellow-50 hover:bg-yellow-100'
    },
    {
      title: 'হাসপাতাল তালিকা',
      description: 'নিকটস্থ হাসপাতালের তথ্য পান',
      icon: <Building2 className="h-8 w-8 text-blood-600" />,
      link: '/hospitals',
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'আর্থিক অনুদান',
      description: 'সংগঠনকে আর্থিক সহায়তা প্রদান করুন',
      icon: <HeartHandshake className="h-8 w-8 text-blood-600" />,
      link: '/donate',
      color: 'bg-purple-50 hover:bg-purple-100'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blood-700 leading-tight mb-4">
                স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                রক্তদানের মাধ্যমে জীবন বাঁচানোর আমাদের মিশনে যোগ দিন বগুড়া
                অনলাইন রক্তদান সংগঠন (BOBDO) এর সাথে।
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blood-600 text-blood-600 hover:bg-blood-50"
                >
                  <a 
                    href="https://www.facebook.com/groups/BOBO.BD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    ফেসবুক গ্রুপ
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline" 
                  className="border-blood-600 text-blood-600 hover:bg-blood-50"
                >
                  <a 
                    href="https://www.facebook.com/bobdo.official" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    ফেসবুক পেজ
                  </a>
                </Button>
              </div>

              {/* Main Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-blood-600 hover:bg-blood-700"
                >
                  <Link to="/donate-blood" className="flex items-center gap-2">
                    <Droplet className="h-4 w-4" />
                    রক্ত দিন
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blood-600 text-blood-600 hover:bg-blood-50"
                >
                  <Link to="/get-blood" className="flex items-center gap-2">
                    রক্ত নিন
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-blood-100 animate-pulse-slow"></div>
                <img 
                  src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                  alt="BOBDO Logo" 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Quick Access Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            আপনি কিভাবে সাহায্য করতে পারেন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className={`shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${action.color} border-0`}>
                <CardHeader className="text-center pb-4">
                  <div className="mb-3">{action.icon}</div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription className="text-sm">{action.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild className="w-full bg-blood-600 hover:bg-blood-700">
                    <Link to={action.link}>
                      {action.title === 'রক্তদাতা খুঁজুন' ? 'খুঁজুন' : 
                       action.title === 'সার্টিফিকেট পান' ? 'আবেদন করুন' :
                       action.title === 'হাসপাতাল তালিকা' ? 'দেখুন' : 'আরও জানুন'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            জরুরি যোগাযোগ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-blood-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">জরুরি হটলাইন</h3>  
                <a
                  href="tel:01722528164"
                  className="text-blood-600 hover:text-blood-700 font-medium"
                >
                  ০১৭২২-৫২৮১৬৪
                </a>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-blood-600 mx-auto mb-4" />
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
      <section className="bg-blood-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            প্রয়োজনীয় চিকিৎসা জ্ঞান
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            রক্তদান, প্রাথমিক চিকিৎসা এবং সিপিআর এর সম্পর্কে বিস্তারিত জানুন এবং
            একজন সুপার হিরো হিসেবে কাজ করুন।
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/medical-knowledge">বিস্তারিত</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
