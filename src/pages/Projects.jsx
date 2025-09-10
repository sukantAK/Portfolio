import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe, 
  Zap, 
  Sun, 
  ExternalLink, 
  Github,
  Lightbulb,
  Shield,
  Cpu
} from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "Federated Learning Based Skin Disease Prediction",
      description: "Built an advanced classifier for disease detection using IoT devices. Implemented FEDSGD algorithm for accurate prediction and classification in healthcare applications.",
      technologies: ["AI", "Healthcare", "Federated Learning", "IoT"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Tours & Travels Website for TCS Bus Service",
      description: "Designed and developed a comprehensive frontend solution for a transportation service. Created detailed project documentation and user-friendly interface.",
      technologies: ["Web Development", "UI/UX", "Frontend"],
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "LI-FI Technology Prototype",
      description: "Presented an innovative Li-Fi communication model at BIT, Sathyamangalam. Demonstrated next-generation networking capabilities using light-based data transmission.",
      technologies: ["IoT", "Networking", "Innovation"],
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      title: "Dual Axis Solar Tracking System",
      description: "Developed a hardware project that won 3rd place in Ideathon. Created an intelligent solar panel system that maximizes energy efficiency through dual-axis tracking.",
      technologies: ["Hardware", "IoT", "Renewable Energy"],
      icon: Sun,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI, web development, IoT, and hardware engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                {/* Project Icon and Header */}
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                    Technologies & Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${project.bgColor} ${project.textColor} text-sm font-medium rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors group-hover:bg-indigo-600">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </button>
                  <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="relative h-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and explore new technologies. 
              Let's build something amazing together!
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Get In Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;