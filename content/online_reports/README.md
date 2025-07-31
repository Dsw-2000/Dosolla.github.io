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

### 5. 测试检查清单

- [ ] 文章在 Online Reports 列表中显示
- [ ] 点击文章可以进入详情页
- [ ] 图片正常显示
- [ ] 音频播放器正常工作
- [ ] 排版美观，字号合适
- [ ] 响应式设计在手机上正常

### 6. 文件命名规范

**文章文件：**
- 使用英文和连字符：`aviation-sound-design.md`
- 避免空格和特殊字符

**资源文件：**
- 图片：`descriptive-name.jpg`
- 音频：`descriptive-name.wav`
- 使用有意义的描述性名称

### 7. 示例文章

参考 `test-aviation-sound-design.md` 作为完整示例，包含：
- 完整的 Front Matter
- 多级标题结构
- 图片插入
- 音频播放器
- 代码块
- 列表和引用

### 8. 故障排除

**图片不显示：**
- 检查文件路径是否正确（`/image/` 不是 `/images/`）
- 确认文件在 `static/image/` 目录中

**音频不播放：**
- 检查文件路径是否正确
- 确认音频文件格式支持
- 检查浏览器是否支持该格式

**HTML 不渲染：**
- 确认 `hugo.toml` 中已启用 `unsafe = true`
- 重新构建网站

## 快速开始

1. 复制 `test-aviation-sound-design.md` 作为模板
2. 修改 Front Matter 和内容
3. 添加你的图片和音频文件
4. 运行 `hugo --minify`
5. 访问 `http://localhost:1313` 查看效果 