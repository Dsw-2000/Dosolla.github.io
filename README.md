# DOSOLLA 个人网站使用说明

## 1. 每个文件的作用

- **index.html**  
  网站主页面，包含导航、各个频道入口、About、Reports、Publications、Researches、BOX等结构。
- **styles.css**  
  网站的所有样式文件，控制页面的配色、排版、响应式、极简风格等。
- **script.js**  
  网站的交互脚本，负责页面切换、主题切换、搜索、目录高亮、留言点赞等功能。
- **papers/**  
  存放论文PDF等附件的文件夹。
- **README.md**  
  本说明文档。

---

## 2. 如何用 Hugo 管理和发布 Reports（推荐工作流）

### 2.1 本地写作（Markdown）

1. 进入你的 Hugo 项目根目录（假设为 `myblog`）：
   ```bash
   cd ~/your-hugo-site
   ```
2. 新建一篇 report 文章：
   ```bash
   hugo new reports/2024-08-01-my-new-report.md
   ```
3. 用你喜欢的编辑器（如 VSCode、Typora、Obsidian）打开 `content/reports/2024-08-01-my-new-report.md`，用 Markdown 格式写作。
   - 支持插入图片：
     ```markdown
     ![描述](/images/xxx.jpg)
     ```
   - 支持插入音频：
     ```html
     <audio controls src="/audio/demo.mp3"></audio>
     ```
   - 支持自由排版、标题、列表、代码块等。

### 2.2 本地预览

在 Hugo 项目根目录运行：
```bash
hugo server
```
浏览器访问 [http://localhost:1313](http://localhost:1313) 预览网站。

### 2.3 自动生成静态网站

写作完成后，在 Hugo 项目根目录运行：
```bash
hugo
```
会在 `public/` 目录下生成所有静态HTML页面。

### 2.4 上传/同步到线上（以 GitHub Pages 为例）

1. 进入 `public/` 目录：
   ```bash
   cd public
   ```
2. 初始化 git（首次部署时）：
   ```bash
   git init
   git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
   ```
3. 每次更新后，上传同步：
   ```bash
   git add .
   git commit -m "update reports"
   git push -u origin main
   ```
4. 稍等片刻，访问 `https://你的用户名.github.io` 即可看到最新内容。

### 2.5 图片/音频等多媒体文件
- 建议放在 `static/images/`、`static/audio/` 等目录，引用时用 `/images/xxx.jpg`、`/audio/xxx.mp3`。
- 上传时这些文件会自动同步到 `public/` 目录。

---

## 3. 其他说明
- 你可以用同样方法管理 `researches/`、`publications/` 等栏目。
- 所有内容本地写作、自动生成、上传同步，极简高效。
- 不需要手动维护目录，Hugo会自动生成。

————————————————————
以后每次本地修改内容（比如简介、链接、文章），只需 
```
git add .
git commit -m "update" 
git push
```
线上网站就会自动同步更新。