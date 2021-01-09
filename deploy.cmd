@echo off
setlocal
git status
git checkout develop
git pull
yarn run deploy
endlocal