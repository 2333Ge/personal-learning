#!/usr/bin/env node

/**
 * 检查logseq的文件是否重复（只查看指定目录）
 */
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const chalk = require("chalk");

// 获取命令行参数
const scanDir = process.argv[2];

// 检查目录是否存在
if (!fs.existsSync(scanDir)) {
  console.error(chalk.red(`错误: 目录 "${scanDir}" 不存在`));
  process.exit(1);
}

// 创建readline接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function checkDuplicateFiles(targetDir) {
  const fileGroups = new Map();

  try {
    // 递归读取所有文件
    const files = fs
      .readdirSync(targetDir)
      .map((file) => path.join(targetDir, file))
      .filter((file) => fs.statSync(file).isFile());
    console.log(chalk.blue(`开始检查目录: ${chalk.bold(targetDir)}`));

    // 按前缀和扩展名分组
    files.forEach((file) => {
      const filename = path.basename(file);
      // 跳过隐藏文件
      if (filename.startsWith(".")) return;

      const match = filename.match(/^([^_]+).*\.(.+)$/);
      if (!match) return;

      const [, prefix, ext] = match;
      const key = `${prefix}.${ext}`;

      if (!fileGroups.has(key)) {
        fileGroups.set(key, []);
      }
      fileGroups.get(key).push(file);
    });

    // 检查重复
    let hasDuplicates = false;
    for (const [key, files] of fileGroups) {
      if (files.length > 1) {
        hasDuplicates = true;
        console.log(chalk.yellow(`\n发现重复文件 (${chalk.bold(key)}):`));
        files.forEach((file) => console.log(chalk.red("  ↳ " + file)));
      }
    }

    if (hasDuplicates) {
      const answer = await askQuestion(chalk.cyan("\n是否继续？(y/n): "));
      if (answer.toLowerCase() !== "y") {
        console.log(chalk.red("用户取消操作"));
        process.exit(1);
      }
    } else {
      console.log(chalk.green("\n✓ 没有发现重复文件"));
      process.exit(0); // 明确退出程序
    }
  } catch (err) {
    console.error(chalk.red("错误:"), err);
    process.exit(1);
  }
}

// 递归获取所有文件
function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  });

  return results;
}

// Promise 包装的问题函数
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

// 运行检查
checkDuplicateFiles(scanDir);
