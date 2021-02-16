#!/bin/bash --login

echo -e "\nClear node_modules, aurelia/documentation (git shallow clone) ..."

rm -rf node_modules package-lock.json dep_repos
mkdir dep_repos

echo -e "\nShadow clone aurelia/documentation"
git clone --depth 1 git@github.com:aurelia/documentation.git dep_repos/documentation

echo -e "\nInstall aurelia npm packages for API doc ..."
npm install
