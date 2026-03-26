import { useState } from 'react';
import { motion } from 'framer-motion';
import { artStyles, categories, getStylesByCategory, getStylesByTag } from '../lib/artStyles';

export default function StyleLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(null);

  const filteredStyles = selectedCategory === 'All'
    ? artStyles
    : getStylesByCategory(selectedCategory);

  const searchedStyles = searchQuery
    ? filteredStyles.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tags.some(t => t.includes(searchQuery.toLowerCase()))
      )
    : filteredStyles;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-psychelic-purple to-psychelic-cyan bg-clip-text text-transparent">
            Style Library
          </h1>
          <p className="text-gray-400 text-lg">
            Explore 50+ curated art styles with optimized prompts
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          className="mb-8 flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search styles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-dark-800 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-psychelic-purple"
          />
          <div className="flex gap-2 flex-wrap">
            {['All', ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-psychelic-purple text-white'
                    : 'bg-dark-800 text-gray-400 hover:text-white border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchedStyles.map((style, index) => (
            <StyleCard
              key={style.id}
              style={style}
              index={index}
              onSelect={() => setSelectedStyle(style)}
            />
          ))}
        </div>

        {/* Style Detail Modal */}
        {selectedStyle && (
          <StyleModal style={selectedStyle} onClose={() => setSelectedStyle(null)} />
        )}
      </div>
    </div>
  );
}

function StyleCard({ style, index, onSelect }) {
  const previewUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(style.promptTemplate.replace('{subject}', 'abstract art'))}?width=400&height=400&seed=${index}`;

  return (
    <motion.div
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onSelect}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={previewUrl}
          alt={style.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-dark-900/80 px-2 py-1 rounded text-xs">
          {style.difficulty}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{style.name}</h3>
          <span className="text-sm text-gray-400">{style.category}</span>
        </div>

        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {style.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {style.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-psychelic-purple/20 text-psychelic-purple px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <span>🔥</span>
            <span>{style.popularity}% popular</span>
          </div>
          <button className="text-psychelic-purple text-sm font-medium hover:underline">
            Use Style →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function StyleModal({ style, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(style.promptTemplate.replace('{subject}', '[your subject]'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        className="bg-dark-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="relative">
          <img
            src={`https://image.pollinations.ai/prompt/${encodeURIComponent(style.promptTemplate.replace('{subject}', 'masterpiece'))}?width=800&height=600&seed=42`}
            alt={style.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-dark-900/80 p-2 rounded-full hover:bg-dark-900 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">{style.name}</h2>
            <span className="bg-psychelic-purple/20 text-psychelic-purple px-3 py-1 rounded-full text-sm">
              {style.category}
            </span>
          </div>

          <p className="text-gray-300 mb-6">{style.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Prompt Template</h3>
            <div className="bg-dark-900 rounded-xl p-4 border border-white/10">
              <code className="text-sm text-gray-300">
                {style.promptTemplate.replace('{subject}', '[your subject]')}
              </code>
            </div>
            <button
              onClick={handleCopyPrompt}
              className="mt-2 text-sm text-psychelic-purple hover:underline"
            >
              {copied ? '✓ Copied!' : '📋 Copy prompt'}
            </button>
          </div>

          {style.negativePrompt && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Negative Prompt</h3>
              <div className="bg-dark-900 rounded-xl p-4 border border-white/10">
                <code className="text-sm text-gray-300">{style.negativePrompt}</code>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {style.tags.map((tag) => (
              <span
                key={tag}
                className="bg-psychelic-purple/20 text-psychelic-purple px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-dark-900 rounded-xl p-4">
              <div className="text-2xl mb-1">
                {style.difficulty === 'beginner' ? '🟢' : style.difficulty === 'intermediate' ? '🟡' : '🔴'}
              </div>
              <div className="text-sm text-gray-400">Difficulty</div>
              <div className="font-semibold capitalize">{style.difficulty}</div>
            </div>
            <div className="bg-dark-900 rounded-xl p-4">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-sm text-gray-400">Popularity</div>
              <div className="font-semibold">{style.popularity}%</div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-psychelic-purple to-psychelic-pink py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            Use This Style
          </button>
        </div>
      </motion.div>
    </div>
  );
}
