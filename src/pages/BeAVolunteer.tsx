
import React from 'react';
import { Heart, Users, Clock, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FormCard from '@/components/FormCard';
import PageHeader from '@/components/PageHeader';

const BeAVolunteer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="স্বেচ্ছাসেবক হিসেবে যোগদান করুন"
        description="বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) এর সাথে স্বেচ্ছাসেবক হিসেবে কাজ করুন এবং জীবন বাঁচানোর মিশনে অংশ নিন।"
        icon={<Heart className="h-12 w-12 text-blood-600" />}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Why Volunteer Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            কেন স্বেচ্ছাসেবক হবেন?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>জীবন বাঁচান</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  আপনার সেবার মাধ্যমে অসংখ্য মানুষের জীবন বাঁচাতে সহায়তা করুন।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>সমাজসেবা</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  সমাজের কল্যাণে কাজ করুন এবং একটি ভাল পরিবর্তনের অংশ হন।
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>নমনীয় সময়</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  আপনার সুবিধামত সময়ে কাজ করুন এবং অভিজ্ঞতা অর্জন করুন।
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            স্বেচ্ছাসেবার ক্ষেত্রসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">রক্তদান সংগঠন</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• রক্তদান শিবির আয়োজন</li>
                <li>• দাতা-গ্রহীতা সমন্বয়</li>
                <li>• জরুরি রক্তের ব্যবস্থাপনা</li>
                <li>• হাসপাতালের সাথে যোগাযোগ</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">প্রচার ও সচেতনতা</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• সোশ্যাল মিডিয়া প্রচারণা</li>
                <li>• সচেতনতামূলক কার্যক্রম</li>
                <li>• শিক্ষামূলক কন্টেন্ট তৈরি</li>
                <li>• কমিউনিটি আউটরিচ</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">প্রশাসনিক সহায়তা</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ডেটা এন্ট্রি এবং ব্যবস্থাপনা</li>
                <li>• ইভেন্ট পরিকল্পনা</li>
                <li>• রিপোর্ট তৈরি</li>
                <li>• অফিস সহায়তা</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">প্রযুক্তিগত সহায়তা</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ওয়েবসাইট রক্ষণাবেক্ষণ</li>
                <li>• মোবাইল অ্যাপ ডেভেলপমেন্ট</li>
                <li>• ডেটাবেস ব্যবস্থাপনা</li>
                <li>• টেকনিক্যাল সাপোর্ট</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            স্বেচ্ছাসেবক আবেদন
          </h2>
          <div className="max-w-2xl mx-auto">
            <FormCard
              title="স্বেচ্ছাসেবক হিসেবে যোগদান করুন"
              description="নিচের ফর্মটি পূরণ করে আমাদের সাথে যোগ দিন। আমরা যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করবো।"
              formLink="https://forms.google.com/volunteer-registration"
              buttonText="আবেদন করুন"
              icon={<Users className="h-8 w-8" />}
            />
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            যোগাযোগের তথ্য
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-blood-600" />
              <div>
                <h3 className="font-semibold">ঠিকানা</h3>
                <p className="text-gray-600">বগুড়া, বাংলাদেশ</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-blood-600" />
              <div>
                <h3 className="font-semibold">ফোন</h3>
                <p className="text-gray-600">+880 1XXX-XXXXXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-blood-600" />
              <div>
                <h3 className="font-semibold">ইমেইল</h3>
                <p className="text-gray-600">info@bobdo.org</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ExternalLink className="h-8 w-8 text-blood-600" />
              <div>
                <h3 className="font-semibold">ফেসবুক</h3>
                <a
                  href="https://www.facebook.com/groups/BOBO.BD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blood-600 hover:underline"
                >
                  BOBDO গ্রুপ
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeAVolunteer;
