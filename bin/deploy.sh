#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run save 'deploy'
npm run build

# 进入生成的文件夹
cd docs

git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin https://github.com/2333Ge/2333Ge.github.io.git    
git push -u -f origin main

cd -