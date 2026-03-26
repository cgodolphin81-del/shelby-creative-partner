import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

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
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Start free, upgrade when you're ready
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}>Monthly</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-7 bg-dark-800 rounded-full relative transition-colors"
            >
              <div className={`absolute top-1 w-5 h-5 bg-psychelic-purple rounded-full transition-transform ${
                billingPeriod === 'yearly' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}>
              Yearly <span className="text-green-400 text-sm">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            tier="Free"
            price={0}
            description="Perfect for exploring AI art"
            features={[
              '10 generations per day',
              'Standard quality (1024x1024)',
              'Basic art styles',
              'Personal use license',
              'Community gallery access',
              'Watermarked downloads'
            ]}
            cta="Start Free"
            popular={false}
          />

          <PricingCard
            tier="Pro"
            price={billingPeriod === 'monthly' ? 9.99 : 95.99}
            description="For serious creators"
            features={[
              'Unlimited generations',
              'HD quality (2048x2048)',
              'All 50+ art styles',
              'Commercial license',
              'Priority generation',
              'No watermarks',
              'NFT minting integration',
              'Print-on-demand access',
              'Variation & remix tools',
              'API access'
            ]}
            cta="Go Pro"
            popular={true}
          />

          <PricingCard
            tier="Enterprise"
            price={billingPeriod === 'monthly' ? 49.99 : 479.99}
            description="For teams and agencies"
            features={[
              'Everything in Pro',
              'Ultra HD (4096x4096)',
              'Custom style training',
              'Team collaboration',
              'White-label option',
              'Dedicated support',
              'SLA guarantee',
              'Bulk generation',
              'Advanced analytics',
              'Custom integrations'
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>

        {/* FAQ */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="Can I sell the art I create?"
              answer="Yes! Pro and Enterprise plans include a commercial license that allows you to sell your creations as prints, NFTs, or in other commercial products."
            />
            <FAQItem
              question="What happens if I cancel my subscription?"
              answer="You'll retain access to all your created art, but you'll be downgraded to the Free tier limits. Your Pro creations remain yours forever."
            />
            <FAQItem
              question="How does NFT minting work?"
              answer="Pro users can mint their creations directly to OpenSea or Foundation with one click. We handle the metadata and IPFS storage automatically."
            />
            <FAQItem
              question="What print products are available?"
              answer="Through our print-on-demand integration, you can offer your art as prints (various sizes), phone cases, canvases, posters, mugs, and more."
            />
            <FAQItem
              question="Is there a refund policy?"
              answer="Yes, we offer a 14-day money-back guarantee. If you're not satisfied, contact support for a full refund."
            />
          </div>
        </motion.div>

        {/* Revenue Model Info */}
        <motion.div
          className="mt-20 bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Our Revenue Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-bold mb-2">Subscription Revenue</h3>
              <p className="text-gray-400 text-sm">
                Pro subscriptions at $9.99/month provide steady recurring revenue from dedicated creators.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="font-bold mb-2">Print Commission</h3>
              <p className="text-gray-400 text-sm">
                15-30% commission on print-on-demand sales through our integrated marketplace.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold mb-2">NFT Royalties</h3>
              <p className="text-gray-400 text-sm">
                2.5% royalty on secondary NFT sales minted through our platform.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PricingCard({ tier, price, description, features, cta, popular }) {
  return (
    <motion.div
      className={`relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
        popular ? 'border-psychelic-purple shadow-lg shadow-purple-500/20' : 'border-white/10'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-psychelic-purple to-psychelic-pink px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{tier}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="text-4xl font-bold">
          ${price}
          {price > 0 && (
            <span className="text-lg text-gray-400 font-normal">
              /{tier === 'Enterprise' ? 'month' : 'month'}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          popular
            ? 'bg-gradient-to-r from-psychelic-purple to-psychelic-pink hover:opacity-90'
            : 'bg-dark-900 border border-white/20 hover:border-psychelic-purple'
        }`}
      >
        {cta}
      </button>
    </motion.div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-dark-800/50 rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-800 transition-colors"
      >
        <span className="font-medium">{question}</span>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
}
