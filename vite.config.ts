import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   https: {
  //     key: fs.readFileSync('C:/Users/DELL/Desktop/restructure/Metadrob-Resturcture/Cert/key.pem'),
  //     cert: fs.readFileSync('C:/Users/DELL/Desktop/restructure/Metadrob-Resturcture/Cert/cert.pem')
  //   },
  //   host: 'localhost',
  //   port: 4000 
  // }
  
})
