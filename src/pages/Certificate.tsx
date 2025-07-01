
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
  Award,
  FileText,
  Download,
  CheckCircle,
  Clock,
  Star,
} from 'lucide-react';

const Certificate = () => {
  const certificateTypes = [
    {
      title: 'রক্তদান সার্টিফিকেট',
      description: 'নিয়মিত রক্তদানের জন্য স্বীকৃতি',
      icon: <Award className="h-6 w-6 text-blood-600" />,
      requirements: ['কমপক্ষে ৩ বার রক্তদান', 'সংগঠনের সদস্যপদ'],
    },
    {
      title: 'স্বেচ্ছাসেবক সার্টিফিকেট',
      description: 'স্বেচ্ছাসেবামূলক কাজের প্রশংসাপত্র',
      icon: <Star className="h-6 w-6 text-blood-600" />,
      requirements: ['৬ মাসের স্বেচ্ছাসেবা', 'কমিউনিটি সার্ভিস'],
    },
    {
      title: 'অংশগ্রহণ সার্টিফিকেট',
      description: 'কর্মসূচিতে অংশগ্রহণের সার্টিফিকেট',
      icon: <CheckCircle className="h-6 w-6 text-blood-600" />,
      requirements: ['ইভেন্টে অংশগ্রহণ', 'কার্যক্রম সম্পন্ন'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="সার্টিফিকেট আবেদন"
        description="বিভিন্ন ধরনের সার্টিফিকেটের জন্য আবেদন করুন।"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {certificateTypes.map((cert, index) => (
              <Card key={index} className="shadow-sm border">
                <CardHeader className="text-center pb-3">
                  {cert.icon}
                  <CardTitle className="text-base mt-2">{cert.title}</CardTitle>
                  <CardDescription className="text-sm">{cert.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">প্রয়োজনীয় যোগ্যতা:</h4>
                    <ul className="space-y-1">
                      {cert.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <h2 className="text-lg font-bold text-center text-gray-900 mb-6">
              আবেদন প্রক্রিয়া
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blood-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-blood-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-sm">১. ফর্ম পূরণ</h3>
                <p className="text-xs text-gray-600">
                  গুগল ফর্মটি পূরণ করুন
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blood-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6 text-blood-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-sm">২. যাচাইকরণ</h3>
                <p className="text-xs text-gray-600">
                  তথ্য যাচাই (৭-১০ দিন)
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blood-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-blood-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-sm">৩. অনুমোদন</h3>
                <p className="text-xs text-gray-600">
                  সার্টিফিকেট প্রস্তুত
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blood-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Download className="h-6 w-6 text-blood-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-sm">৪. প্রাপ্তি</h3>
                <p className="text-xs text-gray-600">
                  ইমেইলে পাঠানো হবে
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="text-center">
            <Card className="shadow-sm border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-blood-600">
                  সার্টিফিকেটের জন্য আবেদন করুন
                </CardTitle>
                <CardDescription className="text-sm">
                  নিচের ফর্মটি পূরণ করে আপনার পছন্দের সার্টিফিকেটের জন্য আবেদন করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="bg-blood-600 hover:bg-blood-700 w-full h-12"
                >
                  <a
                    href="https://forms.google.com/certificate-application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    সার্টিফিকেট আবেদন ফর্ম
                  </a>
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  * আবেদনের পূর্বে নিশ্চিত করুন যে আপনি সংশ্লিষ্ট সার্টিফিকেটের যোগ্যতা পূরণ করেছেন
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
