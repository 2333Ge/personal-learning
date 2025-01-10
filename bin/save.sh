#!/usr/bin/env sh
# 检查commit前的内容，并保存

set -e
echo "\n=== save start ===\n"


echo "检查是否有重复文件==>\n"

npm run lint

echo "检查commit内容==>\n"
npm run size-check

git add .

currenTime=$(date +"%Y-%m-%d %H:%M:%S")
commitMsg="atuo commit $currenTime"
if [ -n "$1" ]; then
    commitMsg=$1
fi
git commit -m "$commitMsg"


echo "\n=== save end ===\n"