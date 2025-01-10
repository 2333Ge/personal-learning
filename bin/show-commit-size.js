#!/usr/bin/env node

const { execSync } = require('child_process');
const chalk = require('chalk');
const fs = require('fs');

function getChangedFiles() {
    try {
        // 使用 git status 获取更详细的文件状态
        const statusOutput = execSync(`git status --porcelain`, { encoding: 'utf8' })
            .trim()
            .split('\n')
            .filter(Boolean);

        const files = {
            modified: [],
            added: [],
            deleted: []
        };

        statusOutput.forEach(line => {
            const status = line.substring(0, 2);
            const file = line.substring(3);

            // 根据状态码分类文件
            // M: modified, A: added, D: deleted, ??: untracked
            if (status.includes('M')) {
                files.modified.push(file);
            } else if (status.includes('A') || status === '??') {
                files.added.push(file);
            } else if (status.includes('D')) {
                files.deleted.push(file);
            }
        });

        return files;
    } catch (error) {
        console.error(chalk.red('获取文件状态时出错:', error.message));
        return { modified: [], added: [], deleted: [] };
    }
}

function formatSize(size) {
    if (size < 1024) {
        return `${size}B`;
    } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(1)}KB`;
    } else {
        return `${(size / 1024 / 1024).toFixed(1)}MB`;
    }
}

function getFileSize(filepath) {
    try {
        const stats = fs.statSync(filepath);
        return stats.size;
    } catch (error) {
        return 0;
    }
}

function showChanges(diffCommand, title) {
    console.log(`\n${chalk.blue('=== ' + title + ' ===')}`)
    
    const files = getChangedFiles(diffCommand);
    let totalSize = 0;

    // 显示修改的文件
    if (files.modified.length > 0) {
        console.log(chalk.yellow('\n修改的文件:'));
        files.modified.forEach(file => {
            const size = getFileSize(file);
            totalSize += size;
            console.log(`${file}\t${chalk.green(formatSize(size))}`);
        });
    }

    // 显示新增的文件
    if (files.added.length > 0) {
        console.log(chalk.yellow('\n新增的文件:'));
        files.added.forEach(file => {
            const size = getFileSize(file);
            totalSize += size;
            console.log(`${file}\t${chalk.green(formatSize(size))}`);
        });
    }

    // 显示删除的文件
    if (files.deleted.length > 0) {
        console.log(chalk.yellow('\n删除的文件:'));
        files.deleted.forEach(file => {
            console.log(`${file}\t${chalk.red('已删除')}`);
        });
    }

    if (totalSize > 0) {
        console.log(`\n${chalk.yellow('总计大小:')} ${chalk.green(formatSize(totalSize))}`);
    }

    if (files.modified.length === 0 && files.added.length === 0 && files.deleted.length === 0) {
        console.log(chalk.yellow('没有文件变更'));
    }
}

// 显示所有更改
showChanges('status', '文件变更统计');