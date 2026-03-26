import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('community');
  const [selectedArt, setSelectedArt] = useState(null);

  const communityArt = [
    { id: 1, title: 'Neon Dreams', artist: 'CryptoArtist42', price: '0.5 ETH', image: 'https://image.pollinations.ai/prompt/cyberpunk%20neon%20city?width=600&height=600&seed=101', likes: 234 },
    { id: 2, title: 'Cosmic Journey', artist: 'SpaceCreator', price: '0.8 ETH', image: 'https://image.pollinations.ai/prompt/cosmic%20space%20nebula?width=600&height=600&seed=102', likes: 189 },
    { id: 3, title: 'Abstract Mind', artist: 'DigitalDreamer', price: '0.3 ETH', image: 'https://image.pollinations.ai/prompt/abstract%20expressionism?width=600&height=600&seed=103', likes: 156 },
    { id: 4, title: 'Fantasy Realm', artist: 'MythMaker', price: '1.2 ETH', image: 'https://image.pollinations.ai/prompt/fantasy%20landscape%20dragon?width=600&height=600&seed=104', likes: 312 },
    { id: 5, title: 'Retro Waves', artist: 'SynthwaveKing', price: '0.4 ETH', image: 'https://image.pollinations.ai/prompt/synthwave%20sunset?width=600&height=600&seed=105', likes: 278 },
    { id: 6, title: 'Nature\'s Code', artist: 'BioDigital', price: '0.6 ETH', image: 'https://image.pollinations.ai/prompt/bioluminescent%20forest?width=600&height=600&seed=106', likes: 201 },
  ];

  const userGallery = [
    { id: 101, title: 'My First Creation', date: '2024-01-15', image: 'https://image.pollinations.ai/prompt/psychedelic%20art?width=600&height=600&seed=201', status: 'minted' },
    { id: 102, title: 'Sunset Dreams', date: '2024-01-18', image: 'https://image.pollinations.ai/prompt/sunset%20ocean?width=600&height=600&seed=202', status: 'available' },
    { id: 103, title: 'Geometric Patterns', date: '2024-01-20', image: 'https://image.pollinations.ai/prompt/geometric%20patterns?width=600&height=600&seed=203', status: 'printing' },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-psychelic-pink to-psychelic-cyan bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-gray-400 text-lg">
            Discover amazing AI art from the community and your collection
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-dark-800 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab('community')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'community'
                  ? 'bg-psychelic-purple text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Community Showcase
            </button>
            <button
              onClick={() => setActiveTab('my-gallery')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'my-gallery'
                  ? 'bg-psychelic-purple text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              My Gallery
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'community' ? communityArt : userGallery).map((art, index) => (
            <GalleryCard
              key={art.id}
              art={art}
              index={index}
              onClick={() => setSelectedArt(art)}
              tab={activeTab}
            />
          ))}
        </div>

        {/* Art Detail Modal */}
        {selectedArt && (
          <ArtModal art={selectedArt} onClose={() => setSelectedArt(null)} tab={activeTab} />
        )}
      </div>
    </div>
  );
}

function GalleryCard({ art, index, onClick, tab }) {
  return (
    <motion.div
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={art.image}
          alt={art.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{art.title}</h3>
        {tab === 'community' ? (
          <>
            <p className="text-sm text-gray-400 mb-2">by {art.artist}</p>
            <div className="flex items-center justify-between">
              <span className="text-psychelic-purple font-semibold">{art.price}</span>
              <span className="text-sm text-gray-400">❤️ {art.likes}</span>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-400 mb-2">{art.date}</p>
            <span className={`text-xs px-2 py-1 rounded-full ${
              art.status === 'minted' ? 'bg-green-500/20 text-green-400' :
              art.status === 'printing' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {art.status === 'minted' ? '✓ Minted as NFT' :
               art.status === 'printing' ? '🖨️ In Print' : 'Available'}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
}

function ArtModal({ art, onClose, tab }) {
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);

  const handleMint = async () => {
    setMinting(true);
    // Simulate minting process
    await new Promise(resolve => setTimeout(resolve, 3000));
    setMinting(false);
    setMinted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        className="bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-full object-cover rounded-l-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-dark-900/80 p-2 rounded-full hover:bg-dark-900 transition-colors md:hidden"
            >
              ✕
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{art.title}</h2>
                {tab === 'community' && (
                  <p className="text-gray-400">by {art.artist}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="hidden md:block bg-dark-900/80 p-2 rounded-full hover:bg-dark-900 transition-colors"
              >
                ✕
              </button>
            </div>

            {tab === 'community' ? (
              <>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-psychelic-purple mb-2">{art.price}</div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>❤️ {art.likes} likes</span>
                    <span>🔗 ERC-721</span>
                  </div>
                </div>

                {!minted ? (
                  <button
                    onClick={handleMint}
                    disabled={minting}
                    className="w-full bg-gradient-to-r from-psychelic-purple to-psychelic-pink py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 mb-4"
                  >
                    {minting ? '⏳ Minting...' : '🔮 Mint as NFT'}
                  </button>
                ) : (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-4 text-center">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="font-bold">Successfully Minted!</div>
                    <div className="text-sm text-gray-400">View on OpenSea</div>
                  </div>
                )}

                <div className="space-y-3">
                  <button className="w-full bg-dark-900 py-3 rounded-xl font-medium hover:bg-dark-900/80 transition-colors">
                    🖼️ Buy Print
                  </button>
                  <button className="w-full bg-dark-900 py-3 rounded-xl font-medium hover:bg-dark-900/80 transition-colors">
                    ❤️ Add to Favorites
                  </button>
                  <button className="w-full bg-dark-900 py-3 rounded-xl font-medium hover:bg-dark-900/80 transition-colors">
                    🔗 Share
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    art.status === 'minted' ? 'bg-green-500/20 text-green-400' :
                    art.status === 'printing' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {art.status === 'minted' ? '✓ Minted as NFT' :
                     art.status === 'printing' ? '🖨️ In Print' : 'Available'}
                  </span>
                </div>

                <div className="space-y-3">
                  {art.status !== 'minted' && (
                    <button className="w-full bg-gradient-to-r from-psychelic-purple to-psychelic-pink py-4 rounded-xl font-bold">
                      🔮 Mint as NFT
                    </button>
                  )}
                  {art.status !== 'printing' && (
                    <button className="w-full bg-dark-900 py-3 rounded-xl font-medium hover:bg-dark-900/80 transition-colors">
                      🖨️ Order Print
                    </button>
                  )}
                  <button className="w-full bg-dark-900 py-3 rounded-xl font-medium hover:bg-dark-900/80 transition-colors">
                    ⬇️ Download High-Res
                  </button>
                  <button className="w-full bg-dark-900 py-3 rounded-xl font-medium hover:bg-dark-900/80 transition-colors">
                    🗑️ Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
