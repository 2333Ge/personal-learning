#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run push
npm run doc:build

git checkout -b feat-blog
git merge feat-vuepress
git commit -m 'deploy'
git push