#!/bin/sh
bash /root/admin/sweb/nginx/admin/start.sh

cd /root/admin/node/proyectos/iawprojects
npm install
chmod +x node_modules/.bin/vite

npm run dev -- --host 0.0.0.0 --port 3000 
