#!/usr/bin/env sh
# 打包放actions，前提：代码在github，需要同步代码gitee(尽量)

publishBranch="deploy-action"

# 确保脚本抛出遇到的错误

set -e

# 本地执行

npm run push 'deploy'
git checkout "$publishBranch"
git merge -
git push origin "$publishBranch"
git checkout -

# actions脚本↓↓，时机：当分支更新

set -e

git checkout "$publishBranch"

npm run build

cd docs

git init
git add -A
git config user.name action
git config user.email ych.class@qq.com
git commit -m 'deploy'
git remote add origin https://gitee.com/i2333g3/personal-learning-blog.git
git push -u -f origin master

cd -

# 执行 giteepage 部署 action
