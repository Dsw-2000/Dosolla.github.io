# GUIDE
---
.md ——> hugo转html ——> 推到git托管 ——> Netlify抓取显示
————————————————
## 文件位置：
- /content 放各种.md
- /public 是 /content 经过 `hugo` 之后转换成html用于发布的版本
- /layouts 里是所有页面的样式文件
- /static 里放 js、css 文件，以及所有发布所需的静态文件，如 pdf、audio、image 等


————————————————
## 转、改、推

hugo --minify

git add .
git commit -m "XXXXXX" 
git push 
