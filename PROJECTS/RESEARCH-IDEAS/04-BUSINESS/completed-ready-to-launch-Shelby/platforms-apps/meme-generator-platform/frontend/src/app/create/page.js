'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function CreateMeme() {
  const router = useRouter();
  const canvasRef = useRef(null);
  
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [captions, setCaptions] = useState([{ text: '', position: { x: 250, y: 50 }, fontSize: 40 }]);
  const [filters, setFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [viralPrediction, setViralPrediction] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    fetchTemplates();
    checkSubscription();
  }, [selectedCategory]);

  const checkSubscription = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      
      const res = await fetch(`${process.env.API_URL}/payments/subscription`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setIsPremium(data.data.plan !== 'free');
      }
    } catch (err) {
      console.error('Error checking subscription:', err);
    }
  };

  const fetchTemplates = async () => {
    try {
      const params = new URLSearchParams({
        category: selectedCategory !== 'all' ? selectedCategory : '',
        search: searchQuery,
        limit: 50
      });
      
      const res = await fetch(`${process.env.API_URL}/templates?${params}`);
      const data = await res.json();
      if (data.success) {
        setTemplates(data.data);
      }
    } catch (err) {
      console.error('Error fetching templates:', err);
    }
  };

  const generateAICaptions = async () => {
    if (!selectedTemplate) {
      toast.error('Please select a template first');
      return;
    }

    setIsGenerating(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.API_URL}/captions/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          template: selectedTemplate.name,
          context: 'funny meme',
          variations: 5
        })
      });

      const data = await res.json();
      if (data.success) {
        setAiSuggestions(data.data);
        toast.success('AI captions generated!');
      }
    } catch (err) {
      toast.error('Failed to generate captions');
    } finally {
      setIsGenerating(false);
    }
  };

  const predictViralScore = async () => {
    if (!selectedTemplate) {
      toast.error('Please select a template first');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.API_URL}/viral/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          template: selectedTemplate._id,
          captions,
          tags: ['funny', 'viral'],
          isPublic: true
        })
      });

      const data = await res.json();
      if (data.success) {
        setViralPrediction(data.data);
      }
    } catch (err) {
      toast.error('Failed to predict viral score');
    }
  };

  const createMeme = async () => {
    if (!selectedTemplate) {
      toast.error('Please select a template');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.API_URL}/memes/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          templateId: selectedTemplate._id,
          captions,
          filters,
          isPublic: true,
          tags: ['funny', 'viral']
        })
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Meme created!');
        router.push(`/meme/${data.data._id}`);
      } else {
        toast.error(data.error || 'Failed to create meme');
      }
    } catch (err) {
      toast.error('Failed to create meme');
    }
  };

  const categories = ['all', 'classic', 'reaction', 'gaming', 'corporate', 'animals', 'trending'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-black/20 backdrop-blur border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">🎭 Meme Creator</h1>
          <div className="flex gap-4">
            <button
              onClick={predictViralScore}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
            >
              🔮 Predict Viral Score
            </button>
            <button
              onClick={createMeme}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              🚀 Create Meme
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Template Library */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">📚 Templates</h2>
              
              {/* Search */}
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-4 focus:outline-none focus:border-purple-500"
              />

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              {/* Template Grid */}
              <div className="grid grid-cols-2 gap-3 max-h-[600px] overflow-y-auto">
                {templates.map(template => (
                  <button
                    key={template._id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                      selectedTemplate?._id === template._id
                        ? 'ring-2 ring-purple-500 scale-105'
                        : 'hover:scale-105'
                    }`}
                  >
                    <img
                      src={template.imageUrl}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    {template.isPremium && (
                      <div className="absolute top-1 right-1 px-2 py-0.5 bg-yellow-500 text-black text-xs font-bold rounded">
                        PRO
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-white text-xs font-bold truncate">{template.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="lg:col-span-2">
            {/* Canvas */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6">
              <div className="aspect-square max-w-lg mx-auto bg-black/20 rounded-lg flex items-center justify-center">
                {selectedTemplate ? (
                  <div className="relative w-full h-full">
                    <img
                      src={selectedTemplate.imageUrl}
                      alt={selectedTemplate.name}
                      className="w-full h-full object-contain"
                    />
                    {captions.map((caption, idx) => (
                      <div
                        key={idx}
                        className="absolute text-center font-bold text-white"
                        style={{
                          left: caption.position.x,
                          top: caption.position.y,
                          fontSize: caption.fontSize,
                          textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        {caption.text || 'Your text here'}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400 text-center">
                    <div className="text-6xl mb-4">👆</div>
                    <div>Select a template to start</div>
                  </div>
                )}
              </div>
            </div>

            {/* Caption Editor */}
            {selectedTemplate && (
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">✏️ Captions</h2>
                  <button
                    onClick={generateAICaptions}
                    disabled={isGenerating}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50"
                  >
                    {isGenerating ? '🤖 Generating...' : '🤖 AI Generate'}
                  </button>
                </div>

                {aiSuggestions.length > 0 && (
                  <div className="mb-4 p-4 bg-purple-600/20 rounded-lg">
                    <h3 className="text-sm font-bold text-purple-300 mb-2">AI Suggestions:</h3>
                    <div className="flex flex-wrap gap-2">
                      {aiSuggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCaptions([{ text: suggestion.text, position: { x: 250, y: 50 }, fontSize: 40 }])}
                          className="px-3 py-1 bg-purple-600/50 text-white text-sm rounded-full hover:bg-purple-600 transition-all"
                        >
                          {suggestion.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {captions.map((caption, idx) => (
                  <div key={idx} className="flex gap-4 mb-4">
                    <input
                      type="text"
                      value={caption.text}
                      onChange={(e) => {
                        const newCaptions = [...captions];
                        newCaptions[idx].text = e.target.value;
                        setCaptions(newCaptions);
                      }}
                      placeholder="Enter caption text..."
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    />
                    <input
                      type="number"
                      value={caption.fontSize}
                      onChange={(e) => {
                        const newCaptions = [...captions];
                        newCaptions[idx].fontSize = parseInt(e.target.value);
                        setCaptions(newCaptions);
                      }}
                      className="w-20 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                      placeholder="Size"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Viral Prediction */}
            {viralPrediction && (
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">🔮 Viral Prediction</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-6xl mb-2">
                      {viralPrediction.score >= 90 ? '🔥' :
                       viralPrediction.score >= 80 ? '⭐' :
                       viralPrediction.score >= 70 ? '👍' : '📊'}
                    </div>
                    <div className="text-3xl font-bold text-white">{viralPrediction.score}/100</div>
                    <div className="text-purple-400">{viralPrediction.rating}</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 mb-2">PREDICTED REACH</h3>
                    <div className="text-2xl font-bold text-white">{viralPrediction.predictedReach.label}</div>
                    <div className="text-sm text-gray-400 mt-2">
                      Confidence: {Math.round(viralPrediction.confidence * 100)}%
                    </div>
                  </div>
                </div>
                {viralPrediction.recommendations.length > 0 && (
                  <div className="mt-4 p-4 bg-yellow-600/20 rounded-lg">
                    <h3 className="text-sm font-bold text-yellow-300 mb-2">💡 Tips to Improve:</h3>
                    <ul className="space-y-1">
                      {viralPrediction.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
