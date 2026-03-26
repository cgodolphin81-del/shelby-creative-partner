import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SparklesIcon, 
  CubeIcon, 
  DocumentTextIcon, 
  Cog6ToothIcon,
  PlayIcon,
  ShareIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
});

export default function WorldBuilder() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [worldData, setWorldData] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [settings, setSettings] = useState({
    genre: 'fantasy',
    style: 'realistic',
    dimensions: '3d'
  });

  const handleGenerateWorld = async () => {
    if (!prompt.trim()) {
      toast.error('Please describe your world');
      return;
    }

    setIsGenerating(true);
    try {
      const response = await api.post('/worlds/generate', {
        prompt,
        ...settings
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data.success) {
        setWorldData(response.data.world);
        setStep(2);
        toast.success('World generated successfully!');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to generate world');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddAsset = async (assetPrompt, type) => {
    try {
      const response = await api.post(
        `/worlds/${worldData.id}/assets/generate`,
        {
          prompt: assetPrompt,
          type,
          style: settings.style,
          dimensions: settings.dimensions
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.data.success) {
        toast.success('Asset generated!');
        // Update world data with new asset
      }
    } catch (error) {
      toast.error('Failed to generate asset');
    }
  };

  const handleGenerateLogic = async (logicDescription) => {
    try {
      const response = await api.post(
        `/worlds/${worldData.id}/logic/generate`,
        {
          description: logicDescription
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.data.success) {
        toast.success('Game logic generated!');
        setWorldData(prev => ({
          ...prev,
          logic: response.data.logic
        }));
      }
    } catch (error) {
      toast.error('Failed to generate logic');
    }
  };

  const handleExport = async (format) => {
    try {
      const response = await api.post(
        `/exports/${worldData.id}/${format}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.data.success) {
        toast.success(`Export to ${format} started!`);
        // Handle download
      }
    } catch (error) {
      toast.error(`Failed to export to ${format}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <CubeIcon className="h-8 w-8 text-purple-400" />
            <h1 className="text-2xl font-bold">WorldForge Builder</h1>
          </div>
          <div className="flex items-center gap-4">
            {worldData && (
              <>
                <button
                  onClick={() => handleExport('webgl')}
                  className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
                >
                  <ShareIcon className="h-5 w-5" />
                  Export
                </button>
                <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                  <PlayIcon className="h-5 w-5" />
                  Play Test
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-center gap-4">
          {[
            { num: 1, label: 'Describe', icon: DocumentTextIcon },
            { num: 2, label: 'Generate', icon: SparklesIcon },
            { num: 3, label: 'Customize', icon: Cog6ToothIcon },
            { num: 4, label: 'Export', icon: ShareIcon }
          ].map((s, index) => (
            <div key={s.num} className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step >= s.num ? 'bg-purple-600' : 'bg-gray-700'
                }`}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <span className="ml-2 text-sm">{s.label}</span>
              {index < 3 && (
                <div className={`w-16 h-1 mx-2 ${step > s.num ? 'bg-purple-600' : 'bg-gray-700'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {/* Step 1: World Description */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold mb-4">Describe Your World</h2>
                <p className="text-gray-400 mb-6">
                  Tell us about the world you want to create. Be as detailed or as brief as you like.
                </p>

                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A mystical forest world with floating islands, ancient ruins, and magical creatures. The sky is purple with two moons..."
                  className="w-full h-48 bg-gray-900 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none mb-6"
                />

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Genre</label>
                    <select
                      value={settings.genre}
                      onChange={(e) => setSettings({ ...settings, genre: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
                    >
                      <option value="fantasy">Fantasy</option>
                      <option value="scifi">Sci-Fi</option>
                      <option value="horror">Horror</option>
                      <option value="adventure">Adventure</option>
                      <option value="rpg">RPG</option>
                      <option value="simulation">Simulation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Art Style</label>
                    <select
                      value={settings.style}
                      onChange={(e) => setSettings({ ...settings, style: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
                    >
                      <option value="realistic">Realistic</option>
                      <option value="cartoon">Cartoon</option>
                      <option value="pixel">Pixel Art</option>
                      <option value="lowpoly">Low Poly</option>
                      <option value="anime">Anime</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Dimensions</label>
                    <select
                      value={settings.dimensions}
                      onChange={(e) => setSettings({ ...settings, dimensions: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
                    >
                      <option value="3d">3D</option>
                      <option value="2d">2D</option>
                      <option value="2.5d">2.5D</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleGenerateWorld}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <ArrowPathIcon className="h-6 w-6 animate-spin" />
                      Generating World...
                    </>
                  ) : (
                    <>
                      <SparklesIcon className="h-6 w-6" />
                      Generate World
                    </>
                  )}
                </button>

                {/* Example Prompts */}
                <div className="mt-8">
                  <h3 className="text-sm text-gray-400 mb-3">Example Prompts:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "A cyberpunk city with neon lights, flying cars, and towering skyscrapers",
                      "A peaceful farming village surrounded by mountains and forests",
                      "An underwater kingdom with coral castles and sea creatures",
                      "A post-apocalyptic wasteland with ruined buildings and desert landscapes"
                    ].map((example, i) => (
                      <button
                        key={i}
                        onClick={() => setPrompt(example)}
                        className="text-left p-3 bg-gray-900 rounded-lg text-sm hover:bg-gray-700 transition text-gray-300"
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Generation Preview */}
          {step === 2 && worldData && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* 3D Preview */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">World Preview</h3>
                <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">3D Preview would render here</p>
                  {/* Three.js canvas would go here */}
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">{worldData.name}</h4>
                  <p className="text-gray-400 text-sm">{worldData.description}</p>
                </div>
              </div>

              {/* Asset Generator */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">Add Assets</h3>
                <AssetGenerator onGenerate={handleAddAsset} />
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Generated Assets</h4>
                  <div className="space-y-2">
                    {/* Asset list would go here */}
                    <p className="text-gray-500 text-sm">No assets generated yet</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Logic & Customization */}
          {step === 3 && worldData && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6">Game Logic & Rules</h2>
                <LogicGenerator worldData={worldData} onGenerate={handleGenerateLogic} />
              </div>
            </motion.div>
          )}

          {/* Step 4: Export */}
          {step === 4 && worldData && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6">Export Your World</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { format: 'webgl', name: 'WebGL', desc: 'Play in browser', icon: PlayIcon },
                    { format: 'unity', name: 'Unity', desc: 'Unity package', icon: CubeIcon },
                    { format: 'godot', name: 'Godot', desc: 'Godot project', icon: Cog6ToothIcon }
                  ].map((option) => (
                    <button
                      key={option.format}
                      onClick={() => handleExport(option.format)}
                      className="p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-purple-500 transition text-left"
                    >
                      <option.icon className="h-10 w-10 text-purple-400 mb-3" />
                      <h3 className="font-semibold text-lg">{option.name}</h3>
                      <p className="text-gray-400 text-sm">{option.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// Asset Generator Component
function AssetGenerator({ onGenerate }) {
  const [prompt, setPrompt] = useState('');
  const [type, setType] = useState('prop');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt, type);
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-400 mb-2">Asset Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
        >
          <option value="character">Character</option>
          <option value="building">Building</option>
          <option value="terrain">Terrain</option>
          <option value="prop">Prop</option>
          <option value="vehicle">Vehicle</option>
          <option value="weapon">Weapon</option>
          <option value="creature">Creature</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Description</label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A medieval stone tower with ivy..."
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2"
      >
        <SparklesIcon className="h-5 w-5" />
        Generate Asset
      </button>
    </form>
  );
}

// Logic Generator Component
function LogicGenerator({ worldData, onGenerate }) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onGenerate(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Describe your game mechanics
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Players can collect resources, craft items, and battle monsters. There should be a day/night cycle..."
          className="w-full h-32 bg-gray-900 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500 resize-none"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center gap-2"
      >
        <Cog6ToothIcon className="h-5 w-5" />
        Generate Game Logic
      </button>

      {/* Quick Templates */}
      <div className="pt-6 border-t border-gray-700">
        <h4 className="text-sm text-gray-400 mb-3">Quick Templates:</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { name: 'RPG Combat', desc: 'Turn-based combat system' },
            { name: 'Resource Gathering', desc: 'Mine, chop, collect resources' },
            { name: 'Quest System', desc: 'NPC quests with rewards' },
            { name: 'Crafting', desc: 'Combine items to create new ones' }
          ].map((template, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setDescription(template.desc)}
              className="p-3 bg-gray-900 rounded-lg text-left hover:bg-gray-700 transition"
            >
              <div className="font-medium">{template.name}</div>
              <div className="text-sm text-gray-400">{template.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}
