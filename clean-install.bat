@echo off
echo Cleaning previous installation...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist yarn.lock del yarn.lock

echo Installing dependencies...
npm install

echo Starting development server...
npm run dev