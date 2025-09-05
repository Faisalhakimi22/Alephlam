'use client'

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react'

interface AudioContextType {
  isPlaying: boolean
  isMuted: boolean
  volume: number
  showControls: boolean
  hasUserInteracted: boolean

  togglePlay: () => void
  toggleMute: () => void
  setVolume: (volume: number) => void
  setShowControls: (show: boolean) => void
  stopAudio: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

interface AudioProviderProps {
  children: ReactNode
  audioSrc: string
}

export const AudioProvider = ({ children, audioSrc }: AudioProviderProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolumeState] = useState(0.3) // Start with lower volume for better auto-play success
  const [showControls, setShowControls] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [audioStopped, setAudioStopped] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const hasAttemptedAutoplay = useRef(false)

  // Simple auto-play like the original AudioPlayer
  useEffect(() => {
    if (!audioStopped && audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.play().catch(() => {
        // Auto-play was prevented, show controls
        setShowControls(true)
      })
      setIsPlaying(true)
    }
  }, [volume])

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [isMuted, volume])

  // Update audio volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [isMuted, volume])

  const togglePlay = () => {
    setHasUserInteracted(true)
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
      }
    }
  }

  const toggleMute = () => {
    setHasUserInteracted(true)
    setIsMuted(!isMuted)
  }

  const setVolume = (newVolume: number) => {
    setHasUserInteracted(true)
    setVolumeState(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const stopAudio = () => {
    setHasUserInteracted(true)
    setAudioStopped(true)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setShowControls(false)
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  const value: AudioContextType = {
    isPlaying,
    isMuted,
    volume,
    showControls,
    hasUserInteracted,

    togglePlay,
    toggleMute,
    setVolume,
    setShowControls,
    stopAudio
  }

  return (
    <AudioContext.Provider value={value}>
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={handleEnded}
        preload="auto"
        loop
      />
      {children}
    </AudioContext.Provider>
  )
}