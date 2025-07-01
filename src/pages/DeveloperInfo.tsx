
import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, Globe } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const DeveloperInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Developer Information" 
        description="Meet the developer behind BOBDO's web platform"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <img
                  src="/bobdo.png"
                  alt="Developer"
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
              </div>
            </div>
            
            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="text-xl font-bold text-gray-900">Ridoan Zisan</h2>
              <p className="text-gray-600 mt-1 text-sm">Full Stack Developer</p>
              
              <div className="mt-4 flex justify-center space-x-3">
                <a
                  href="https://github.com/ridoan01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ridoan-zisan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ridoan.zisan@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://ridoan-zisan.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-6">
                <a
                  href="https://ridoan-zisan.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Visit Portfolio
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Developer</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Ridoan Zisan is a passionate Full Stack Developer with expertise in modern web technologies. 
                He developed the BOBDO web platform using React, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-gray-600 text-sm">
                With a focus on creating impactful solutions, Ridoan combines technical expertise with a 
                deep understanding of user needs to build applications that make a difference in people's lives.
              </p>
            </div>

            <div className="bg-gray-50 px-6 py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm border">
                  <h4 className="font-medium text-gray-900 text-sm">Frontend</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    React, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border">
                  <h4 className="font-medium text-gray-900 text-sm">Backend</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    Node.js, Express, PostgreSQL
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border">
                  <h4 className="font-medium text-gray-900 text-sm">Tools</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    Git, VS Code, Figma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfo;
