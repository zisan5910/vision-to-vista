
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageHeader from '@/components/PageHeader';
import {
  Heart,
  Users,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  HandHeart,
} from 'lucide-react';

const BeAVolunteer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="স্বেচ্ছাসেবক হোন"
        description="বগুড়া অনলাইন রক্তদান সংগঠনের সাথে স্বেচ্ছাসেবক হিসেবে যোগ দিন এবং জীবন বাঁচানোর মহৎ কাজে অংশগ্রহণ করুন।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <HandHeart className="h-8 w-8 text-blood-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">কেন স্বেচ্ছাসেবক হবেন?</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-blood-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">জীবন বাঁচান</h3>
                  <p className="text-gray-600">
                    আপনার স্বেচ্ছাসেবা অসংখ্য মানুষের জীবন বাঁচাতে সাহায্য করবে।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-blood-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">সমাজসেবা</h3>
                  <p className="text-gray-600">
                    সমাজের কল্যাণে আপনার অবদান রাখুন এবং একটি ভালো সমাজ গড়তে সাহায্য করুন।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-blood-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">দক্ষতা বৃদ্ধি</h3>
                  <p className="text-gray-600">
                    স্বেচ্ছাসেবার মাধ্যমে নতুন দক্ষতা অর্জন করুন এবং নেতৃত্বের গুণাবলী বিকাশ করুন।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blood-600" />
                  স্বেচ্ছাসেবক হিসেবে যোগদান করুন
                </CardTitle>
                <CardDescription>
                  নিচের ফর্মটি পূরণ করে আমাদের স্বেচ্ছাসেবক দলে যোগ দিন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full bg-blood-600 hover:bg-blood-700"
                  size="lg"
                >
                  <a
                    href="https://forms.google.com/volunteer-application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    স্বেচ্ছাসেবক হিসেবে আবেদন করুন
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            যোগাযোগের তথ্য
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-blood-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">ফোন</h3>
              <a
                href="tel:01722528164"
                className="text-blood-600 hover:text-blood-700"
              >
                ০১৭২২-৫২৮১৬৪
              </a>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-blood-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">ইমেইল</h3>
              <a
                href="mailto:bobdo5800@gmail.com"
                className="text-blood-600 hover:text-blood-700"
              >
                bobdo5800@gmail.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-blood-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">ঠিকানা</h3>
              <p className="text-gray-600">
                বিআরটিসি শপিং কমপ্লক্স ৩য় তলা, সাতমাথা, বগুড়া
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteer;
