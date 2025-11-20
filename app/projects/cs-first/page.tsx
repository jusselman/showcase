'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Bug, MessageSquare, Users, Target } from 'lucide-react';
import { useState } from 'react';

type Section = 'home' | 'work' | 'about' | 'contact';

export default function CSFirstCaseStudy() {
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
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
              Quality Assurance & Support • 2021-2023
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Google <span className="text-blue-400">CS First</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Bridging the gap between users and engineers as QA lead, ensuring thousands of teachers and students had seamless coding education experiences
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
              src="/googlecsfirst.png"
              alt="Google CS First platform"
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
              { icon: Users, label: 'Users Supported', value: 'Thousands' },
              { icon: Bug, label: 'My Role', value: 'QA Lead (20%)' },
              { icon: MessageSquare, label: 'Function', value: 'Triage & Support' },
              { icon: Target, label: 'Impact', value: 'Improved UX' }
            ].map((metric, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
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
              Google CS First is a free computer science curriculum used by teachers worldwide to introduce students to coding through Scratch-based projects. With thousands of educators and students using the platform daily, issues ranged from genuine bugs to user confusion to curriculum questions.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The challenge? Serve as the critical bridge between frustrated users and the engineering team—quickly diagnosing issues, determining root causes, and ensuring the right information reached the right people to solve problems efficiently.
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
            <h2 className="text-4xl font-bold text-white mb-8">My Role & Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'User Report Triage',
                  description: 'Analyzed incoming reports from teachers and students, categorizing issues by severity and type—distinguishing between critical bugs, user errors, and feature requests.',
                  icon: '🔍'
                },
                {
                  title: 'Bug Reproduction & Documentation',
                  description: 'Systematically reproduced reported issues, documented steps to replicate, captured screenshots/videos, and identified patterns across multiple reports.',
                  icon: '🐛'
                },
                {
                  title: 'Cross-Team Communication',
                  description: 'Translated technical issues into actionable tickets for engineers while explaining curriculum gaps to content developers—serving as the central communication hub.',
                  icon: '💬'
                },
                {
                  title: 'User Support & Education',
                  description: 'Responded directly to users when issues were due to misunderstanding features, providing clear guidance and creating documentation to prevent recurring confusion.',
                  icon: '📚'
                }
              ].map((contribution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all"
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
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">1. Rapid Assessment</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When a report came in, I'd quickly assess: Is this blocking users? Is it widespread? Can I reproduce it? This triage determined urgency and who needed to be involved—engineers, curriculum team, or just user education.
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">2. Systematic Reproduction</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  For genuine bugs, I'd methodically reproduce them across different browsers, devices, and user scenarios. Clear reproduction steps were critical—engineers can't fix what they can't see. I documented everything: browser versions, account types, exact click sequences.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">3. Pattern Recognition</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Often, multiple reports pointed to the same underlying issue. I tracked patterns, aggregated similar complaints, and prioritized based on frequency and impact—helping the team focus on issues affecting the most users.
                </p>
              </div>

              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">4. Clear Communication</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Created detailed bug reports with severity levels, user impact assessments, and suggested priorities. For user errors, I crafted clear responses and created help documentation to prevent the same questions from recurring.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Skills & Tools</h2>
            <div className="flex flex-wrap gap-4">
              {[
                'Quality Assurance',
                'Bug Triage',
                'Technical Documentation',
                'Cross-Team Communication',
                'User Support',
                'Problem Diagnosis',
                'Issue Tracking',
                'Process Optimization'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Real-World Impact</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Prevented Escalations</h3>
                <p className="text-gray-300">
                  By quickly identifying user errors vs. actual bugs, I prevented unnecessary engineering time being spent on non-issues, while ensuring genuine problems got immediate attention.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Improved Documentation</h3>
                <p className="text-gray-300">
                  Recurring questions revealed gaps in onboarding and help docs. I worked with the curriculum team to create clearer guides, reducing support volume over time.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Faster Bug Resolution</h3>
                <p className="text-gray-300">
                  High-quality bug reports with clear reproduction steps meant engineers could identify and fix issues faster, directly improving the experience for thousands of classrooms.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mt-8">
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "CS First taught me that great QA isn't just about finding bugs—it's about understanding the entire user journey, communicating clearly across teams, and always asking 'How can we prevent this from happening again?' This role sharpened my debugging skills and taught me to think like both a user and an engineer."
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
                  title: 'The Art of Debugging',
                  description: 'Systematic problem-solving is a skill. Breaking down complex issues into reproducible steps, isolating variables, and documenting clearly are essential for any technical role.'
                },
                {
                  title: 'Empathy Under Pressure',
                  description: 'Teachers often reported issues when they were frustrated and under deadline. Staying calm, asking clarifying questions, and making users feel heard was as important as solving the technical problem.'
                },
                {
                  title: 'Bridge Builder',
                  description: 'Being the connector between users, engineers, and content teams taught me how to translate between different perspectives and priorities—a critical skill in any collaborative environment.'
                },
                {
                  title: 'Data-Driven Prioritization',
                  description: 'Not all bugs are created equal. Learning to prioritize based on impact, frequency, and urgency helped the team focus resources where they mattered most.'
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

      {/* Why This Matters for Employers */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Why This Experience Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Strong Debugging Skills',
                  description: 'Can quickly diagnose issues in complex systems and provide clear reproduction steps'
                },
                {
                  title: 'Cross-Functional Collaboration',
                  description: 'Experienced working between engineering, product, and content teams'
                },
                {
                  title: 'User-Centric Mindset',
                  description: 'Always thinking about impact on real users, not just technical solutions'
                },
                {
                  title: 'Clear Communication',
                  description: 'Can explain technical issues to non-technical stakeholders and vice versa'
                },
                {
                  title: 'Process Improvement',
                  description: 'Identifies patterns and suggests system-level improvements, not just fixes'
                },
                {
                  title: 'Production Experience',
                  description: 'Worked on live platform affecting thousands of daily users'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30"
                >
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
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
                <div className="font-semibold">Google Grasshopper</div>
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
                <div className="font-semibold">Pork Hoppin'</div>
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