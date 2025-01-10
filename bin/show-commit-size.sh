#!/bin/bash

show_changes() {
    local diff_command=$1
    local title=$2
    
    echo -e "\n=== $title ==="
    
    # 显示文件变更统计
    git $diff_command --numstat | awk '{
        additions += $1
        deletions += $2
    } END {
        printf "变更统计:\n"
        printf "新增行数: %d\n", additions
        printf "删除行数: %d\n", deletions
        printf "总计变更行数: %d\n", additions + deletions
    }'
    
    # 显示文件大小
    echo -e "\n文件大小:"
    git $diff_command --name-only | xargs ls -lh 2>/dev/null | awk '{
        size = $5
        unit = $6
        printf "%s\t%s%s\n", $9, size, unit
    }'
    
    # 显示总大小
    total_size=$(git $diff_command --name-only | xargs ls -l 2>/dev/null | awk '{total += $5} END {print total/1024/1024}')
    echo -e "\n总计大小: ${total_size}MB"
}

# 显示暂存区的更改
show_changes "diff --staged" "暂存区的更改 (已 git add 的文件)"

# 显示未暂存的更改
show_changes "diff" "未暂存的更改 (未 git add 的文件)" 