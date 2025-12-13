'use client';

import { Music, RocketIcon, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const ConnectAndMusic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [formMessage, setFormMessage] = useState('');

  // 🎵 SPOTIFY PLAYLIST CONFIGURATION
  // Replace this with your playlist ID from Spotify:
  // 1. Go to open.spotify.com and find your playlist
  // 2. Click Share → Embed playlist
  // 3. Copy the playlist ID (the part after /playlist/)
  const playlistId = '37i9dQZF1DX0XUsuxWHRQd'; // Default: Chill Coding playlist

  // 📧 FORMSPREE CONFIGURATION
  // Replace with your Formspree endpoint URL:
  // 1. Sign up at formspree.io
  // 2. Create a new form
  // 3. Copy your form endpoint URL
  const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // Replace with your Formspree URL

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormState('success');
        setFormMessage("Thanks for your message! I'll get back to you soon.");
        form.reset();
      } else {
        setFormState('error');
        setFormMessage('Oops! Something went wrong. Please try again.');
      }
    } catch {
      setFormState('error');
      setFormMessage(
        'Network error. Please check your connection and try again.',
      );
    }

    // Reset form state after 5 seconds
    setTimeout(() => {
      setFormState('idle');
      setFormMessage('');
    }, 5000);
  };

  return (
    <div
      className={`grid transform grid-cols-1 gap-8 transition-all duration-700 ease-out lg:grid-cols-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} `}
    >
      {/* Left Column - Contact Form */}
      <div
        className="bg-card relative h-fit rounded-xl p-6 md:p-8"
        style={{
          boxShadow:
            '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="bg-primary/10 dark:bg-primary/20 text-primary rounded-full p-2.5">
            <RocketIcon size={18} />
          </div>
          <div>
            <h3 className="font-cal text-card-foreground text-xl font-bold">
              Let's Connect 🚀
            </h3>
            <p className="text-muted-foreground mt-0.5 text-sm">
              Have a project in mind? Send me a message.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="text-card-foreground mb-2 block text-sm font-medium"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={formState === 'loading'}
              className="border-border bg-background text-foreground focus:ring-primary/50 focus:border-primary w-full rounded-lg border px-4 py-3 transition-all duration-200 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-card-foreground mb-2 block text-sm font-medium"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={formState === 'loading'}
              className="border-border bg-background text-foreground focus:ring-primary/50 focus:border-primary w-full rounded-lg border px-4 py-3 transition-all duration-200 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-card-foreground mb-2 block text-sm font-medium"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              disabled={formState === 'loading'}
              className="border-border bg-background text-foreground focus:ring-primary/50 focus:border-primary w-full resize-none rounded-lg border px-4 py-3 transition-all duration-200 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            disabled={formState === 'loading'}
            className="group w-full"
            variant="default"
          >
            {formState === 'loading' ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send
                  size={16}
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                />
              </>
            )}
          </Button>

          {/* Form Status Message */}
          {formMessage && (
            <div
              className={`mt-4 rounded-lg p-3 text-sm ${
                formState === 'success'
                  ? 'border border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400'
                  : 'border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400'
              } `}
            >
              {formMessage}
            </div>
          )}
        </form>
      </div>

      {/* Right Column - Spotify Playlist */}
      <div
        className="bg-card relative h-fit rounded-xl p-6 md:p-8"
        style={{
          boxShadow:
            '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="bg-primary/10 dark:bg-primary/20 text-primary rounded-full p-2.5">
            <Music size={18} />
          </div>
          <div>
            <h3 className="font-cal text-card-foreground text-xl font-bold">
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

export default ConnectAndMusic;
