#!/bin/bash

# 获取当前提交的变更文件大小统计
git diff --staged --numstat | awk '{
    additions += $1
    deletions += $2
} END {
    printf "本次提交变更统计:\n"
    printf "新增行数: %d\n", additions
    printf "删除行数: %d\n", deletions
    printf "总计变更行数: %d\n", additions + deletions
}'

# 获取暂存区文件的总大小
echo -e "\n暂存区文件大小:"
git diff --staged --name-only | xargs ls -lh 2>/dev/null | awk '{
    size = $5
    unit = $6
    printf "%s\t%s%s\n", $9, size, unit
}'

# 显示总计大小
total_size=$(git diff --staged --name-only | xargs ls -l 2>/dev/null | awk '{total += $5} END {print total/1024/1024}')
echo -e "\n总计大小: ${total_size}MB" 