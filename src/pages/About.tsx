import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, Target, Users, MessageSquare, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Lucid Tech - AI Automation for Service Businesses</title>
        <meta name="description" content="Lucid Tech specializes in practical AI automation solutions for service-based businesses like plumbers, builders, HVAC technicians, and painters." />
        <meta name="keywords" content="AI automation, service business automation, plumbing automation, construction automation, HVAC automation" />
      </Helmet>

      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Who We Are</h1>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-12">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                At Lucid Tech LLC, we specialize in practical AI automation solutions tailored for service-based businesses. Our mission is simple: to help professionals like plumbers, builders, HVAC technicians, and painters streamline their operations, save time, and increase profitability through intelligent automation.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We understand that technology should work for you, not against you. That's why we cut through the fluff and provide no-nonsense, easy-to-implement AI-driven solutions that improve efficiency and customer interactions.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                With years of experience in automation, workflow optimization, and AI strategy, our team is dedicated to delivering technology that works in the real world—without unnecessary complexity.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <Wrench className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-500 mb-2">Practical Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Real-world automation tools designed specifically for service businesses
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <Clock className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-500 mb-2">Time-Saving</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Streamlined operations that let you focus on growing your business
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <Target className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-500 mb-2">Results-Driven</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solutions focused on increasing efficiency and profitability
              </p>
            </motion.div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              How We Help Service Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Customer Management</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Automated scheduling, follow-ups, and customer communication systems
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare className="h-8 w-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Smart Communication</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    AI-powered response systems for quick, accurate customer service
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="h-8 w-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Workflow Automation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Streamlined processes for estimates, invoicing, and project management
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Simplify Your Business Operations?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's unlock new opportunities with AI automation tailored for your service business.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;