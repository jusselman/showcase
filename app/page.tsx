'use client'

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Section = 'home' | 'work' | 'about' | 'contact';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const getTransform = () => {
    switch (currentSection) {
      case 'home': return { x: 0, y: 0 };
      case 'work': return { x: 0, y: '-100vh' };
      case 'about': return { x: '100vw', y: 0 };
      case 'contact': return { x: '-100vw', y: 0 };
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentSection('home')}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-9 h-9"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Code & Teach logo"
            >
              <circle cx="100" cy="100" r="95" fill="#22d3ee" opacity="0.3"/>
              <path
                d="M 60 50 L 60 110 Q 60 130 75 130 Q 90 130 90 110"
                stroke="#06b6d4"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 110 50 L 110 100 Q 110 120 125 120 Q 140 120 140 100 L 140 50"
                stroke="#06b6d4"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="35" r="5.5" fill="#06b6d4"/>
              <circle cx="140" cy="35" r="5.5" fill="#06b6d4"/>
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-8 text-gray-300"
          >
            <button 
              onClick={() => setCurrentSection('work')} 
              className={`hover:text-cyan-400 transition-colors ${currentSection === 'work' ? 'text-cyan-400' : ''}`}
              aria-label="View my work portfolio"
            >
              Work
            </button>
            <button 
              onClick={() => setCurrentSection('about')} 
              className={`hover:text-cyan-400 transition-colors ${currentSection === 'about' ? 'text-cyan-400' : ''}`}
              aria-label="Learn about my background"
            >
              About
            </button>
            <button 
              onClick={() => setCurrentSection('contact')} 
              className={`hover:text-cyan-400 transition-colors ${currentSection === 'contact' ? 'text-cyan-400' : ''}`}
              aria-label="Contact me"
            >
              Contact
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Multi-directional Container */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div 
          className="relative w-[300vw] h-[200vh]"
          style={{ left: '-100vw', top: 0 }}
          animate={getTransform()}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          {/* About Section - LEFT */}
          <section className="absolute top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-y-auto">
            <div className="max-w-6xl mx-auto pt-42">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: currentSection === 'about' ? 1 : 0, x: currentSection === 'about' ? 0 : -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl font-bold text-white mb-8 text-center"
              >
                The Journey
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: currentSection === 'about' ? 1 : 0, x: currentSection === 'about' ? 0 : -30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
              >
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: currentSection === 'about' ? 1 : 0, scale: currentSection === 'about' ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-64 h-64 mx-auto mb-12 relative rounded-full overflow-hidden border-4 border-cyan-400/30"
              >
                <img
                  src="/profile.jpeg"
                  alt="Joshua Usselman"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: currentSection === 'about' ? 1 : 0, x: currentSection === 'about' ? 0 : -30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { year: '2018-2021', title: 'Freeland Web Developer', desc: 'Web Development' },
                  { year: '2021-2023', title: 'Google', desc: 'Google Grasshopper and Google CS First' },
                  { year: '2023 →', title: 'Mr Green', desc: 'Modern web experiences', highlight: true }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl ${item.highlight ? 'bg-cyan-400/10 border-2 border-cyan-400/30' : 'bg-white/5'} backdrop-blur-sm`}
                  >
                    <div className="text-cyan-400 font-bold mb-2">{item.year}</div>
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: currentSection === 'about' ? 1 : 0, x: currentSection === 'about' ? 0 : -30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">What I Bring</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { title: 'Clear Communication'},
                    { title: 'User-Centered Design',},
                    { title: 'Production Experience',  },
                    { title: 'Always Learning' }
                  ].map((strength, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                      {/* <div className="text-4xl mb-2">{strength.icon}</div> */}
                      <h4 className="text-white font-semibold text-sm">{strength.title}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Hero Section - CENTER */}
          <section className="absolute top-0 left-[100vw] w-[100vw] h-[100vh] flex items-center justify-center px-6 pt-20 relative bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Image
                src="/golden-gate-bridge.svg"
                alt="Golden Gate Bridge background"
                fill
                className="object-cover"
                style={{ filter: 'hue-rotate(195deg) brightness(1.5) saturate(1.2)' }} 
                priority
              />
            </motion.div>
            <div className="max-w-6xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                  From Classrooms
                  <span className="block text-cyan-400">
                    to Code
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                I'm a web developer and educator who's taught globally, coded at Google Grasshopper, and built vibrant React & Next.js apps that spark curiosity. Let's create interfaces that teach and inspire.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-6 justify-center"
              >
                <button
                  onClick={() => setCurrentSection('work')}
                  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2 group"
                  aria-label="View my portfolio projects"
                >
                  Explore My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentSection('contact')}
                  className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all"
                  aria-label="Contact me to discuss opportunities"
                >
                  Let's Build Together
                </button>
              </motion.div>

              <div className="text-gray-400 text-sm mt-4">
                Built with Next.js, TypeScript, Tailwind CSS, Framer Motion
              </div>
            </div>
          </section>

          {/* Contact Section - RIGHT */}
          <section className="absolute top-0 left-[200vw] w-[100vw] h-[100vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: currentSection === 'contact' ? 1 : 0, x: currentSection === 'contact' ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl font-bold text-white mb-8"
              >
                Let's Build Something Amazing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: currentSection === 'contact' ? 1 : 0, x: currentSection === 'contact' ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 mb-12"
              >
                Ready to create engaging web experiences together? Get in touch.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: currentSection === 'contact' ? 1 : 0, x: currentSection === 'contact' ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-400"
              >
                Contact form coming soon...
              </motion.div>
            </div>
          </section>

          {/* Work Section - BELOW HOME */}
          <section className="absolute top-[100vh] left-[100vw] w-[100vw] h-[100vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-y-auto">
            <div className="max-w-6xl mx-auto pt-36">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: currentSection === 'work' ? 1 : 0, y: currentSection === 'work' ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl font-bold text-white mb-16 text-center"
              >
                Featured Work
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Mr. Green',
                    description: 'A High-Minded Fashion E-Commerce Platform',
                    color: 'from-green-200 to-emerald-500',
                    image: '/mrgreen.png'
                  },
                  {
                    title: 'Google Grasshopper',
                    description: 'Interactive ESL coding platform empowering students to learn programming through storytelling and improvisation',
                    color: 'from-emerald-500 to-cyan-500',
                    image: '/grasshopper.png'
                  },
                  {
                    title: 'Google CS First',
                    description: 'Interactive ESL coding platform empowering students to learn programming through storytelling and improvisation',
                    color: 'from-blue-500 to-red-200',
                    image: '/googlecsfirst.png'
                  },
                  {
                    title: 'Pork Hoppin\'',
                    description: 'Mobile game prototype with 1K+ test plays, built for fun',
                    color: 'from-orange-500 to-red-500',
                    image: '/porkhoppin.png'
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: currentSection === 'work' ? 1 : 0, 
                      y: currentSection === 'work' ? 0 : 30 
                    }}
                    transition={{ delay: currentSection === 'work' ? 0.3 + index * 0.1 : 0 }}
                    className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    <div className="relative h-full p-8 flex flex-col justify-end">
                      <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-white/90 text-lg">{project.description}</p>
                      <div className="mt-6 text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Case Study
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      {/* Directional Navigation Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative w-18 h-18">
          {/* Center home button */}
          <button
            onClick={() => setCurrentSection('home')}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all ${
              currentSection === 'home' ? 'bg-cyan-400 w-6 h-6' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label="Home"
          />
          {/* Work (down) */}
          <button
            onClick={() => setCurrentSection('work')}
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full transition-all ${
              currentSection === 'work' ? 'bg-cyan-400 w-5 h-5' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label="Work"
          />
          {/* About (left) */}
          <button
            onClick={() => setCurrentSection('about')}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full transition-all ${
              currentSection === 'about' ? 'bg-cyan-400 w-5 h-5' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label="About"
          />
          {/* Contact (right) */}
          <button
            onClick={() => setCurrentSection('contact')}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 rounded-full transition-all ${
              currentSection === 'contact' ? 'bg-cyan-400 w-5 h-5' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label="Contact"
          />
        </div>
      </div>
    </>
  );
}