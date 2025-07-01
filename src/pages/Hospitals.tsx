
import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, Navigation } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const hospitals = [
  {
    id: 1,
    name: 'শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল',
    type: 'সরকারি',
    address: 'শহীদ জিয়া সড়ক, বগুড়া',
    phone: ['০৫১-৬৯৯৬৫', '০৫১-৬৯৯৬৬'],
    emergency: '০১৭৬৯-৪০১৭৩৭',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ', 'ডায়ালাইসিস', 'অপারেশন থিয়েটার'],
    mapLink: 'https://maps.app.goo.gl/HLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8483, lng: 89.3697 }
  },
  {
    id: 2,
    name: 'মহাস্থানগড় রেড ক্রিসেন্ট ব্লাড সেন্টার',
    type: 'বেসরকারি',
    address: 'সাতমাথা, বগুড়া',
    phone: ['০৫১-৬৬২২৫'],
    emergency: '০১৭১১-৯৩৭৬০২',
    hours: 'সকাল ৯টা - রাত ৯টা',
    services: ['ব্লাড ব্যাংক', 'রক্ত পরীক্ষা', 'প্লাটিলেট', 'রক্তের উপাদান সংরক্ষণ'],
    mapLink: 'https://maps.app.goo.gl/sSQPZLmFGHBGHNqb7',
    coordinates: { lat: 24.8510, lng: 89.3720 }
  },
  {
    id: 3,
    name: 'বগুড়া মেডিকেল সেন্টার',
    type: 'বেসরকারি',
    address: 'ধুনট রোড, বগুড়া',
    phone: ['০৫১-৬৯০০১'],
    emergency: '০১৭১১-০০১২৩৪',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ', 'ল্যাবরেটরি'],
    mapLink: 'https://maps.app.goo.gl/uHLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8450, lng: 89.3650 }
  },
  {
    id: 4,
    name: 'ইবনে সিনা হাসপাতাল',
    type: 'বেসরকারি',
    address: 'নওদাপাড়া, বগুড়া',
    phone: ['০৫১-৬৭৭২২'],
    emergency: '০১৭১১-৮৮৯৯৭৭',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ', 'ডায়ালাইসিস', 'কার্ডিওলজি'],
    mapLink: 'https://maps.app.goo.gl/kHLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8520, lng: 89.3680 }
  },
  {
    id: 5,
    name: 'পপুলার মেডিকেল সেন্টার',
    type: 'বেসরকারি',
    address: 'ঠনঠনিয়া, বগুড়া',
    phone: ['০৫১-৬৬০০১'],
    emergency: '০১৭১১-২২৩৩৪৪',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ', 'প্যাথলজি'],
    mapLink: 'https://maps.app.goo.gl/pHLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8480, lng: 89.3750 }
  },
  {
    id: 6,
    name: 'আল-মারকাজুল ইসলামি হাসপাতাল',
    type: 'বেসরকারি',
    address: 'কালেক্টরেট রোড, বগুড়া',
    phone: ['০৫১-৬৯৯০০'],
    emergency: '০১৭১১-৪৪৫৫৬৬',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'সাধারণ চিকিৎসা'],
    mapLink: 'https://maps.app.goo.gl/qHLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8470, lng: 89.3710 }
  },
  {
    id: 7,
    name: 'রফাতুল্লাহ কমিউনিটি হাসপাতাল',
    type: 'বেসরকারি',
    address: 'শেরপুর রোড, বগুড়া',
    phone: ['০৫১-৬১১২২'],
    emergency: '০১৭১১-৬৬৭৭৮৮',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'মাতৃত্বকালীন সেবা'],
    mapLink: 'https://maps.app.goo.gl/rHLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8490, lng: 89.3730 }
  },
  {
    id: 8,
    name: 'ডিজিটাল হাসপাতাল',
    type: 'বেসরকারি',
    address: 'শিবগঞ্জ রোড, বগুড়া',
    phone: ['০৫১-৬৮৮০০'],
    emergency: '০১৭১১-৯৯৮৮৭৭',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'আইসিইউ', 'ডিজিটাল এক্স-রে'],
    mapLink: 'https://maps.app.goo.gl/sHLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8500, lng: 89.3760 }
  },
  {
    id: 9,
    name: 'লাইফ লাইন হাসপাতাল',
    type: 'বেসরকারি',
    address: 'নওদাপাড়া, বগুড়া',
    phone: ['০৫১-৬৭৭৩৩'],
    emergency: '০১৭১১-১১২২৩৩',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'কার্ডিয়াক কেয়ার'],
    mapLink: 'https://maps.app.goo.gl/tHLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8460, lng: 89.3690 }
  },
  {
    id: 10,
    name: 'আদর্শ হাসপাতাল',
    type: 'বেসরকারি',
    address: 'সাতমাথা, বগুড়া',
    phone: ['০৫১-৬৬৬৳৩'],
    emergency: '০১৭১১-৪৪৫৫৬৬',
    hours: '২৪/৭',
    services: ['জরুরি বিভাগ', 'ব্লাড ব্যাংক', 'অর্থোপেডিক্স'],
    mapLink: 'https://maps.app.goo.gl/vHLGvQPGHBGZGHNqb7',
    coordinates: { lat: 24.8530, lng: 89.3740 }
  }
];

const Hospitals = () => {
  return (
    <div>
      <PageHeader
        title="হাসপাতাল তথ্য"
        description="বগুড়া জেলার প্রধান হাসপাতাল এবং ব্লাড ব্যাংকের বিস্তারিত তথ্য এবং অবস্থান"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            হাসপাতালসমূহের অবস্থান
          </h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14481.815149404929!2d89.36203!3d24.8483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc558810000000%3A0x0!2sBogura%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1640000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="বগুড়া হাসপাতালসমূহের অবস্থান"
            ></iframe>
          </div>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Card key={hospital.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg leading-tight">{hospital.name}</CardTitle>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    hospital.type === 'সরকারি' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {hospital.type}
                  </span>
                </div>
                <CardDescription className="text-sm">
                  {hospital.services.slice(0, 3).join(' • ')}
                  {hospital.services.length > 3 && '...'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blood-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm mb-2">{hospital.address}</p>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs"
                          asChild
                        >
                          <a
                            href={hospital.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Navigation className="h-3 w-3" />
                            দিকনির্দেশনা
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs"
                          asChild
                        >
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${hospital.coordinates.lat},${hospital.coordinates.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            ম্যাপে দেখুন
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blood-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-800">সাধারণ:</p>
                        {hospital.phone.map((num, index) => (
                          <p key={index} className="text-gray-700 text-sm">
                            <a href={`tel:${num.replace(/[^\d]/g, '')}`} className="hover:text-blood-600">
                              {num}
                            </a>
                          </p>
                        ))}
                        <p className="text-blood-600 font-medium text-sm mt-2">
                          জরুরি: 
                          <a href={`tel:${hospital.emergency.replace(/[^\d]/g, '')}`} className="ml-1 hover:text-blood-700">
                            {hospital.emergency}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blood-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm">সেবার সময়: {hospital.hours}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-sm font-medium text-gray-800 mb-2">সেবাসমূহ:</p>
                    <div className="flex flex-wrap gap-1">
                      {hospital.services.map((service, index) => (
                        <span 
                          key={index}
                          className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Instructions */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-700 mb-4">জরুরি অবস্থায় করণীয়:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-red-600">
            <ul className="space-y-2">
              <li>• যেকোনো জরুরি অবস্থায় ৯৯৯ নম্বরে কল করুন</li>
              <li>• রোগীর অবস্থা স্থিতিশীল রাখুন</li>
              <li>• প্রয়োজনীয় কাগজপত্র সাথে নিন</li>
            </ul>
            <ul className="space-y-2">
              <li>• রক্তের প্রয়োজনে BOBDO হটলাইন: ০১৭২২-৫২৮১৬৪</li>
              <li>• অ্যাম্বুলেন্স সেবা: ১০২</li>
              <li>• ফায়ার সার্ভিস: ১০১</li>
            </ul>
          </div>
        </div>

        {/* BOBDO Emergency Contact */}
        <div className="mt-8 bg-blood-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-blood-600">জরুরি রক্তের প্রয়োজনে</h2>
          <p className="text-gray-700 mb-6">
            রক্তের জরুরি প্রয়োজনে যোগাযোগ করুন BOBDO এর সাথে:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-blood-600 hover:bg-blood-700">
              <a href="tel:01722528164">০১৭২২-৫২৮১৬৪</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:bobdo5800@gmail.com">bobdo5800@gmail.com</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
