//This file will contain the configuration for the http-proxy-middleware.
import dotenv from 'dotenv';

dotenv.config();
import { createProxyMiddleware } from 'http-proxy-middleware';
const rapidApiKey =  process.env.VITE_RAPID_API_KEY;


const proxyy = 
        createProxyMiddleware({
            target: 'https://youtube-v31.p.rapidapi.com',
            changeOrigin: true,
            pathRewrite: {
            '^/api': '/',
            },
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            }
        });
    ;

export {proxyy}