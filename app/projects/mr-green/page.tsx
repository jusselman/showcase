'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShoppingCart, Zap, TrendingUp, Palette } from 'lucide-react';
import { useState } from 'react';

type Section = 'home' | 'work' | 'about' | 'contact';

export default function MrGreenCaseStudy() {
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
            <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6">
              E-Commerce Development • 2023
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Mr. <span className="text-green-400">Green</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Transforming a fashion brand's digital presence through strategic platform migration and modern e-commerce development
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
              src="/mrgreen.png"
              alt="Mr. Green e-commerce platform"
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
              { icon: ShoppingCart, label: 'Platform', value: 'Shopify' },
              { icon: Zap, label: 'My Role', value: 'Web Developer' },
              { icon: TrendingUp, label: 'Outcome', value: 'Successful Migration' },
              { icon: Palette, label: 'Industry', value: 'Fashion & Lifestyle' }
            ].map((metric, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <metric.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
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
              Mr. Green, a Los Angeles-based fashion and lifestyle brand, was operating on Squarespace—a platform that had become limiting as the business grew. The brand needed a more robust e-commerce solution that could scale, integrate with modern tools, and provide a seamless shopping experience.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The challenge? Migrate an entire production e-commerce site to Shopify without disrupting sales, preserve SEO rankings, and modernize the user experience—all while maintaining the brand's distinctive high-minded aesthetic.
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
                  title: 'Platform Migration',
                  description: 'Led the complete migration from Squarespace to Shopify, transferring products, collections, customer data, and preserving URL structures for SEO continuity.',
                  icon: '🔄'
                },
                {
                  title: 'Theme Development',
                  description: 'Customized Shopify theme using Liquid, JavaScript, and CSS to match brand guidelines while implementing responsive design best practices.',
                  icon: '🎨'
                },
                {
                  title: 'Site Maintenance',
                  description: 'Provided ongoing maintenance, troubleshooting, and feature updates to ensure optimal site performance and user experience.',
                  icon: '🔧'
                },
                {
                  title: 'E-Commerce Optimization',
                  description: 'Implemented conversion-focused features including optimized checkout flows, product recommendations, and mobile-first design.',
                  icon: '📈'
                }
              ].map((contribution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all"
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
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">1. Strategic Planning</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Before touching code, I audited the existing site thoroughly—cataloging all products, collections, custom pages, and integrations. Created a detailed migration roadmap to ensure zero downtime and data integrity throughout the process.
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">2. Clean Migration</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Transferred 100+ products with variants, images, and metadata. Implemented 301 redirects for all old URLs to preserve SEO equity. Set up Shopify's collection structure to match the brand's merchandising strategy while improving discoverability.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">3. Custom Development</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Customized the Shopify theme extensively using Liquid templating, custom CSS, and JavaScript. Built custom product pages with enhanced imagery, size guides, and styling recommendations that reflected the brand's high-end positioning.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-2xl font-bold text-white mb-4">4. Ongoing Support</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Post-launch, provided continuous maintenance—adding new products, updating collections for seasonal drops, troubleshooting issues, and implementing improvements based on user analytics and stakeholder feedback.
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
                'Shopify',
                'Liquid',
                'JavaScript',
                'HTML/CSS',
                'Responsive Design',
                'SEO Optimization',
                'E-Commerce Analytics',
                'Git Version Control'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 font-semibold"
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
                { value: 'Zero', label: 'Downtime During Migration' },
                { value: '100%', label: 'SEO Rankings Preserved' },
                { value: 'Improved', label: 'Mobile Experience' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center"
                >
                  <div className="text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "The Mr. Green project taught me the critical importance of planning in migrations—one wrong move can cost a business thousands in lost sales. It reinforced that production web development isn't just about writing code; it's about understanding business needs, minimizing risk, and delivering solutions that actually work in the real world."
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
                  title: 'Production-Ready Mindset',
                  description: 'Working on a live e-commerce site handling real transactions taught me to think about edge cases, test thoroughly, and always have rollback plans.'
                },
                {
                  title: 'Platform Expertise',
                  description: 'Gained deep knowledge of Shopify\'s ecosystem—from Liquid templating to app integrations—making me versatile in modern e-commerce development.'
                },
                {
                  title: 'Stakeholder Communication',
                  description: 'Learned to translate technical decisions into business language, setting clear expectations and keeping non-technical stakeholders informed throughout the process.'
                },
                {
                  title: 'SEO & Performance',
                  description: 'Migrations are make-or-break for SEO. Proper redirects, URL structure, and page speed optimization are non-negotiable for e-commerce success.'
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

      {/* Technical Highlights */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Technical Highlights</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-green-400 mb-3">Custom Liquid Components</h3>
                <p className="text-gray-300 mb-3">
                  Developed reusable Liquid snippets for product cards, collection grids, and promotional banners—reducing code duplication and making future updates easier for the team.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-green-400 mb-3">Responsive Mobile-First Design</h3>
                <p className="text-gray-300 mb-3">
                  Implemented mobile-first responsive design principles ensuring the site looked great and performed smoothly on all devices—critical for fashion e-commerce where mobile traffic dominates.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-green-400 mb-3">Performance Optimization</h3>
                <p className="text-gray-300 mb-3">
                  Optimized images with lazy loading, minimized CSS/JS bundles, and leveraged Shopify's CDN for fast global delivery—directly impacting conversion rates.
                </p>
              </div>
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
                <div className="font-semibold">Pork Hoppin'</div>
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
                <div className="font-semibold">Google Grasshopper</div>
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