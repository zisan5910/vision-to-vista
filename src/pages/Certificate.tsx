
import React from 'react';
import { Award, FileText, Download, Users, CheckCircle, ExternalLink } from 'lucide-react';
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

const Certificate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="সার্টিফিকেট আবেদন"
        description="BOBDO থেকে রক্তদান ও স্বেচ্ছাসেবার সার্টিফিকেট পান। আপনার অবদানের স্বীকৃতি নিন।"
        icon={<Award className="h-12 w-12 text-blood-600" />}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Certificate Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            সার্টিফিকেটের ধরন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>রক্তদান সার্টিফিকেট</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  রক্তদানের জন্য স্বীকৃতিপত্র। ন্যূনতম ৩ বার রক্তদান করতে হবে।
                </CardDescription>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">যোগ্যতা: ৩+ রক্তদান</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>স্বেচ্ছাসেবক সার্টিফিকেট</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  স্বেচ্ছাসেবার জন্য প্রশংসাপত্র। ন্যূনতম ৬ মাস সক্রিয় থাকতে হবে।
                </CardDescription>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">যোগ্যতা: ৬+ মাস সেবা</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>বিশেষ অবদান সার্টিফিকেট</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  বিশেষ অবদানের জন্য সম্মাননা। উল্লেখযোগ্য সেবার জন্য প্রদান করা হয়।
                </CardDescription>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">যোগ্যতা: বিশেষ অবদান</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            সার্টিফিকেটের সুবিধা
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                ক্যারিয়ার বেনিফিট
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• চাকরির আবেদনে অতিরিক্ত যোগ্যতা</li>
                <li>• সামাজিক দায়বদ্ধতার প্রমাণ</li>
                <li>• শিক্ষাবৃত্তির আবেদনে সহায়ক</li>
                <li>• ভিসা আবেদনে সহায়ক দলিল</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                সামাজিক স্বীকৃতি
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• সমাজে সম্মানজনক অবস্থান</li>
                <li>• মানবিক মূল্যবোধের প্রতিফলন</li>
                <li>• অন্যদের অনুপ্রাণিত করার ক্ষমতা</li>
                <li>• সামাজিক নেটওয়ার্ক বৃদ্ধি</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            আবেদনের শর্তাবলী
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">প্রয়োজনীয় কাগজপত্র</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• জাতীয় পরিচয়পত্রের কপি</li>
                  <li>• পাসপোর্ট সাইজ ছবি (২ কপি)</li>
                  <li>• রক্তদানের রেকর্ড/প্রমাণপত্র</li>
                  <li>• স্বেচ্ছাসেবার কার্যক্রমের প্রমাণ (যদি থাকে)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">যোগ্যতার মানদণ্ড</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• বয়স ১৮-৬৫ বছরের মধ্যে</li>
                  <li>• BOBDO এর নিবন্ধিত সদস্য</li>
                  <li>• নিয়মিত কার্যক্রমে অংশগ্রহণ</li>
                  <li>• সংগঠনের নিয়মকানুন মেনে চলা</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            সার্টিফিকেট আবেদন ফর্ম
          </h2>
          <div className="max-w-2xl mx-auto">
            <FormCard
              title="সার্টিফিকেটের জন্য আবেদন করুন"
              description="নিচের ফর্মটি পূরণ করে আপনার সার্টিফিকেটের জন্য আবেদন করুন। আমরা ৭-১০ কার্যদিবসের মধ্যে আপনার আবেদন যাচাই করে সার্টিফিকেট প্রদান করব।"
              formLink="https://forms.google.com/certificate-application"
              buttonText="আবেদন করুন"
              icon={<Award className="h-8 w-8" />}
            />
          </div>
        </section>

        {/* Download Sample */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            নমুনা সার্টিফিকেট
          </h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              আপনি যে ধরনের সার্টিফিকেট পাবেন তার একটি নমুনা দেখুন
            </p>
            <Button 
              variant="outline" 
              className="border-blood-600 text-blood-600 hover:bg-blood-50"
              asChild
            >
              <a
                href="#"
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  alert('নমুনা সার্টিফিকেট শীঘ্রই উপলব্ধ হবে');
                }}
              >
                <Download className="h-4 w-4" />
                নমুনা ডাউনলোড করুন
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificate;
