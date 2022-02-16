#!/bin/bash
echo .
echo .
echo .
echo "***********************************************************"
echo date
echo "***********************************************************"
echo .
echo .
echo .



echo .
echo .
echo .
echo "***********************************************************"
echo "Deployment Activity Start"
echo "***********************************************************"
echo .
echo .
echo .

echo .
echo .
echo .
echo "***********************************************************"
date
echo "***********************************************************"
echo .
echo .
echo .

echo .
echo .
echo .
echo "***********************************************************"
echo "Checkout to website repository "
echo "***********************************************************"
echo .
echo .
echo .

cd /home/MyLife

echo .
echo .
echo .
echo "***********************************************************"
echo "Checkout to Master Branch"
echo "***********************************************************"
echo .
echo .
echo .

git checkout master

echo .
echo .
echo .
echo "***********************************************************"
echo "Pull the Latest changes"
echo "***********************************************************"
echo .
echo .
echo .

git pull

echo .
echo .
echo .
echo "***********************************************************"
echo "Yarn Install and Run Build and  Deploy "
echo "***********************************************************"
echo .
echo .
echo .

rm yarn.lock
yarn add node-sass
yarn install
yarn build

echo .
echo .
echo .
echo "***********************************************************"
echo "Build Deplyed     "
echo "***********************************************************"
echo .
echo .
echo .

echo
echo
echo
echo
echo
echo
