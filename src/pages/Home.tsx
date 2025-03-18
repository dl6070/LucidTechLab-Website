import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Leaf, SunSnow as Snow, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AAAME Lawn & Snow LLC - Professional Lawn Care & Snow Removal Services</title>
        <meta name="description" content="Professional lawn care and snow removal services. AAAME Lawn & Snow LLC provides expert lawn maintenance and snow plowing services." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/580900/pexels-photo-580900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Professional Lawn Care & Snow Removal Services</h1>
            <p className="text-xl mb-8">Your trusted partner for year-round property maintenance. We keep your property looking its best in every season.</p>
            <Link
              to="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Lawn Care</h3>
              <p className="text-gray-600">Professional lawn maintenance services including mowing, fertilization, and weed control.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Snow className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Snow Removal</h3>
              <p className="text-gray-600">Reliable snow plowing and removal services for residential and commercial properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Experienced Team', icon: Star },
              { title: 'Quality Service', icon: Star },
              { title: 'Reliable & Timely', icon: Star },
              { title: 'Customer Satisfaction', icon: Star }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-10 w-10 mx-auto text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free quote on our services.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;