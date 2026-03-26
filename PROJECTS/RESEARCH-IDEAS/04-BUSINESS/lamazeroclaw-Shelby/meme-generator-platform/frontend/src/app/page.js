'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [trendingMemes, setTrendingMemes] = useState([]);
  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {
    // Fetch trending memes and active challenges
    fetchTrendingMemes();
    fetchActiveChallenge();
  }, []);

  const fetchTrendingMemes = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/memes/feed?trending=true&limit=6`);
      const data = await res.json();
      if (data.success) {
        setTrendingMemes(data.data);
      }
    } catch (err) {
      console.error('Error fetching trending memes:', err);
    }
  };

  const fetchActiveChallenge = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}/challenges/active`);
      const data = await res.json();
      if (data.success && data.data.length > 0) {
        setActiveChallenge(data.data[0]);
      }
    } catch (err) {
      console.error('Error fetching challenge:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Create Viral Memes
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                In Seconds
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              AI-powered meme generator with 500+ templates, auto-captions, trend tracking, 
              and viral predictions. Join 100K+ creators making memes that matter.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/create"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                🚀 Start Creating Free
              </Link>
              <Link
                href="/trending"
                className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all"
              >
                🔥 Browse Trending
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating emojis */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce-slow">😂</div>
        <div className="absolute top-40 right-20 text-6xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🔥</div>
        <div className="absolute bottom-40 left-1/4 text-6xl animate-bounce-slow" style={{ animationDelay: '1s' }}>💀</div>
        <div className="absolute bottom-20 right-1/3 text-6xl animate-bounce-slow" style={{ animationDelay: '1.5s' }}>😭</div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: '500+ Templates',
                desc: 'Massive library of categorized meme templates, updated daily with trending formats'
              },
              {
                icon: '🤖',
                title: 'AI Captions',
                desc: 'Smart caption generator creates witty, context-aware text in seconds'
              },
              {
                icon: '📈',
                title: 'Viral Predictor',
                desc: 'AI scores your meme\'s viral potential before you post'
              },
              {
                icon: '🔥',
                title: 'Trend Tracker',
                desc: 'Real-time trending topics from Reddit, Twitter, and TikTok'
              },
              {
                icon: '⏰',
                title: 'Auto-Scheduler',
                desc: 'Schedule posts to Instagram, Twitter, Reddit, and TikTok'
              },
              {
                icon: '🏆',
                title: 'Daily Challenges',
                desc: 'Compete in meme challenges, win prizes, join the community'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Challenge */}
      {activeChallenge && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur rounded-3xl p-8 border border-yellow-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                    🏆 Active Challenge
                  </span>
                  <h2 className="text-4xl font-bold text-white mt-2 mb-4">
                    {activeChallenge.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{activeChallenge.description}</p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{activeChallenge.participants}</div>
                      <div className="text-sm text-gray-400">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{activeChallenge.totalVotes}</div>
                      <div className="text-sm text-gray-400">Votes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {new Date(activeChallenge.endDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-400">Ends</div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/challenges/${activeChallenge._id}`}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full text-lg hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105"
                >
                  Join Challenge →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trending Memes */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🔥 Trending Now
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingMemes.length > 0 ? (
              trendingMemes.map((meme) => (
                <Link
                  key={meme._id}
                  href={`/meme/${meme._id}`}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-white/10 hover:bg-white/20 transition-all"
                >
                  <img
                    src={meme.imageUrl}
                    alt={meme.captions?.[0]?.text || 'Meme'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white text-sm font-bold truncate">
                      {meme.captions?.[0]?.text || 'Untitled'}
                    </div>
                    <div className="text-gray-300 text-xs">
                      ❤️ {meme.stats?.likes || 0}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              // Placeholder memes
              Array(6).fill(0).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-xl bg-white/10 animate-pulse"
                />
              ))
            )}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/trending"
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur text-white font-bold rounded-full hover:bg-white/20 transition-all"
            >
              View All Trending →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Start free, upgrade when you're ready
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                features: ['Basic templates', 'Watermarked exports', 'Standard filters', 'Community access'],
                cta: 'Get Started',
                popular: false
              },
              {
                name: 'Pro',
                price: '$9.99/mo',
                features: ['All templates', 'No watermark', 'HD downloads', 'AI captions', 'Viral predictor', 'Priority support'],
                cta: 'Start Pro Trial',
                popular: true
              },
              {
                name: 'API',
                price: '$99/mo',
                features: ['All Pro features', 'API access', '10K calls/month', 'Custom integrations', 'Dedicated support'],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-purple-600 to-blue-600 scale-105' 
                    : 'bg-white/10 backdrop-blur'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black font-bold rounded-full text-sm">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-all ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">🎭 MemeGenerator</h3>
              <p className="text-gray-400">
                The AI-powered platform for creating viral memes.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/create" className="hover:text-white">Create</Link></li>
                <li><Link href="/templates" className="hover:text-white">Templates</Link></li>
                <li><Link href="/trending" className="hover:text-white">Trending</Link></li>
                <li><Link href="/challenges" className="hover:text-white">Challenges</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/brands" className="hover:text-white">For Brands</Link></li>
                <li><Link href="/api" className="hover:text-white">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/dmca" className="hover:text-white">DMCA</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            © 2024 MemeGenerator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
