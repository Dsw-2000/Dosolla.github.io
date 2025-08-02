# Online Reports 发布指南

## 完整的写文章流程

### 1. 准备资源文件

**图片文件：**
- 将图片文件放入 `static/image/` 目录
- 支持的格式：JPG, PNG, SVG, GIF
- 建议使用有意义的文件名，如 `aviation-engine-diagram.jpg`

**音频文件：**
- 将音频文件放入 `static/audio/` 目录
- 支持的格式：MP3, WAV, OGG
- 建议使用有意义的文件名，如 `engine-startup-sequence.wav`

### 2. 创建文章文件

在 `content/online_reports/` 目录下创建新的 `.md` 文件：

```markdown
+++
title = "你的文章标题"
description = "文章简短描述"
date = 2025-01-27
draft = false
tags = ["标签1", "标签2", "标签3"]
categories = ["分类"]
readingTime = "5分钟"
+++

# 文章标题

## 文章内容

### 插入图片
![图片描述](/image/你的图片文件名.jpg)

### 插入音频
<audio controls style="width: 100%; margin: 1rem 0;">
  <source src="/audio/你的音频文件名.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>

## 更多内容...
```

### 3. 文章格式说明

**Front Matter（文件头部）：**
- `title`: 文章标题
- `description`: 文章描述（显示在卡片上）
- `date`: 发布日期
- `draft`: 是否为草稿（false = 发布）
- `tags`: 标签数组
- `categories`: 分类数组
- `readingTime`: 预计阅读时间

**Markdown 语法：**
- `#` 一级标题
- `##` 二级标题
- `###` 三级标题
- `**粗体**` 和 `*斜体*`
- `[链接文字](URL)` 链接
- `![图片描述](/image/文件名)` 图片
- `<audio>` 标签用于音频播放器

### 4. 构建和预览

```bash
# 在 hugo 目录下运行
hugo --minify
```