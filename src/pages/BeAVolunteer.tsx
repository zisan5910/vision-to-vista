
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
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  HandHeart,
} from 'lucide-react';

const BeAVolunteer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="স্বেচ্ছাসেবক হোন"
        description="বগুড়া অনলাইন রক্তদান সংগঠনের সাথে স্বেচ্ছাসেবক হিসেবে যোগ দিন।"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <HandHeart className="h-6 w-6 text-blood-600 mr-2" />
                <h2 className="text-lg font-bold text-gray-900">কেন স্বেচ্ছাসেবক হবেন?</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-blood-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">জীবন বাঁচান</h3>
                    <p className="text-sm text-gray-600">
                      আপনার স্বেচ্ছাসেবা অসংখ্য মানুষের জীবন বাঁচাতে সাহায্য করবে।
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-blood-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">সমাজসেবা</h3>
                    <p className="text-sm text-gray-600">
                      সমাজের কল্যাণে আপনার অবদান রাখুন।
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-blood-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">দক্ষতা বৃদ্ধি</h3>
                    <p className="text-sm text-gray-600">
                      স্বেচ্ছাসেবার মাধ্যমে নতুন দক্ষতা অর্জন করুন।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-sm border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-blood-600">
                    স্বেচ্ছাসেবক হিসেবে যোগদান করুন
                  </CardTitle>
                  <CardDescription className="text-sm">
                    নিচের ফর্মটি পূরণ করে আমাদের স্বেচ্ছাসেবক দলে যোগ দিন
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className="w-full bg-blood-600 hover:bg-blood-700 h-12"
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
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-bold text-center text-gray-900 mb-6">
              যোগাযোগের তথ্য
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="h-6 w-6 text-blood-600 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 mb-1">ফোন</h3>
                <a
                  href="tel:01722528164"
                  className="text-sm text-blood-600 hover:text-blood-700"
                >
                  ০১৭২২-৫২৮১৬৤
                </a>
              </div>
              <div className="text-center">
                <Mail className="h-6 w-6 text-blood-600 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 mb-1">ইমেইল</h3>
                <a
                  href="mailto:bobdo5800@gmail.com"
                  className="text-sm text-blood-600 hover:text-blood-700"
                >
                  bobdo5800@gmail.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="h-6 w-6 text-blood-600 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 mb-1">ঠিকানা</h3>
                <p className="text-sm text-gray-600 text-center">
                  বিআরটিসি শপিং কমপ্লেক্স ৩য় তলা, সাতমাথা, বগুড়া
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteer;
