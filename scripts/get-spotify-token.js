const CLIENT_ID = 'c89f7fec6ee44dbfa6b8595157d28b54';
const CLIENT_SECRET = 'e30d81e19ac8403195f70b127daa9fde';
const REDIRECT_URI =
  'https://portfolio-cyan-beta-djxl1kbl71.vercel.app/spotify-callback';
const AUTHORIZATION_CODE =
  'AQBXycf1GE6hvaW05Zs57c5wvUVoU8TPpejt1n84nX-g60KowgMniw4PwvRSVuo49L8NfxL_UD0OA00wRvMViyD3tDJEr7OG7icZfl0DQy1oW-I7yTNbzr2gu2qAP3WvAn05PTJ9QEx4wEb6MPwJ0qDECYxwyKXYQCut_lMgLxuJ6lHvEsaszDri7g2LGfdOb34x8VqQLpN69JeXdeDZL6ys95mu0dPeijLiSJcQZW72jNyhvMr03lNWc8RQHX-fhvmiZdsOI1gDzf837oZIXcw5GL8aLrM_6YixWJM';

async function getRefreshToken() {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: AUTHORIZATION_CODE,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('❌ Error:', data.error);
      console.error('Description:', data.error_description);
      return;
    }

    console.log('✅ Success! Here are your Spotify tokens:');
    console.log('\n🔑 SPOTIFY_CLIENT_ID=' + CLIENT_ID);
    console.log('🔐 SPOTIFY_CLIENT_SECRET=' + CLIENT_SECRET);
    console.log('🔄 SPOTIFY_REFRESH_TOKEN=' + data.refresh_token);
    console.log(
      '\n📝 Add these to your .env.local file and Vercel environment variables!',
    );
  } catch (error) {
    console.error('❌ Request failed:', error.message);
  }
}

getRefreshToken();
