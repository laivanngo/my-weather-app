// index.js - File chính của ứng dụng
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route chính - khi người dùng truy cập trang web
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
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🌤️ Weather App</h1>
                    <p>Xin chào bạn Ngọ! Bây giờ là: ${currentTime}</p>
                    <p>Hôm nay trời đẹp!</p>
                </div>
            </body>
        </html>
    `);
});

// Khởi động server
app.listen(port, () => {
    console.log(`✅ Server đang chạy tại http://localhost:${port}`);
});