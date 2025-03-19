import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Workflow, BarChart3, Brain, Shield, Zap, Users, Code, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions & Services | Lucid Tech - AI Automation Experts</title>
        <meta name="description" content="Transform your business with Lucid Tech's AI solutions. Offering intelligent chatbots, workflow automation, and data analytics services to boost efficiency and growth." />
        <meta name="keywords" content="AI solutions, chatbot development, workflow automation, business intelligence, data analytics, artificial intelligence services" />
        <link rel="canonical" href="https://lucidtech.ai/services" />
        <meta property="og:title" content="AI Solutions & Services | Lucid Tech" />
        <meta property="og:description" content="Transform your business with Lucid Tech's AI solutions. Expert AI automation services for modern enterprises." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Solutions & Services | Lucid Tech" />
        <meta name="twitter:description" content="Transform your business with Lucid Tech's AI solutions. Expert AI automation services for modern enterprises." />
      </Helmet>

      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Enterprise AI Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to transform your business operations,
              enhance customer experiences, and drive data-driven decision making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <MessageSquare className="h-12 w-12 text-orange-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 dark:text-white">AI Chatbots</h2>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-3">
                <li>• 24/7 intelligent customer support</li>
                <li>• Natural language processing</li>
                <li>• Multi-language support</li>
                <li>• Custom knowledge base integration</li>
                <li>• Analytics and insights dashboard</li>
                <li>• Sentiment analysis capabilities</li>
                <li>• Automated ticket management</li>
                <li>• Seamless CRM integration</li>
              </ul>
              <Link to="/contact" className="btn-primary inline-block">
                Learn More
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <Workflow className="h-12 w-12 text-orange-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Workflow Automation</h2>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-3">
                <li>• Process automation and optimization</li>
                <li>• Smart document processing</li>
                <li>• Task scheduling and management</li>
                <li>• Integration with existing systems</li>
                <li>• Real-time monitoring and alerts</li>
                <li>• Custom workflow design</li>
                <li>• Performance analytics</li>
                <li>• Automated reporting</li>
              </ul>
              <Link to="/contact" className="btn-primary inline-block">
                Learn More
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card dark:bg-gray-900"
            >
              <BarChart3 className="h-12 w-12 text-orange-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Data Insights</h2>
              <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-3">
                <li>• Predictive analytics</li>
                <li>• Business intelligence dashboards</li>
                <li>• Pattern recognition</li>
                <li>• Custom reporting solutions</li>
                <li>• Data visualization tools</li>
                <li>• Trend analysis</li>
                <li>• Real-time data processing</li>
                <li>• Machine learning models</li>
              </ul>
              <Link to="/contact" className="btn-primary inline-block">
                Learn More
              </Link>
            </motion.div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
              Why Choose Our AI Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Brain className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Advanced Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  State-of-the-art AI models and algorithms for optimal performance and scalability
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Enterprise Security</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bank-grade security protocols and comprehensive data protection measures
                </p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Rapid Implementation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Quick deployment and seamless integration with your existing technology stack
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <Users className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Expert Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dedicated team of AI specialists providing ongoing support and optimization
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <Code className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Custom Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tailored AI implementations designed specifically for your business needs
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <Cloud className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Cloud-Native</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scalable cloud infrastructure ensuring optimal performance and reliability
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;