import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ArtGenerator from '../components/ArtGenerator';
import StyleLibrary from '../components/StyleLibrary';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Head>
        <title>Generative Art Playground | AI-Powered Creative Studio</title>
        <meta name="description" content="Create stunning AI art with 50+ styles. Generate, remix, mint NFTs, and sell prints." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-dark-900 to-pink-900/20 animate-gradient" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-psychelic-purple/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-psychelic-cyan/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-psychelic-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-psychelic-purple via-psychelic-pink to-psychelic-cyan bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                🎨 ArtPlayground
              </motion.div>
              
              <div className="hidden md:flex space-x-8">
                {['home', 'create', 'styles', 'gallery', 'pricing'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item 
                        ? 'text-psychelic-purple' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button className="bg-gradient-to-r from-psychelic-purple to-psychelic-pink px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative z-10 pt-16">
          {activeSection === 'home' && (
            <HeroSection onGetStarted={() => setActiveSection('create')} />
          )}
          {activeSection === 'create' && <ArtGenerator />}
          {activeSection === 'styles' && <StyleLibrary />}
          {activeSection === 'gallery' && <Gallery />}
          {activeSection === 'pricing' && <Pricing />}
        </main>

        {/* Footer */}
        <footer className="relative z-10 bg-dark-800 border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">🎨 ArtPlayground</h3>
                <p className="text-gray-400">
                  Create stunning AI art with 50+ styles. Mint NFTs. Sell prints.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Create</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><button onClick={() => setActiveSection('create')} className="hover:text-white">Art Generator</button></li>
                  <li><button onClick={() => setActiveSection('styles')} className="hover:text-white">Style Library</button></li>
                  <li><a href="#" className="hover:text-white">Interactive Canvas</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Community</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><button onClick={() => setActiveSection('gallery')} className="hover:text-white">Gallery</button></li>
                  <li><a href="#" className="hover:text-white">NFT Marketplace</a></li>
                  <li><a href="#" className="hover:text-white">Print Shop</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Commercial License</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>© 2024 ArtPlayground. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function HeroSection({ onGetStarted }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-psychelic-purple via-psychelic-pink to-psychelic-cyan bg-clip-text text-transparent">
            Create Mind-Blowing AI Art
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          50+ art styles • NFT minting • Print-on-demand • Free to start
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-psychelic-purple to-psychelic-pink px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30"
          >
            Start Creating Free
          </button>
          <button className="border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            View Gallery
          </button>
        </motion.div>

        {/* Live Demo Preview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            'https://image.pollinations.ai/prompt/psychedelic%20abstract%20art?width=300&height=300&seed=1',
            'https://image.pollinations.ai/prompt/cyberpunk%20city?width=300&height=300&seed=2',
            'https://image.pollinations.ai/prompt/surreal%20landscape?width=300&height=300&seed=3',
            'https://image.pollinations.ai/prompt/anime%20character?width=300&height=300&seed=4'
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Demo ${i + 1}`}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FeatureCard
            icon="🎨"
            title="50+ Art Styles"
            description="From abstract expressionism to cyberpunk, anime to watercolor"
          />
          <FeatureCard
            icon="🖼️"
            title="NFT Ready"
            description="Mint your creations directly to OpenSea and Foundation"
          />
          <FeatureCard
            icon="🛍️"
            title="Print & Sell"
            description="Turn art into prints, phone cases, and canvases"
          />
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
      whileHover={{ y: -5 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
