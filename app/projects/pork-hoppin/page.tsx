'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Gamepad2, Code, Smartphone, Globe } from 'lucide-react';
import { useState } from 'react';

type Section = 'home' | 'work' | 'about' | 'contact';

export default function PorkHoppinCaseStudy() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
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
            <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-6">
              Game Development • Personal Project
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Pork <span className="text-orange-400">Hoppin'</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              A cross-platform endless runner game built from scratch to explore game mechanics, physics, and mobile-first development—attracting 1,000+ test plays
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <a
                href="https://jusselman.github.io/PigsOnTheWing/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-semibold transition-all flex items-center gap-2 group"
              >
                <Globe className="w-5 h-5" />
                Play Web Version
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/jusselman/PigsOnTheWing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-orange-400 rounded-full text-orange-400 font-semibold hover:bg-orange-400/10 transition-all flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                View Web Code
              </a>
              <a
                href="https://github.com/jusselman/pig"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all flex items-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                View Mobile Code
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
          >
            <img
              src="/porkhoppin.png"
              alt="Pork Hoppin' gameplay"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { icon: Gamepad2, label: 'Test Plays', value: '1,000+' },
              { icon: Code, label: 'Web Version', value: 'Vanilla JS' },
              { icon: Smartphone, label: 'Mobile Version', value: 'React Native' },
              { icon: Globe, label: 'Type', value: 'Passion Project' }
            ].map((metric, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <metric.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
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
            <h2 className="text-4xl font-bold text-white mb-8">The Concept</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Built purely for the joy of creating, Pork Hoppin' is an endless runner game where players guide a flying pig through obstacles, collecting points and power-ups. What started as a weekend experiment turned into a deep dive into game physics, animation, state management, and cross-platform development.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The real challenge? Building it twice—once as a web game using pure vanilla JavaScript to prove I could handle complex interactions without frameworks, and again as a React Native mobile app to explore native mobile development. Both versions share core game logic but are optimized for their respective platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Game Physics & Mechanics',
                  description: 'Implemented gravity simulation, collision detection, and smooth animations using requestAnimationFrame. Built custom physics engine handling velocity, acceleration, and boundary constraints.',
                  icon: '⚙️',
                  highlight: 'Vanilla JS & React Native'
                },
                {
                  title: 'State Management',
                  description: 'Managed complex game state including player position, score tracking, obstacle generation, power-up systems, and game lifecycle (start, pause, game over) without external state libraries.',
                  icon: '🎮',
                  highlight: 'Pure JavaScript Logic'
                },
                {
                  title: 'Cross-Platform Architecture',
                  description: 'Designed core game logic to be platform-agnostic, then built platform-specific rendering layers. Web version uses pure JavaScript, HTML, and CSS; mobile version uses React Native components and gestures.',
                  icon: '🌐',
                  highlight: 'Reusable Architecture'
                },
                {
                  title: 'Performance Optimization',
                  description: 'Optimized rendering loops for 60fps gameplay, implemented object pooling for obstacles, and used efficient collision detection algorithms to maintain smooth performance on mobile devices.',
                  icon: '⚡',
                  highlight: 'Mobile-First Optimization'
                }
              ].map((contribution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all"
                >
                  <div className="text-5xl mb-4">{contribution.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{contribution.title}</h3>
                  <div className="inline-block px-3 py-1 bg-orange-500/20 rounded-full text-orange-400 text-xs font-semibold mb-3">
                    {contribution.highlight}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{contribution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Two Versions */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Why Build It Twice?</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">Vanilla JavaScript Mastery</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The web version demonstrates my ability to build complex, interactive applications without relying on frameworks. No React, no game libraries—just pure JavaScript, DOM manipulation. This proves I understand the fundamentals, not just how to use tools built by others.
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">React Native Exploration</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The mobile version showcases my adaptability and mobile development skills. Translating browser-based game logic to React Native required rethinking rendering, input handling (touch vs. keyboard), and performance optimization for resource-constrained devices.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">Cross-Platform Thinking</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Building the same game twice taught me how to architect code for reusability. The core game logic—physics, scoring, difficulty progression—is conceptually identical but implemented appropriately for each platform's constraints and capabilities.
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
            <h2 className="text-4xl font-bold text-white mb-8">Technologies Used</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/30">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Web Version</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Vanilla JavaScript',
                    'HTML5',
                    'CSS3',
                    'Git/GitHub',
                    'GitHub Pages'
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-300 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Mobile Version</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'React Native',
                    'JavaScript',
                    'Expo',
                    'Mobile Gestures',
                    'Git/GitHub',
                    'Cross-Platform'
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Real User Engagement</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { value: '1,000+', label: 'Test Plays' },
                { value: '2', label: 'Platform Versions' },
                { value: '100%', label: 'Built from Scratch' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-center"
                >
                  <div className="text-5xl font-bold text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "Building Pork Hoppin' was pure creative exploration—no clients, no deadlines, just me solving interesting technical challenges for the joy of it. It reinforced that I genuinely love programming and can self-direct learning when motivated by curiosity. The 1,000+ plays proved that even a simple, well-executed idea can resonate with users."
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
            <h2 className="text-4xl font-bold text-white mb-8">What This Project Demonstrates</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Fundamentals Over Frameworks',
                  description: 'Building complex interactions in vanilla JavaScript proves deep understanding of core concepts—not just framework syntax.'
                },
                {
                  title: 'Self-Directed Learning',
                  description: 'Explored game physics, collision detection, and animation loops independently through documentation, experimentation, and iteration.'
                },
                {
                  title: 'Cross-Platform Versatility',
                  description: 'Successfully translated the same concept across web and mobile platforms, adapting to each environment\'s unique constraints and capabilities.'
                },
                {
                  title: 'Performance-Conscious Development',
                  description: 'Optimized for 60fps gameplay on both desktop browsers and mobile devices through efficient algorithms and rendering strategies.'
                },
                {
                  title: 'User-Focused Iteration',
                  description: 'Gathered feedback from 1,000+ plays to refine difficulty curves, control responsiveness, and overall game feel.'
                },
                {
                  title: 'Passion for Building',
                  description: 'Created purely for the love of coding—demonstrating intrinsic motivation and genuine enthusiasm for software development.'
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

      {/* Try It Yourself */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Try It Yourself</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't just read about it—play the game and explore the source code
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://jusselman.github.io/PigsOnTheWing/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-orange-500/10 border-2 border-orange-500/30 hover:border-orange-500 transition-all group"
              >
                <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Play Web Version</h3>
                <p className="text-gray-300 text-sm mb-4">Try it in your browser right now</p>
                <div className="text-orange-400 flex items-center justify-center gap-2">
                  Launch Game
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://github.com/jusselman/PigsOnTheWing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-orange-400 transition-all group"
              >
                <Code className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Web Source Code</h3>
                <p className="text-gray-300 text-sm mb-4">Vanilla JS implementation</p>
                <div className="text-orange-400 flex items-center justify-center gap-2">
                  View on GitHub
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://github.com/jusselman/pig"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-cyan-400 transition-all group"
              >
                <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Mobile Source Code</h3>
                <p className="text-gray-300 text-sm mb-4">React Native implementation</p>
                <div className="text-cyan-400 flex items-center justify-center gap-2">
                  View on GitHub
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
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
                <div className="font-semibold">Google CS First</div>
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
                <div className="font-semibold">Mr. Green</div>
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