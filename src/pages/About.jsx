import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Code } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const skills = {
    languages: ['C', 'Java', 'JavaScript'],
    frontend: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'MongoDB'],
    others: ['RPA', 'Research', 'Git/GitHub']
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Profile Summary */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Profile Summary
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Detail-oriented and innovative software enthusiast skilled in frontend, backend, and 
              research-driven technologies. Adept at solving problems with creativity and precision. 
              Seeking opportunities to contribute technical expertise while continuously learning 
              and growing in the dynamic field of software development.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">MSc Software Systems</h3>
              </div>
              <p className="text-indigo-100 mb-2">Kongu Engineering College</p>
              <p className="text-indigo-200 text-sm mb-2">2021 – 2026</p>
              <p className="text-lg font-semibold">CGPA: 7.15</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">Higher Secondary</h3>
              </div>
              <p className="text-blue-100 mb-2">Kongu Vellalar Metric HR Sec School</p>
              <p className="text-blue-200 text-sm mb-2">HSC</p>
              <p className="text-lg font-semibold">80.7%</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">Secondary School</h3>
              </div>
              <p className="text-green-100 mb-2">Kongu Vellalar Metric HR Sec School</p>
              <p className="text-green-200 text-sm mb-2">SSLC</p>
              <p className="text-lg font-semibold">72.6%</p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Languages</h3>
              </div>
              <ul className="space-y-2">
                {skills.languages.map((skill) => (
                  <li key={skill} className="text-gray-700 flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Frontend</h3>
              </div>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li key={skill} className="text-gray-700 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Backend</h3>
              </div>
              <ul className="space-y-2">
                {skills.backend.map((skill) => (
                  <li key={skill} className="text-gray-700 flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Others</h3>
              </div>
              <ul className="space-y-2">
                {skills.others.map((skill) => (
                  <li key={skill} className="text-gray-700 flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Languages</h2>
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900">English</h3>
                  <p className="text-gray-600">Proficient</p>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900">Tamil</h3>
                  <p className="text-gray-600">Native</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;