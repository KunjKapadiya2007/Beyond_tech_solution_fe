'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  stepName: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Documentation",
    description: "We start by understanding your goals, user needs, and technical requirements through research and discussions — creating a clear, documented roadmap to move forward.",
    icon: "🔍",
    stepName: "DISCOVER",
    details: [
      "Requirements gathering and analysis",
      "User research and persona development",
      "Technical architecture planning",
      "Project timeline and milestone definition"
    ]
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Our design team creates intuitive user interfaces and interactive prototypes that bring your vision to life, ensuring optimal user experience across all devices.",
    icon: "🎨",
    stepName: "DESIGN",
    details: [
      "UI/UX design and wireframing",
      "Interactive prototype development",
      "Design system creation",
      "User testing and feedback integration"
    ]
  },
  {
    id: 3,
    title: "Development & Coding",
    description: "Using cutting-edge technologies and best practices, we build robust, scalable applications with clean code, following industry standards and security protocols.",
    icon: "💻",
    stepName: "DEVELOP",
    details: [
      "Frontend and backend development",
      "Database design and optimization",
      "API development and integration",
      "Code review and quality assurance"
    ]
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing ensures your application performs flawlessly across different environments, devices, and user scenarios before deployment.",
    icon: "🧪",
    stepName: "TEST",
    details: [
      "Automated and manual testing",
      "Performance optimization",
      "Security vulnerability assessment",
      "Cross-browser and device compatibility"
    ]
  },
  {
    id: 5,
    title: "Deploy & Support",
    description: "We handle seamless deployment to production environments and provide ongoing support, maintenance, and updates to keep your application running smoothly.",
    icon: "🚀",
    stepName: "DEPLOY & SUPPORT",
    details: [
      "Production deployment and monitoring",
      "Performance tracking and analytics",
      "Ongoing maintenance and updates",
      "Technical support and documentation"
    ]
  }
];

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep = processSteps.find(step => step.id === activeStep) || processSteps[0];

  return (
    <section className="relative bg-[#2a2a2a] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to code — we follow a proven, agile-driven process to deliver impactful, high-performing digital solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Step Number */}
            <div className="flex items-center space-x-6">
              <motion.div
                key={activeStep}
                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-5xl shadow-xl"
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <span className="text-6xl font-bold text-pink-500 filter drop-shadow-lg">{activeStep}</span>
              </motion.div>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {currentStep.title}
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Details List */}
                <div className="space-y-4">
                  {currentStep.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* EXACT REPLICA of your uploaded image */}
          <motion.div
            className="relative h-[500px] flex items-center justify-end pr-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Target/Bullseye at the top with arrows */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 z-30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                {/* Target circles */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center shadow-lg">
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
                    <div className="w-7 h-7 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Orange arrows */}
                <div className="absolute -top-1 -right-1 w-4 h-4">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-orange-400 border-r-[8px] border-r-transparent transform rotate-45"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-orange-400 border-r-[8px] border-r-transparent transform rotate-45"></div>
                </div>
                <div className="absolute -top-1 -left-1 w-4 h-4">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-orange-400 border-r-[8px] border-r-transparent transform rotate-45"></div>
                </div>
              </div>
            </motion.div>

            {/* STAIRS - EXACT isometric perspective like your image */}
            <div className="relative">
              {/* Step 5 - DEPLOY & SUPPORT (top/largest) */}
              <motion.div
                className={`absolute cursor-pointer ${activeStep === 5 ? 'z-20' : 'z-10'}`}
                style={{
                  bottom: '200px',
                  right: '100px',
                  width: '240px',
                  height: '40px'
                }}
                onClick={() => setActiveStep(5)}
                whileHover={{ scale: 1.02 }}
                animate={{ 
                  scale: activeStep === 5 ? 1.05 : 1,
                  filter: activeStep === 5 ? 'brightness(1.2)' : 'brightness(1)'
                }}
              >
                {/* Top face with label ON TOP */}
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-pink-400 to-red-500"
                  style={{
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)',
                    boxShadow: activeStep === 5 ? '0 0 20px rgba(236, 72, 153, 0.5)' : 'none'
                  }}
                >
                  {/* Label positioned on the visible top surface */}
                  <div className="absolute inset-0 flex items-center justify-center transform -skew-x-12">
                    <span className="text-white font-bold text-sm tracking-wide">
                      DEPLOY & SUPPORT
                    </span>
                  </div>
                </div>
                {/* Front face */}
                <div 
                  className="absolute w-full bg-gradient-to-b from-red-600 to-red-800"
                  style={{
                    bottom: '-15px',
                    height: '15px'
                  }}
                />
                {/* Right face */}
                <div 
                  className="absolute bg-gradient-to-br from-red-700 to-red-900"
                  style={{
                    top: '10px',
                    right: '-15px',
                    width: '15px',
                    height: '45px',
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </motion.div>

              {/* Step 4 - TEST */}
              <motion.div
                className={`absolute cursor-pointer ${activeStep === 4 ? 'z-20' : 'z-10'}`}
                style={{
                  bottom: '160px',
                  right: '80px',
                  width: '200px',
                  height: '40px'
                }}
                onClick={() => setActiveStep(4)}
                whileHover={{ scale: 1.02 }}
                animate={{ 
                  scale: activeStep === 4 ? 1.05 : 1,
                  filter: activeStep === 4 ? 'brightness(1.2)' : 'brightness(1)'
                }}
              >
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-pink-500 to-red-600"
                  style={{
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)',
                    boxShadow: activeStep === 4 ? '0 0 20px rgba(236, 72, 153, 0.5)' : 'none'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center transform -skew-x-12">
                    <span className="text-white font-bold text-sm tracking-wide">
                      TEST
                    </span>
                  </div>
                </div>
                <div 
                  className="absolute w-full bg-gradient-to-b from-red-600 to-red-800"
                  style={{ bottom: '-15px', height: '15px' }}
                />
                <div 
                  className="absolute bg-gradient-to-br from-red-700 to-red-900"
                  style={{
                    top: '10px',
                    right: '-15px',
                    width: '15px',
                    height: '45px',
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </motion.div>

              {/* Step 3 - DEVELOP */}
              <motion.div
                className={`absolute cursor-pointer ${activeStep === 3 ? 'z-20' : 'z-10'}`}
                style={{
                  bottom: '120px',
                  right: '60px',
                  width: '170px',
                  height: '40px'
                }}
                onClick={() => setActiveStep(3)}
                whileHover={{ scale: 1.02 }}
                animate={{ 
                  scale: activeStep === 3 ? 1.05 : 1,
                  filter: activeStep === 3 ? 'brightness(1.2)' : 'brightness(1)'
                }}
              >
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-pink-600 to-red-700"
                  style={{
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)',
                    boxShadow: activeStep === 3 ? '0 0 20px rgba(236, 72, 153, 0.5)' : 'none'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center transform -skew-x-12">
                    <span className="text-white font-bold text-sm tracking-wide">
                      DEVELOP
                    </span>
                  </div>
                </div>
                <div 
                  className="absolute w-full bg-gradient-to-b from-red-600 to-red-800"
                  style={{ bottom: '-15px', height: '15px' }}
                />
                <div 
                  className="absolute bg-gradient-to-br from-red-700 to-red-900"
                  style={{
                    top: '10px',
                    right: '-15px',
                    width: '15px',
                    height: '45px',
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </motion.div>

              {/* Step 2 - DESIGN */}
              <motion.div
                className={`absolute cursor-pointer ${activeStep === 2 ? 'z-20' : 'z-10'}`}
                style={{
                  bottom: '80px',
                  right: '40px',
                  width: '140px',
                  height: '40px'
                }}
                onClick={() => setActiveStep(2)}
                whileHover={{ scale: 1.02 }}
                animate={{ 
                  scale: activeStep === 2 ? 1.05 : 1,
                  filter: activeStep === 2 ? 'brightness(1.2)' : 'brightness(1)'
                }}
              >
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-pink-700 to-red-800"
                  style={{
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)',
                    boxShadow: activeStep === 2 ? '0 0 20px rgba(236, 72, 153, 0.5)' : 'none'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center transform -skew-x-12">
                    <span className="text-white font-bold text-sm tracking-wide">
                      DESIGN
                    </span>
                  </div>
                </div>
                <div 
                  className="absolute w-full bg-gradient-to-b from-red-600 to-red-800"
                  style={{ bottom: '-15px', height: '15px' }}
                />
                <div 
                  className="absolute bg-gradient-to-br from-red-700 to-red-900"
                  style={{
                    top: '10px',
                    right: '-15px',
                    width: '15px',
                    height: '45px',
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </motion.div>

              {/* Step 1 - DISCOVER (bottom/smallest) */}
              <motion.div
                className={`absolute cursor-pointer ${activeStep === 1 ? 'z-20' : 'z-10'}`}
                style={{
                  bottom: '40px',
                  right: '20px',
                  width: '110px',
                  height: '40px'
                }}
                onClick={() => setActiveStep(1)}
                whileHover={{ scale: 1.02 }}
                animate={{ 
                  scale: activeStep === 1 ? 1.05 : 1,
                  filter: activeStep === 1 ? 'brightness(1.2)' : 'brightness(1)'
                }}
              >
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-pink-800 to-red-900"
                  style={{
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)',
                    boxShadow: activeStep === 1 ? '0 0 20px rgba(236, 72, 153, 0.5)' : 'none'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center transform -skew-x-12">
                    <span className="text-white font-bold text-xs tracking-wide">
                      DISCOVER
                    </span>
                  </div>
                </div>
                <div 
                  className="absolute w-full bg-gradient-to-b from-red-600 to-red-800"
                  style={{ bottom: '-15px', height: '15px' }}
                />
                <div 
                  className="absolute bg-gradient-to-br from-red-700 to-red-900"
                  style={{
                    top: '10px',
                    right: '-15px',
                    width: '15px',
                    height: '45px',
                    clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}