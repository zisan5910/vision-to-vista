
import React, { useState } from 'react';
import { Search, User, Phone, MapPin, Droplet, Calendar } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Sample donor data - replace with Google Sheets integration
const sampleDonors = [
  {
    id: 1,
    name: 'মোঃ রহিম উদ্দিন',
    bloodGroup: 'A+',
    phone: '01711-123456',
    address: 'সাতমাথা, বগুড়া',
    lastDonation: '২০২৪-০১-১৫',
    available: true,
    age: 28
  },
  {
    id: 2,
    name: 'ফাতেমা খাতুন',
    bloodGroup: 'B+',
    phone: '01722-234567',
    address: 'শহীদ জিয়া সড়ক, বগুড়া',
    lastDonation: '২০২৩-১২-১০',
    available: true,
    age: 25
  },
  {
    id: 3,
    name: 'করিম আহমেদ',
    bloodGroup: 'O+',
    phone: '01733-345678',
    address: 'নন্দনপুর, বগুড়া',
    lastDonation: '২০২৪-০২-০৫',
    available: false,
    age: 32
  },
  {
    id: 4,
    name: 'সালমা বেগম',
    bloodGroup: 'AB+',
    phone: '01744-456789',
    address: 'চেরাগআলী, বগুড়া',
    lastDonation: '২০২৩-১১-২০',
    available: true,
    age: 30
  },
  {
    id: 5,
    name: 'রাশেদ হাসান',
    bloodGroup: 'A-',
    phone: '01755-567890',
    address: 'আদমদীঘি, বগুড়া',
    lastDonation: '২০২৪-০১-২৮',
    available: true,
    age: 26
  }
];

const FindDonors = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('');
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [filteredDonors, setFilteredDonors] = useState(sampleDonors);
  const [isSearching, setIsSearching] = useState(false);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filtered = sampleDonors;
      
      if (selectedBloodGroup) {
        filtered = filtered.filter(donor => donor.bloodGroup === selectedBloodGroup);
      }
      
      if (searchLocation) {
        filtered = filtered.filter(donor => 
          donor.address.toLowerCase().includes(searchLocation.toLowerCase())
        );
      }
      
      setFilteredDonors(filtered);
      setIsSearching(false);
    }, 1000);
  };

  const handleReset = () => {
    setSelectedBloodGroup('');
    setSearchLocation('');
    setFilteredDonors(sampleDonors);
  };

  return (
    <div>
      <PageHeader
        title="রক্তদাতা খুঁজুন"
        description="আপনার প্রয়োজনীয় রক্তের গ্রুপ এবং এলাকা নির্বাচন করে উপলব্ধ রক্তদাতাদের তথ্য দেখুন"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              রক্তদাতা অনুসন্ধান
            </CardTitle>
            <CardDescription>
              রক্তের গ্রুপ এবং এলাকা নির্বাচন করুন
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">রক্তের গ্রুপ</label>
                <Select value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
                  <SelectTrigger>
                    <SelectValue placeholder="রক্তের গ্রুপ নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">এলাকা</label>
                <Input
                  type="text"
                  placeholder="এলাকার নাম লিখুন"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              
              <div className="flex items-end gap-2">
                <Button 
                  onClick={handleSearch} 
                  className="flex-1"
                  disabled={isSearching}
                >
                  {isSearching ? 'খোঁজ করা হচ্ছে...' : 'অনুসন্ধান করুন'}
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  রিসেট
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            উপলব্ধ রক্তদাতা ({filteredDonors.length})
          </h2>
          
          {filteredDonors.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Droplet className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">
                  আপনার অনুসন্ধানের সাথে মিলে এমন কোন রক্তদাতা পাওয়া যায়নি।
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDonors.map((donor) => (
                <Card key={donor.id} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <User className="h-5 w-5" />
                        {donor.name}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                          donor.bloodGroup.includes('+') 
                            ? 'bg-blood-100 text-blood-600' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {donor.bloodGroup}
                        </span>
                        <span className={`inline-block w-3 h-3 rounded-full ${
                          donor.available ? 'bg-green-500' : 'bg-red-500'
                        }`} title={donor.available ? 'উপলব্ধ' : 'অনুপলব্ধ'}>
                        </span>
                      </div>
                    </div>
                    <CardDescription>বয়স: {donor.age} বছর</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blood-600" />
                        <a 
                          href={`tel:${donor.phone}`}
                          className="text-blood-600 hover:text-blood-700 font-medium"
                        >
                          {donor.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-blood-600 mt-1" />
                        <span className="text-gray-700">{donor.address}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blood-600" />
                        <span className="text-gray-700">
                          শেষ রক্তদান: {donor.lastDonation}
                        </span>
                      </div>
                      
                      <div className="pt-3 border-t">
                        <Button 
                          className="w-full" 
                          asChild
                          disabled={!donor.available}
                        >
                          <a href={`tel:${donor.phone}`}>
                            {donor.available ? 'যোগাযোগ করুন' : 'বর্তমানে অনুপলব্ধ'}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">গুরুত্বপূর্ণ নির্দেশনা:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• রক্তদাতার সাথে যোগাযোগের পূর্বে অবশ্যই ভদ্রতা বজায় রাখুন</li>
              <li>• রক্তদানের জন্য জোর করবেন না, অনুরোধ করুন</li>
              <li>• জরুরি প্রয়োজন ছাড়া রাত ১০টার পর ফোন করবেন না</li>
              <li>• রক্তদাতার স্বাস্থ্য পরীক্ষা করে নিন</li>
              <li>• রক্তদানের পর দাতার যত্ন নিন</li>
            </ul>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <div className="mt-8 text-center bg-blood-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blood-600 mb-2">জরুরি প্রয়োজনে</h3>
          <p className="text-gray-700 mb-4">
            রক্তের জরুরি প্রয়োজনে BOBDO হটলাইনে যোগাযোগ করুন
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-blood-600 hover:bg-blood-700">
              <a href="tel:01722528164">01722-528164</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDonors;
