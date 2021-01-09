@echo off
setlocal
git checkout develop
git pull
yarn install
yarn run deploy
endlocal