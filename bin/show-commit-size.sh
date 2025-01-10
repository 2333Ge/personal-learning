#!/bin/bash

# 定义颜色代码
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

show_changes() {
    local diff_command=$1
    local title=$2
    
    echo -e "\n${BLUE}=== $title ===${NC}"
    
    # 显示文件大小
    echo -e "${YELLOW}文件大小:${NC}"
    git $diff_command --name-only | xargs ls -lh 2>/dev/null | awk -v green="${GREEN}" -v nc="${NC}" '{
        size = $5
        unit = $6
        printf "%s\t%s%s%s%s\n", $9, green, size, unit, nc
    }'
    
    # 显示总大小
    total_size=$(git $diff_command --name-only | xargs ls -l 2>/dev/null | awk '{total += $5} END {print total/1024/1024}')
    echo -e "\n${YELLOW}总计大小: ${GREEN}${total_size}MB${NC}"
}

# 显示暂存区的更改
show_changes "diff --staged" "暂存区的更改 (已 git add 的文件)"

# 显示未暂存的更改
show_changes "diff" "未暂存的更改 (未 git add 的文件)" 