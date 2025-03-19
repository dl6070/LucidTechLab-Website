import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageCircle, Notebook as Robot } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="particles-bg dark:opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Business with{' '}
              <span className="text-orange-500">AI-Powered Automation</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Lucid Tech delivers cutting-edge AI solutions for workflow efficiency,
              customer engagement, and data insights.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 dark:text-white">50% Faster</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI automation reduces manual task processing time by half, streamlining workflows and increasing operational efficiency across your organization.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 dark:text-white">80% Improved</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Customer satisfaction rates increase by 80% with our AI-powered response systems, providing instant, accurate support 24/7.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <Robot className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 dark:text-white">100% AI-Driven</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every solution we deliver is powered by state-of-the-art AI technology, ensuring intelligent automation and continuous learning for optimal results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;