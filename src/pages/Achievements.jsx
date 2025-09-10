import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Presentation, Sun, Brain } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      title: "3rd Prize in Ideathon",
      project: "Dual Axis Solar Tracking System",
      description: "Won third place in a prestigious innovation competition with a hardware project focused on renewable energy optimization.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      date: "2024"
    },
    {
      title: "Brain Gate Project Presentation",
      project: "Advanced BCI Technology",
      description: "Successfully presented Brain Gate project at Kongu Engineering College, demonstrating expertise in brain-computer interface technology.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      date: "2024"
    },
    {
      title: "Solar Tracker Project Presentation",
      project: "Dual Axis Solar Tracker",
      description: "Presented innovative solar tracking solution at BIT, Sathyamangalam, showcasing engineering excellence and sustainable technology.",
      icon: Sun,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      date: "2023"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Achievements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for innovation, technical excellence, and successful project presentations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Achievements List */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Icon Section */}
                  <div className={`bg-gradient-to-br ${achievement.color} p-8 md:p-12 flex items-center justify-center md:w-64`}>
                    <div className="text-center">
                      <achievement.icon className="h-16 w-16 md:h-20 md:w-20 text-white mx-auto mb-4" />
                      <div className="text-white/90 font-semibold text-lg">
                        {achievement.date}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 md:p-12">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {achievement.title}
                        </h3>
                        <h4 className={`text-lg font-semibold ${achievement.textColor} mb-4`}>
                          {achievement.project}
                        </h4>
                      </div>
                      <div className="hidden md:block">
                        <Award className="h-8 w-8 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {achievement.description}
                    </p>

                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-4 py-2 ${achievement.bgColor} ${achievement.textColor} text-sm font-medium rounded-full`}>
                        <Star className="h-4 w-4 mr-2" />
                        Achievement Unlocked
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Achievement Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
                <div className="text-indigo-200 text-lg">Major Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">2</div>
                <div className="text-indigo-200 text-lg">Successful Presentations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">1</div>
                <div className="text-indigo-200 text-lg">Competition Prize</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                These achievements represent my commitment to innovation, technical excellence, 
                and continuous learning in the field of software engineering and technology.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for New Challenges</h3>
            <p className="text-gray-600 mb-6">
              Always looking for opportunities to showcase innovation and technical expertise
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              <Presentation className="mr-2 h-5 w-5" />
              View All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Achievements;