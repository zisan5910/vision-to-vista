
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
      description: 'নিয়মিত রক্তদানের জন্য প্রাতিষ্ঠানিক স্বীকৃতি',
      icon: <Award className="h-8 w-8 text-blood-600" />,
      requirements: ['কমপক্ষে ৩ বার রক্তদান', 'সংগঠনের সদস্যপদ'],
    },
    {
      title: 'স্বেচ্ছাসেবক সার্টিফিকেট',
      description: 'স্বেচ্ছাসেবামূলক কাজের জন্য প্রশংসাপত্র',
      icon: <Star className="h-8 w-8 text-blood-600" />,
      requirements: ['৬ মাসের স্বেচ্ছাসেবা', 'কমিউনিটি সার্ভিস অংশগ্রহণ'],
    },
    {
      title: 'অংশগ্রহণ সার্টিফিকেট',
      description: 'বিভিন্ন কর্মসূচিতে অংশগ্রহণের সার্টিফিকেট',
      icon: <CheckCircle className="h-8 w-8 text-blood-600" />,
      requirements: ['ইভেন্টে অংশগ্রহণ', 'কার্যক্রম সম্পন্ন করা'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="সার্টিফিকেট আবেদন"
        description="বগুড়া অনলাইন রক্তদান সংগঠন থেকে বিভিন্ন ধরনের সার্টিফিকেটের জন্য আবেদন করুন।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {certificateTypes.map((cert, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                {cert.icon}
                <CardTitle className="mt-4">{cert.title}</CardTitle>
                <CardDescription>{cert.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">প্রয়োজনীয় যোগ্যতা:</h4>
                  <ul className="space-y-2">
                    {cert.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            আবেদন প্রক্রিয়া
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blood-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blood-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">১. ফর্ম পূরণ</h3>
              <p className="text-sm text-gray-600">
                নিচের গুগল ফর্মটি সঠিকভাবে পূরণ করুন
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blood-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blood-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">২. যাচাইকরণ</h3>
              <p className="text-sm text-gray-600">
                আমরা আপনার তথ্য যাচাই করব (৭-১০ দিন)
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blood-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blood-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">৩. অনুমোদন</h3>
              <p className="text-sm text-gray-600">
                যোগ্যতা অনুযায়ী সার্টিফিকেট প্রস্তুত করা হবে
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blood-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-blood-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">৪. প্রাপ্তি</h3>
              <p className="text-sm text-gray-600">
                ইমেইলে সার্টিফিকেট পাঠানো হবে
              </p>
            </div>
          </div>
        </div>

        {/* Application Form Button */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-blood-600">
                সার্টিফিকেটের জন্য আবেদন করুন
              </CardTitle>
              <CardDescription>
                নিচের ফর্মটি পূরণ করে আপনার পছন্দের সার্টিফিকেটের জন্য আবেদন করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                size="lg"
                className="bg-blood-600 hover:bg-blood-700 w-full"
              >
                <a
                  href="https://forms.google.com/certificate-application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  সার্টিফিকেট আবেদন ফর্ম
                </a>
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                * আবেদনের পূর্বে নিশ্চিত করুন যে আপনি সংশ্লিষ্ট সার্টিফিকেটের যোগ্যতা পূরণ করেছেন
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
