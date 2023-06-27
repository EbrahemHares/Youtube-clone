import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import {proxyy} from "./src/setupProxy"
// import dotenv from 'dotenv';

// dotenv.config();
// const isProduction = process.env.NODE_ENV === 'production';
// const isGitHubPages = process.env.VITE_GITHUB_ACTIONS === 'true';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  // server: {
  //   middleware: isProduction && isGitHubPages ? {
  //     1: [proxyy]
  //   } : {}
  // }
}) 
