import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero2.jpeg";
import { 
  heroContent, 
  brandInfo 
} from '../../data/mock.js';
export const HeroSection = () => {
  const handleBookAppointment = () => {
    window.location.href = '/contact';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello ASCEND, I would like to book an appointment for rehabilitation services.'
    );
    window.open(`https://wa.me/${brandInfo.phone}?text=${message}`, '_blank');
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/30 to-emerald-200/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          
          {/* Organic SVG Shapes */}
          <svg className="absolute top-1/4 left-10 w-32 h-32 text-emerald-300/20" viewBox="0 0 200 200">
            <path fill="currentColor" d="M39.5,-65.5C51.4,-58.1,61.5,-48.1,68.8,-36.2C76.1,-24.3,80.6,-10.5,80.3,3.2C80,16.9,74.9,30.5,66.8,41.8C58.7,53.1,47.6,62.1,35.1,67.8C22.6,73.5,8.7,76,-5.5,74.8C-19.7,73.6,-34.1,68.8,-46.3,61.2C-58.5,53.6,-68.5,43.2,-73.8,30.8C-79.1,18.4,-79.7,4,-76.5,-9.5C-73.3,-23,-66.3,-35.6,-56.5,-45.1C-46.7,-54.6,-34.1,-61,-21.1,-66.2C-8.1,-71.4,5.3,-75.4,18.8,-74.5C32.3,-73.6,46,-67.8,39.5,-65.5Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-1/4 right-20 w-40 h-40 text-blue-300/20" viewBox="0 0 200 200">
            <path fill="currentColor" d="M44.3,-76.6C57.1,-68.5,67.3,-55.3,73.8,-40.8C80.3,-26.3,83.1,-10.6,81.5,4.5C79.9,19.6,73.9,34.1,65.3,46.8C56.7,59.5,45.5,70.4,32.3,75.8C19.1,81.2,3.9,81.1,-11.4,78.5C-26.7,75.9,-42.1,70.8,-54.8,62.3C-67.5,53.8,-77.5,41.9,-82.3,28.2C-87.1,14.5,-86.7,-0.9,-82.1,-15.3C-77.5,-29.7,-68.7,-43.1,-57.3,-52.5C-45.9,-61.9,-32,-67.3,-18.1,-73.2C-4.2,-79.1,9.7,-85.5,23.3,-84.5C36.9,-83.5,50.2,-75.1,44.3,-76.6Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block">
                <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6 animate-bounce">
                  Premium Rehabilitation Centre
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 mb-2 animate-fade-in-up">
                  {heroContent.headline.split(' ').slice(0, 4).join(' ')}
                </span>
                <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                  {heroContent.headline.split(' ').slice(4).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
                {heroContent.subheading}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <button
                  onClick={handleBookAppointment}
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  WhatsApp Now
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-up animation-delay-800">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_bd914d12-d07b-4a8f-9c3c-74daa047fc18/artifacts/d19vp8ig_hero1.jpeg"
                  alt="Recovery Journey"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-3xl opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-emerald-500 rounded-3xl opacity-20 animate-float animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
