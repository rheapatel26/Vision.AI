import React, { useState } from 'react';
import { Sparkles, Grid3x3, GitBranch, Lightbulb, TrendingUp, Search, User } from 'lucide-react';

const VisionAI = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('pinterest');
  const [ideaText, setIdeaText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCreateVision = () => {
    if (!ideaText.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setCurrentPage('board');
    }, 2000);
  };

  // Enhanced Pinterest-style images with varied heights
  const pinterestImages = [
    { id: 1, height: 280, title: 'Brand Identity', category: 'Branding', colors: ['#FFE5E5', '#FFB5C5'] },
    { id: 2, height: 380, title: 'Product Vision', category: 'Product', colors: ['#E5F3FF', '#B5D9FF'] },
    { id: 3, height: 320, title: 'Color Palette', category: 'Design', colors: ['#F5E5FF', '#D5B5FF'] },
    { id: 4, height: 420, title: 'Marketing Campaign', category: 'Marketing', colors: ['#FFF5E5', '#FFD5B5'] },
    { id: 5, height: 260, title: 'User Experience', category: 'UX/UI', colors: ['#E5FFF5', '#B5FFD5'] },
    { id: 6, height: 350, title: 'Typography System', category: 'Design', colors: ['#E5E5FF', '#C5C5FF'] },
    { id: 7, height: 300, title: 'Logo Concepts', category: 'Branding', colors: ['#FFE5F5', '#FFB5D5'] },
    { id: 8, height: 400, title: 'UI Components', category: 'Product', colors: ['#E5FFFF', '#B5F5F5'] },
    { id: 9, height: 340, title: 'Social Media', category: 'Marketing', colors: ['#FFF5F5', '#FFD5D5'] },
    { id: 10, height: 290, title: 'Packaging Design', category: 'Product', colors: ['#F5FFE5', '#D5FFB5'] },
    { id: 11, height: 360, title: 'Website Layout', category: 'UX/UI', colors: ['#FFF5E5', '#FFDDB5'] },
    { id: 12, height: 310, title: 'Brand Guidelines', category: 'Branding', colors: ['#F5E5FF', '#E5B5FF'] },
  ];

  const flowchartData = [
    { label: 'User Idea', icon: Lightbulb },
    { label: 'LLM (Prompt Engineer)', icon: Sparkles },
    { label: 'Structured Image Plan (JSON)', icon: Grid3x3 },
    { label: 'Diffusion Model (SDXL)', icon: Sparkles },
    { label: 'LoRA Style Adapter', icon: TrendingUp },
    { label: 'ControlNet (Optional)', icon: GitBranch },
    { label: 'Pinterest-like Images', icon: Grid3x3 },
  ];

  const competitors = [
    { name: 'Miro', score: 8.5, gap: 'Limited AI generation' },
    { name: 'Figma', score: 9.0, gap: 'Not idea-focused' },
    { name: 'Notion AI', score: 7.5, gap: 'No visual boards' },
    { name: 'Canva', score: 8.0, gap: 'Template-based only' },
  ];

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="backdrop-blur-xl bg-white/40 rounded-3xl shadow-2xl border border-white/50 p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 mb-6 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Vision.AI
              </h1>
              <p className="text-lg text-gray-600">
                Transform your ideas into visual reality
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <textarea
                  value={ideaText}
                  onChange={(e) => setIdeaText(e.target.value)}
                  placeholder="Enter your idea here... (e.g., I want to make a fitness apparel startup)"
                  className="w-full h-40 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 focus:border-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-100 resize-none text-gray-700 placeholder-gray-400 shadow-inner"
                />
              </div>

              <button
                onClick={handleCreateVision}
                disabled={!ideaText.trim() || isGenerating}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    Generating your vision...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Create My Vision Board
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {['Vision Board', 'Flowchart', 'Market Analysis', 'Idea Score'].map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-sm text-gray-700 border border-white/60"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Pinterest-style Header */}
      {activeTab === 'pinterest' && (
        <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
          <div className="max-w-[1600px] mx-auto px-4 py-3">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hidden sm:block">
                  Vision.AI
                </span>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-3xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search your vision board..."
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 hover:bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all text-gray-700"
                  />
                </div>
              </div>

              {/* User Icon */}
              <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all">
                <User className="w-5 h-5 text-gray-700" />
              </button>

              {/* New Idea Button */}
              <button
                onClick={() => setCurrentPage('landing')}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all hidden md:block"
              >
                New Idea
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Non-Pinterest Header */}
      {activeTab !== 'pinterest' && (
        <div className="backdrop-blur-xl bg-white/40 border-b border-white/50 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Vision.AI
              </span>
            </div>
            <button
              onClick={() => setCurrentPage('landing')}
              className="px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm text-sm text-gray-700 hover:bg-white/80 transition-all"
            >
              New Idea
            </button>
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className={activeTab === 'pinterest' ? 'max-w-[1600px] mx-auto px-4 py-6' : 'max-w-7xl mx-auto px-6 py-8'}>
        {activeTab === 'pinterest' && (
          <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4">
            {pinterestImages.map((img) => (
              <div
                key={img.id}
                className="break-inside-avoid mb-4 group cursor-pointer"
                style={{ marginBottom: '16px' }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  {/* Image Container */}
                  <div
                    style={{
                      height: `${img.height}px`,
                      background: `linear-gradient(135deg, ${img.colors[0]} 0%, ${img.colors[1]} 100%)`,
                    }}
                    className="w-full relative"
                  >
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-3 mx-auto">
                          <Sparkles className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                      <h3 className="text-white font-bold text-lg drop-shadow-lg mb-2">
                        {img.title}
                      </h3>
                      <span className="text-white/90 text-sm drop-shadow-md">
                        {img.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span className="font-medium">Save</span>
                      <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center">
                        <span className="text-white">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'flowchart' && (
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-xl bg-white/40 rounded-3xl border border-white/50 shadow-xl p-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">
                Generation Pipeline
              </h2>
              <div className="space-y-4">
                {flowchartData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="backdrop-blur-sm bg-white/60 rounded-2xl border border-white/60 p-6 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-lg font-medium text-gray-700">
                            {item.label}
                          </span>
                        </div>
                      </div>
                      {index < flowchartData.length - 1 && (
                        <div className="flex justify-center my-2">
                          <div className="w-0.5 h-8 bg-gradient-to-b from-purple-300 to-pink-300" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="backdrop-blur-xl bg-white/40 rounded-3xl border border-white/50 shadow-xl p-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Idea Score
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Originality', score: 8.5 },
                  { label: 'Feasibility', score: 9.0 },
                  { label: 'Market Size', score: 8.8 },
                  { label: 'Tech Difficulty', score: 7.5 },
                  { label: 'Competition', score: 6.5 },
                  { label: 'Scale Potential', score: 9.2 },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="backdrop-blur-sm bg-white/60 rounded-2xl border border-white/60 p-4 text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                      {item.score}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  8.3
                </div>
                <div className="text-gray-600">Overall Score</div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/40 rounded-3xl border border-white/50 shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Existing Solutions & Gaps
              </h2>
              <div className="space-y-4">
                {competitors.map((comp) => (
                  <div
                    key={comp.name}
                    className="backdrop-blur-sm bg-white/60 rounded-2xl border border-white/60 p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-semibold text-gray-800">
                        {comp.name}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium">
                        {comp.score}/10
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Gap:</span> {comp.gap}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-white/90 border-t border-gray-200 z-30">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-around items-center max-w-md mx-auto">
            {[
              { id: 'pinterest', icon: Grid3x3, label: 'Vision Board' },
              { id: 'flowchart', icon: GitBranch, label: 'Flowchart' },
              { id: 'solutions', icon: Lightbulb, label: 'Solutions' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-br from-purple-400 to-pink-400 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAI;