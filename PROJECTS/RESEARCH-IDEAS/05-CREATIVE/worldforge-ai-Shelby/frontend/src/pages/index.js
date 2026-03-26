import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  CubeIcon, 
  UsersIcon, 
  CurrencyDollarIcon,
  PlayIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <CubeIcon className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                WorldForge AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="hover:text-purple-400 transition">Features</Link>
              <Link href="#pricing" className="hover:text-purple-400 transition">Pricing</Link>
              <Link href="#showcase" className="hover:text-purple-400 transition">Showcase</Link>
              <Link href="/docs" className="hover:text-purple-400 transition">Docs</Link>
              <Link href="/login" className="px-4 py-2 text-purple-400 hover:text-white transition">Login</Link>
              <Link href="/signup" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Create Virtual Worlds with
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Just Words
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The no-code AI platform for building immersive 3D worlds, games, and experiences. 
              Describe it. Generate it. Share it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <SparklesIcon className="h-6 w-6" />
                Start Creating Free
              </Link>
              <Link 
                href="#demo" 
                className="px-8 py-4 border-2 border-purple-400 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition flex items-center justify-center gap-2"
              >
                <PlayIcon className="h-6 w-6" />
                Watch Demo
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '10K+', label: 'Worlds Created' },
              { number: '50K+', label: 'Assets Generated' },
              { number: '100K+', label: 'Players' },
              { number: '$1M+', label: 'Creator Earnings' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Create</h2>
            <p className="text-xl text-gray-400">Powerful AI tools for world building, no experience required</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: SparklesIcon,
                title: 'AI World Generation',
                description: 'Describe your world in natural language and watch it come to life. Our AI handles terrain, lighting, and atmosphere.'
              },
              {
                icon: CubeIcon,
                title: 'Asset Generator',
                description: 'Create characters, buildings, props, and more from text prompts. High-quality 3D models ready to use.'
              },
              {
                icon: UsersIcon,
                title: 'Multiplayer Ready',
                description: 'Built-in multiplayer support with chat, trading, and real-time synchronization. Launch your world with friends.'
              },
              {
                icon: CheckCircleIcon,
                title: 'Game Logic Engine',
                description: 'Define rules, quests, and NPC behaviors with simple prompts. No coding required.'
              },
              {
                icon: CurrencyDollarIcon,
                title: 'Monetize Your Creations',
                description: 'Sell your worlds and assets in our marketplace. Keep 95% of your earnings.'
              },
              {
                icon: PlayIcon,
                title: 'Multi-Platform Export',
                description: 'Export to WebGL, Unity, Godot, and more. Share your creations anywhere.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-purple-500 transition"
              >
                <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Start free, upgrade as you grow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: 'Free',
                price: '$0',
                period: '/month',
                description: 'Perfect for trying out WorldForge',
                features: [
                  '1 World',
                  'Basic AI Generation',
                  'Community Access',
                  'WebGL Export',
                  '5GB Storage'
                ],
                cta: 'Get Started',
                highlighted: false
              },
              {
                tier: 'Creator',
                price: '$14.99',
                period: '/month',
                description: 'For serious world builders',
                features: [
                  'Unlimited Worlds',
                  'Advanced AI Generation',
                  'Priority Export Queue',
                  'All Export Formats',
                  '100GB Storage',
                  'Marketplace Access',
                  'Analytics Dashboard'
                ],
                cta: 'Start Creating',
                highlighted: true
              },
              {
                tier: 'Publisher',
                price: '$49.99',
                period: '/month',
                description: 'For professional creators',
                features: [
                  'Everything in Creator',
                  'Unlimited Storage',
                  'White-Label Export',
                  'Priority Support',
                  'Custom Branding',
                  'API Access',
                  'Revenue Share Program',
                  'Dedicated Account Manager'
                ],
                cta: 'Go Pro',
                highlighted: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border-2 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-b from-purple-900/50 to-pink-900/50 border-purple-500' 
                    : 'bg-gray-800/50 border-gray-700'
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{plan.tier}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block w-full py-3 px-6 rounded-full text-center font-semibold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your World?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of creators building amazing worlds with AI. No credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105"
          >
            Start Creating Now
            <ArrowRightIcon className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <CubeIcon className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold">WorldForge AI</span>
              </div>
              <p className="text-gray-400">
                Create virtual worlds with natural language. No coding required.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/showcase" className="hover:text-white">Showcase</Link></li>
                <li><Link href="/changelog" className="hover:text-white">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/tutorials" className="hover:text-white">Tutorials</Link></li>
                <li><Link href="/api" className="hover:text-white">API Reference</Link></li>
                <li><Link href="/community" className="hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 WorldForge AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
