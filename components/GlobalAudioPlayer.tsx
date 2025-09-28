'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Play, Pause, X } from 'lucide-react'
import { useAudio } from '@/contexts/AudioContext'

const GlobalAudioPlayer = () => {
  const {
    isPlaying,
    isMuted,
    volume,
    showControls,
    togglePlay,
    toggleMute,
    setVolume,
    setShowControls,
    stopAudio
  } = useAudio()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onMouseLeave={() => setShowControls(false)}
            className={`bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[280px] ${
              !isPlaying ? 'ring-2 ring-primary ring-opacity-50' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-secondary">Background Audio</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={stopAudio}
                  className="text-red-400 hover:text-red-600 transition-colors text-xs font-medium"
                  title="Stop audio permanently"
                >
                  Stop
                </button>
                <button
                  onClick={() => setShowControls(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title="Hide controls"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              
              <button
                onClick={toggleMute}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isMuted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  title="Volume"
                />
              </div>
            </div>
            
            <div className="text-xs text-gray-500 text-center">
              {isPlaying ? 'Playing background audio' : 'Click play to start background audio'} • {Math.round((isMuted ? 0 : volume) * 100)}% volume
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating audio toggle button */}
      {!showControls && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onMouseEnter={() => setShowControls(true)}
          className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all"
          title="Show audio controls"
        >
          <Volume2 className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  )
}

export default GlobalAudioPlayer