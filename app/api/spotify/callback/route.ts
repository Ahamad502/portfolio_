import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  // Create a simple HTML page to display the code
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spotify Authorization</title>
        <style>
            body {
                font-family: system-ui, -apple-system, sans-serif;
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                text-align: center;
            }
            .success {
                color: #059669;
                background: #ecfdf5;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
            }
            .error {
                color: #dc2626;
                background: #fef2f2;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
            }
            code {
                background: #f3f4f6;
                padding: 10px;
                border-radius: 4px;
                display: block;
                margin: 10px 0;
                word-break: break-all;
            }
        </style>
    </head>
    <body>
        <h1>Spotify Authorization</h1>
        ${
          error
            ? `
            <div class="error">
                <h2>❌ Authorization Failed</h2>
                <p>Error: ${error}</p>
            </div>
        `
            : code
              ? `
            <div class="success">
                <h2>✅ Authorization Successful!</h2>
                <p>Copy this authorization code:</p>
                <code>${code}</code>
                <p><small>Copy the code above and provide it to complete your Spotify setup.</small></p>
            </div>
        `
              : `
            <p>Waiting for authorization...</p>
        `
        }
    </body>
    </html>
  `;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
