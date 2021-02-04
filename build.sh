#!/bin/bash
set -e
set -x
git submodule init
git submodule update
cd ./kiwiirc/
yarn install && yarn build
mv ./dist ../client
cd ..
cp -r client-defaults/* client/
cd client/
yarn install && yarn build
