import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 Lucid Tech. All rights reserved.</p>
            <div className="flex items-center mt-2">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:info@lucidtechlab.com" className="text-sm hover:text-orange-500">
                info@lucidtechlab.com
              </a>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <span className="inline-flex items-center text-xs bg-gray-800 dark:bg-gray-700 px-2 py-1 rounded">
            Powered by AI
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;