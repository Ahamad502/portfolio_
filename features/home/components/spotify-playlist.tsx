'use client';

import { Music } from 'lucide-react';
import { useEffect, useState } from 'react';

const SpotifyPlaylist = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 🎵 SPOTIFY PLAYLIST CONFIGURATION
  // Replace this with your playlist ID from Spotify:
  // 1. Go to open.spotify.com and find your playlist
  // 2. Click Share → Embed playlist
  // 3. Copy the playlist ID (the part after /playlist/)
  // Example: https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd
  const playlistId = '37i9dQZF1DX0XUsuxWHRQd'; // Default: Chill Coding playlist

  useEffect(() => {
    // Smooth entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-start gap-8 lg:flex-row">
      {/* Spacer - pushes playlist to right on desktop */}
      <div className="hidden flex-1 lg:block" />

      {/* Spotify Playlist Container */}
      <div
        className={`bg-card relative w-full transform rounded-xl p-6 transition-all duration-700 ease-out md:p-8 lg:w-[420px] lg:max-w-[420px] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} `}
        style={{
          boxShadow:
            '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Header Section */}
        <div className="mb-6 flex items-center gap-3">
          <div className="bg-primary/10 dark:bg-primary/20 text-primary rounded-full p-2.5">
            <Music size={18} />
          </div>
          <div>
            <h3 className="font-cal text-card-foreground text-lg font-bold">
              My Coding Playlist 🎧
            </h3>
            <p className="text-muted-foreground mt-0.5 text-sm">
              Music I listen to while building things
            </p>
          </div>
        </div>

        {/* Spotify Embed */}
        <div
          className="group relative transition-transform duration-300 hover:scale-[1.01]"
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-gradient-to-br from-green-500/20 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="encrypted-media; clipboard-write"
            loading="lazy"
            title="My Coding Playlist - Spotify Embed"
            className="relative z-0 rounded-xl"
            style={{
              border: 'none',
              minHeight: '352px',
              backgroundColor: '#121212',
            }}
          />
        </div>

        {/* Subtle bottom accent */}
        <div className="mt-4 text-center">
          <p className="text-muted-foreground/60 text-xs">Powered by Spotify</p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlaylist;
