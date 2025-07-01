
import React, { useState } from 'react';
import { Wallet, CreditCard, AlertCircle, Copy, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const paymentMethods = [
  {
    id: 'bkash',
    name: 'bKash',
    number: '01722-528164',
    logo: 'https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg',
  },
  {
    id: 'nagad',
    name: 'Nagad',
    number: '01722-528164',
    logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png',
  },
  {
    id: 'rocket',
    name: 'Rocket',
    number: '01722-528164',
    logo: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png',
  },
];

export default function Donate() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number.replace(/-/g, '')).then(() => {
      setCopiedNumber(number);
      toast({
        title: 'নম্বর কপি হয়েছে',
        description: 'নম্বরটি আপনার ক্লিপবোর্ডে কপি করা হয়েছে।',
      });
      setTimeout(() => setCopiedNumber(null), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="আর্থিক অনুদান"
        description="আর্থিক সহায়তা প্রদানের মাধ্যমে আমাদের মিশনকে সমর্থন করুন"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-6 shadow-sm border">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-blood-600" />
                <CardTitle className="text-lg">কিভাবে অনুদান দেবেন</CardTitle>
              </div>
              <CardDescription className="text-sm">
                অনুদান প্রদানের জন্য এই ধাপগুলি অনুসরণ করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="bg-gray-50 rounded-lg p-4 text-center border"
                    >
                      <img
                        src={method.logo}
                        alt={method.name}
                        className="h-8 mx-auto mb-2 object-contain"
                      />
                      <h3 className="font-medium text-base mb-2">
                        {method.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-sm text-gray-600">{method.number}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopyNumber(method.number)}
                          className="h-6 w-6"
                        >
                          {copiedNumber === method.number ? (
                            <Check className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900 text-sm">
                        পেমেন্ট নির্দেশাবলী:
                      </h4>
                      <ol className="mt-2 text-xs text-blue-800 space-y-1">
                        <li>১. পছন্দের পেমেন্ট পদ্ধতি নির্বাচন করুন</li>
                        <li>২. প্রদত্ত নম্বরে অনুদানের পরিমাণ পাঠান</li>
                        <li>৩. লেনদেন আইডি সংরক্ষণ করুন</li>
                        <li>৪. অনুদান ফর্মটি পূরণ করুন</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 shadow-sm border">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-blood-600" />
                <CardTitle className="text-lg">অনুদানের বিবৃতি জমা দিন</CardTitle>
              </div>
              <CardDescription className="text-sm">
                অনুদান সম্পূর্ণ করতে ফর্মটি পূরণ করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full h-12" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeRg5unKNOp5OAalKuoPS0FZ2y1W7TUEt5MXvhUKIv-lnt7NA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  অনুদান ফর্ম খুলুন
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="text-center text-gray-600 bg-white rounded-lg shadow-sm border p-4">
            <p className="text-sm mb-2">অনুদান সম্পর্কিত কোন প্রশ্ন থাকলে যোগাযোগ করুন:</p>
            <div className="flex items-center justify-center gap-2 mb-1">
              <p className="font-medium text-sm">ফোন: ০১৭২২-৫২৮১৬৪</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopyNumber('01722-528164')}
                className="h-6 w-6"
              >
                {copiedNumber === '01722-528164' ? (
                  <Check className="h-3 w-3 text-green-600" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
            <p className="font-medium text-sm">ইমেইল: bobdo5800@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
