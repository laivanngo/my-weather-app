// index.js - File chính của ứng dụng

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ------------------- ROUTES -------------------

// Route 1: Route chính - khi người dùng truy cập trang web
app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString('vi-VN');
    res.send(`
        <html>
            <head>
                <title>Weather App</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        margin: 0;
                    }
                    .container {
                        text-align: center;
                        padding: 40px;
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 20px;
                        backdrop-filter: blur(10px);
                    }
                    h1 { margin: 0 0 20px 0; }
                    a { color: white; text-decoration: none; margin-top: 20px; display: inline-block; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🌤️ Weather App</h1>
                    <p>Xin chào! Bây giờ là: ${currentTime}</p>
                    <p>Hôm nay trời đẹp!</p>
                    <a href="/about">About this App →</a>
                </div>
            </body>
        </html>
    `);
});

// Route 2: Route trang "About"
app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>About - Weather App</title>
                <style>
                    /* Copy same styles từ route chính */
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        margin: 0;
                    }
                    .container {
                        text-align: center;
                        padding: 40px;
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 20px;
                        backdrop-filter: blur(10px);
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>📱 About This App</h1>
                    <p>Weather App v1.0</p>
                    <p>Built with Node.js, Express, and ❤️</p>
                    <p>Deployed automatically with GitHub Actions & Vercel!</p>
                    <br>
                    <a href="/" style="color: white;">← Back to Home</a>
                </div>
            </body>
        </html>
    `);
});

// ------------------- SERVER START -------------------

// Khởi động server
app.listen(port, () => {
    console.log(`✅ Server đang chạy tại http://localhost:${port}`);
});