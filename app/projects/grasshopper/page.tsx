'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code, Users, Sparkles, Target } from 'lucide-react';
import { useState } from 'react';

type Section = 'home' | 'work' | 'about' | 'contact';

export default function GrasshopperCaseStudy() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <button className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
          <div className="text-cyan-400 font-semibold">Case Study</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold mb-6">
              Education Technology • 2019-2021
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Google <span className="text-emerald-400">Grasshopper</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Gamifying computer science education to teach millions of learners worldwide how to code through interactive storytelling
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
          >
            <img
              src="/grasshopper.png"
              alt="Google Grasshopper interface"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { icon: Users, label: 'Global Reach', value: '8M+ Users' },
              { icon: Code, label: 'My Role', value: 'Curriculum Developer' },
              { icon: Sparkles, label: 'Platform', value: 'Mobile App' },
              { icon: Target, label: 'Impact', value: 'Millions Taught' }
            ].map((metric, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <metric.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">The Challenge</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              How do you make learning to code feel less like work and more like play? When I joined Google's Grasshopper team, we were tackling one of education's biggest challenges: making computer science accessible and engaging for absolute beginners worldwide.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Most coding tutorials were dry, text-heavy, and intimidating. We needed to create something different—an experience that felt like a game but taught real programming concepts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">My Role & Contributions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Curriculum Design',
                  description: 'Developed interactive coding puzzles and challenges that progressively introduced JavaScript concepts through storytelling and visual feedback.',
                  icon: '📚'
                },
                {
                  title: 'Gamification Strategy',
                  description: 'Designed reward systems, achievement badges, and progression mechanics that kept learners motivated and coming back.',
                  icon: '🎮'
                },
                {
                  title: 'Educational Content',
                  description: 'Crafted clear, concise explanations of complex programming concepts accessible to complete beginners from diverse backgrounds.',
                  icon: '✏️'
                },
                {
                  title: 'User Testing & Iteration',
                  description: 'Analyzed user data and feedback to continuously refine lessons, improving completion rates and learning outcomes.',
                  icon: '🔄'
                }
              ].map((contribution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 transition-all"
                >
                  <div className="text-5xl mb-4">{contribution.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{contribution.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{contribution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">The Approach</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">1. Make It Visual</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Instead of abstract code concepts, we used colorful animations and immediate visual feedback. Write a line of code, see instant results. This created a cause-and-effect loop that made programming feel tangible and rewarding.
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">2. Tell Stories</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Each lesson was wrapped in a narrative. You weren't just learning loops—you were helping a character solve problems, complete missions, and unlock new abilities. Context made concepts stick.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">3. Celebrate Progress</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Every small win was celebrated with animations, sound effects, and achievements. This positive reinforcement kept learners motivated, even when concepts got challenging.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">4. Adapt & Iterate</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We constantly analyzed which lessons caused drop-offs and refined them. Teaching internationally taught me that clarity transcends language—good design is universal.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-4">
              {[
                'JavaScript',
                'Mobile App Development',
                'Educational Design',
                'Gamification',
                'User Testing',
                'Data Analysis',
                'Content Strategy',
                'Cross-Cultural Design'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Results & Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { value: '8M+', label: 'Active Learners' },
                { value: '150+', label: 'Countries Reached' },
                { value: '4.6★', label: 'App Store Rating' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center"
                >
                  <div className="text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "Working on Grasshopper taught me that the best educational experiences don't feel like education—they feel like play. This philosophy now drives how I approach all user interfaces: make the complex simple, the boring engaging, and the intimidating approachable."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">What I Learned</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Design for Delight',
                  description: 'Users remember how you make them feel. Every interaction should spark joy, curiosity, or satisfaction.'
                },
                {
                  title: 'Clarity is Universal',
                  description: 'Teaching internationally reinforced that good design transcends language barriers. Clear visuals and intuitive flows work everywhere.'
                },
                {
                  title: 'Data-Driven Empathy',
                  description: 'Numbers show where users struggle, but talking to real people reveals why. Both are essential.'
                },
                {
                  title: 'Progressive Disclosure',
                  description: 'Don\'t overwhelm users with everything at once. Reveal complexity gradually as they\'re ready for it.'
                }
              ].map((takeaway, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border-l-4 border-cyan-400"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{takeaway.title}</h3>
                  <p className="text-gray-300">{takeaway.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 px-6 border-t border-gray-700/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-sm">Previous Project</div>
                <div className="font-semibold">Mr. Green</div>
              </div>
            </button>

            <button 
              onClick={() => window.location.href = '/'}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold transition-all"
            >
              Back to All Projects
            </button>

            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
              <div className="text-right">
                <div className="text-sm">Next Project</div>
                <div className="font-semibold">Google CS First</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700/20 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Joshua Usselman</p>
        </div>
      </footer>
    </div>
  );
}