const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// configure the proxy middleware
const rapidApiKey = process.env.VITE_RAPID_API_KEY;

const proxy = createProxyMiddleware({
  target: 'https://youtube-v31.p.rapidapi.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/',
    '^/': '/',
  },
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});

// use the proxy middleware for requests to /api
app.use('/', proxy);

// serve the static files from the dist directory
app.use(express.static('dist'));

// start the server
const PORT = process.env.PORT || 3000;

console.log('Starting server...');
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Server started.'); 
});