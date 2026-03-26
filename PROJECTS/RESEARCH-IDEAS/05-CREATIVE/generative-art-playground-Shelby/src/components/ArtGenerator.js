import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ArtEngine from '../lib/artEngine';
import { artStyles } from '../lib/artStyles';

export default function ArtGenerator() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [variations, setVariations] = useState([]);
  const canvasRef = useRef(null);

  const engine = new ArtEngine({ provider: 'pollinations' });

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    try {
      const results = await engine.generateBatch(prompt, {
        style: selectedStyle,
        width: 1024,
        height: 1024
      }, 4);

      setGeneratedImages(results);
      setVariations([]);
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCreateVariation = async (image, index) => {
    try {
      const result = await engine.generateVariation(
        image.metadata.originalPrompt,
        { style: selectedStyle }
      );
      
      setVariations(prev => [...prev, { ...result, parentId: index }]);
    } catch (error) {
      console.error('Variation failed:', error);
    }
  };

  const handleDownload = async (imageUrl, filename) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-psychelic-purple to-psychelic-pink bg-clip-text text-transparent">
            Create Your Art
          </h1>
          <p className="text-gray-400 text-lg">
            Describe your vision, choose a style, and let AI bring it to life
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Prompt Input */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Describe your artwork
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A serene mountain landscape at sunset with aurora borealis..."
                className="w-full h-32 bg-dark-900 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-psychelic-purple resize-none"
              />
            </div>

            {/* Style Selector */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Art Style
              </label>
              <select
                value={selectedStyle?.id || ''}
                onChange={(e) => {
                  const style = artStyles.find(s => s.id === e.target.value);
                  setSelectedStyle(style);
                }}
                className="w-full h-32 bg-dark-900 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-psychelic-purple"
              >
                <option value="">No specific style</option>
                {artStyles.map((style) => (
                  <option key={style.id} value={style.id}>
                    {style.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Generate Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="bg-gradient-to-r from-psychelic-purple to-psychelic-pink px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30"
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating Magic...
                </span>
              ) : (
                '✨ Generate Art'
              )}
            </button>
          </div>
        </motion.div>

        {/* Generated Images Grid */}
        {generatedImages.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {generatedImages.map((image, index) => (
              <ImageCard
                key={index}
                image={image}
                index={index}
                onVariation={() => handleCreateVariation(image, index)}
                onDownload={() => handleDownload(image.imageUrl, `art-${index}.png`)}
              />
            ))}
          </motion.div>
        )}

        {/* Variations */}
        {variations.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold mb-6">Variations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {variations.map((variation, index) => (
                <ImageCard
                  key={index}
                  image={variation}
                  index={index}
                  onDownload={() => handleDownload(variation.imageUrl, `variation-${index}.png`)}
                  isVariation
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Interactive Canvas */}
        <InteractiveCanvas canvasRef={canvasRef} />

        {/* Empty State */}
        {generatedImages.length === 0 && !isGenerating && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-2">Ready to Create</h3>
            <p className="text-gray-400">
              Enter a prompt above and watch AI generate stunning artwork
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ImageCard({ image, index, onVariation, onDownload, isVariation = false }) {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-square overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-psychelic-purple" />
          </div>
        )}
        <img
          src={image.imageUrl}
          alt={`Generated art ${index + 1}`}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setLoading(false)}
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button
            onClick={onVariation}
            className="bg-psychelic-purple px-4 py-2 rounded-full font-semibold hover:bg-psychelic-purple/80 transition-colors"
          >
            🔀 Variation
          </button>
          <button
            onClick={onDownload}
            className="bg-psychelic-pink px-4 py-2 rounded-full font-semibold hover:bg-psychelic-pink/80 transition-colors"
          >
            ⬇️ Download
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-400 line-clamp-2">
          {image.metadata?.originalPrompt || 'AI Generated Art'}
        </p>
        {image.metadata?.style && (
          <p className="text-xs text-psychelic-purple mt-2">
            {image.metadata.style.name}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function InteractiveCanvas({ canvasRef }) {
  return (
    <motion.div
      className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Interactive Canvas</h2>
        <div className="flex gap-4">
          <button className="bg-dark-900 px-4 py-2 rounded-lg border border-white/20 hover:border-psychelic-purple transition-colors">
            🖌️ Brush
          </button>
          <button className="bg-dark-900 px-4 py-2 rounded-lg border border-white/20 hover:border-psychelic-purple transition-colors">
            🎨 Fill
          </button>
          <button className="bg-dark-900 px-4 py-2 rounded-lg border border-white/20 hover:border-psychelic-purple transition-colors">
            ✏️ Text
          </button>
          <button className="bg-dark-900 px-4 py-2 rounded-lg border border-white/20 hover:border-psychelic-purple transition-colors">
            🖼️ Upload
          </button>
        </div>
      </div>

      <div
        ref={canvasRef}
        className="w-full h-96 bg-dark-900 rounded-xl border border-white/20 flex items-center justify-center"
      >
        <p className="text-gray-500">Canvas loading...</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-4">
          <input
            type="color"
            className="w-12 h-12 rounded-lg cursor-pointer"
            defaultValue="#8B5CF6"
          />
          <input
            type="range"
            min="1"
            max="100"
            defaultValue="50"
            className="w-32"
          />
        </div>
        <div className="flex gap-4">
          <button className="text-gray-400 hover:text-white">↩️ Undo</button>
          <button className="text-gray-400 hover:text-white">↪️ Redo</button>
          <button className="text-gray-400 hover:text-white">🗑️ Clear</button>
          <button className="bg-psychelic-purple px-6 py-2 rounded-lg font-semibold hover:bg-psychelic-purple/80 transition-colors">
            Save
          </button>
        </div>
      </div>
    </motion.div>
  );
}
