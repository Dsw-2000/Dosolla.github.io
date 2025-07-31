// DOM 元素
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const themeToggle = document.getElementById('themeToggle');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const messageInput = document.getElementById('messageInput');
const submitMessage = document.getElementById('submitMessage');
const messagesFlow = document.querySelector('.messages-flow');

// 主题切换功能
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');
    
    if (isDark) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

// 页面切换功能
function switchPage(targetPage) {
    // 移除所有页面的active类
    pages.forEach(page => page.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    // 添加目标页面的active类
    const targetPageElement = document.getElementById(targetPage);
    if (targetPageElement) {
        targetPageElement.classList.add('active');
    }
    
    // 更新导航链接状态
    const activeLink = document.querySelector(`[href="#${targetPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// 搜索功能
function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.focus();
}

function closeSearch() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
}

// 添加新留言
function addMessage(content, isMyMessage = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-bubble ${isMyMessage ? 'my-message' : 'reader-message'}`;
    
    const now = new Date();
    const timeString = getTimeAgo(now);
    const authorTag = isMyMessage ? 'SD' : '读者';
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${content}</p>
        </div>
        <div class="message-meta">
            <span class="author-tag">${authorTag}</span>
            <span class="message-time">${timeString}</span>
            <button class="like-btn" data-likes="0">
                <i class="fas fa-heart"></i>
                <span class="like-count">0</span>
            </button>
        </div>
    `;
    
    // 将新留言插入到最前面
    messagesFlow.insertBefore(messageDiv, messagesFlow.firstChild);
    
    // 添加点赞功能
    const likeBtn = messageDiv.querySelector('.like-btn');
    likeBtn.addEventListener('click', handleLike);
}

// 处理点赞
function handleLike(event) {
    const likeBtn = event.currentTarget;
    const likeCount = likeBtn.querySelector('.like-count');
    const currentLikes = parseInt(likeBtn.dataset.likes);
    
    if (likeBtn.classList.contains('liked')) {
        // 取消点赞
        likeBtn.classList.remove('liked');
        likeBtn.dataset.likes = currentLikes - 1;
        likeCount.textContent = currentLikes - 1;
    } else {
        // 点赞
        likeBtn.classList.add('liked');
        likeBtn.dataset.likes = currentLikes + 1;
        likeCount.textContent = currentLikes + 1;
    }
}

// 获取相对时间
function getTimeAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
        return '刚刚';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes}分钟前`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours}小时前`;
    } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days}天前`;
    }
}

// 搜索功能实现
function performSearch(query) {
    // 这里可以实现实际的搜索逻辑
    console.log('搜索:', query);
    
    // 可以在这里添加搜索结果的显示逻辑
    // 比如高亮匹配的文本，或者显示搜索结果列表
}

// 事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 初始化主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);
            switchPage(targetPage);
        });
    });
    
    // 主题切换事件
    themeToggle.addEventListener('click', toggleTheme);
    
    // 搜索功能事件
    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    
    // 点击搜索框外部关闭
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            closeSearch();
        }
    });
    
    // 搜索输入事件
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
            closeSearch();
        }
    });
    
    // 留言提交事件
    submitMessage.addEventListener('click', function() {
        const content = messageInput.value.trim();
        if (content) {
            // 默认添加为读者想法
            addMessage(content, false);
            messageInput.value = '';
        }
    });
    
    // 回车提交留言
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitMessage.click();
        }
    });
    
    // 为现有的点赞按钮添加事件
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', handleLike);
    });
    
    // 文章导航功能
    document.querySelectorAll('.article-nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active类
            document.querySelectorAll('.article-nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            
            // 添加active类到当前项
            this.classList.add('active');
            
            // 获取目标文章ID
            const targetId = this.getAttribute('href').substring(1);
            const targetArticle = document.getElementById(targetId);
            
            if (targetArticle) {
                // 平滑滚动到目标文章
                targetArticle.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 添加高亮效果
                targetArticle.style.animation = 'highlight 2s ease';
                setTimeout(() => {
                    targetArticle.style.animation = '';
                }, 2000);
            }
        });
    });
    
    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K 打开搜索
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        
        // ESC 关闭搜索
        if (e.key === 'Escape') {
            closeSearch();
        }
    });
});

// 平滑滚动效果
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 响应式导航菜单（移动端）
function createMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navCenter = document.querySelector('.nav-center');
    
    // 创建汉堡菜单按钮
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // 在移动端显示汉堡菜单
    if (window.innerWidth <= 768) {
        navbar.querySelector('.nav-right').insertBefore(mobileMenuBtn, navbar.querySelector('.nav-right').firstChild);
        
        mobileMenuBtn.addEventListener('click', function() {
            navCenter.classList.toggle('mobile-active');
            this.innerHTML = navCenter.classList.contains('mobile-active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
}

// 窗口大小改变时重新创建移动菜单
window.addEventListener('resize', createMobileMenu);

// 初始化移动菜单
createMobileMenu();

// 添加一些额外的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 为博客卡片添加点击效果
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', function() {
            // 这里可以添加跳转到文章详情页的逻辑
            console.log('点击了博客卡片:', this.querySelector('.blog-title').textContent);
        });
    });
    
    // 为出版物链接添加点击效果
    document.querySelectorAll('.pub-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // 这里可以添加实际的链接跳转逻辑
            console.log('点击了链接:', this.textContent);
        });
    });
    
    // 为研究卡片添加点击效果
    document.querySelectorAll('.research-card').forEach(card => {
        card.addEventListener('click', function() {
            // 这里可以添加跳转到研究详情页的逻辑
            console.log('点击了研究卡片:', this.querySelector('h3').textContent);
        });
    });
});

// 添加页面切换动画
function animatePageTransition(targetPage) {
    const currentPage = document.querySelector('.page.active');
    const targetPageElement = document.getElementById(targetPage);
    
    if (currentPage && targetPageElement) {
        currentPage.style.animation = 'fadeOut 0.3s ease forwards';
        
        setTimeout(() => {
            switchPage(targetPage);
            targetPageElement.style.animation = 'fadeIn 0.5s ease forwards';
        }, 300);
    }
}

// 添加淡出动画的CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
    
    /* 移动端导航菜单样式 */
    @media (max-width: 768px) {
        .nav-center {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--bg-primary);
            border-top: 1px solid var(--border-light);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            display: none;
        }
        
        .nav-center.mobile-active {
            display: flex;
        }
        
        .mobile-menu-btn {
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: var(--transition);
        }
        
        .mobile-menu-btn:hover {
            color: var(--text-primary);
            background-color: var(--bg-secondary);
        }
    }
`;
document.head.appendChild(style); 

// 快速发布功能
function publishArticle() {
    const title = document.getElementById('articleTitle').value;
    const category = document.getElementById('articleCategory').value;
    const excerpt = document.getElementById('articleExcerpt').value;
    const content = document.getElementById('articleContent').value;
    const imageFile = document.getElementById('articleImage').files[0];
    const audioFile = document.getElementById('articleAudio').files[0];
    
    if (!title || !excerpt) {
        alert('请填写标题和摘要');
        return;
    }
    
    // 创建新文章
    const newArticle = createArticleElement(title, category, excerpt, content, imageFile, audioFile);
    
    // 添加到文章列表
    const reportsContent = document.querySelector('.reports-content');
    reportsContent.insertBefore(newArticle, reportsContent.firstChild);
    
    // 更新侧边栏导航
    updateSidebarNavigation(title);
    
    // 清空表单
    document.getElementById('publishForm').reset();
    
    alert('文章发布成功！');
}

function createArticleElement(title, category, excerpt, content, imageFile, audioFile) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.id = 'article-' + Date.now();
    
    const currentDate = new Date().toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    let articleHTML = `
        <div class="blog-meta">
            <span class="blog-date">${currentDate}</span>
            <span class="blog-category">${category}</span>
        </div>
        <h3 class="blog-title">${title}</h3>
        <p class="blog-excerpt">${excerpt}</p>
    `;
    
    // 如果有图片，添加图片
    if (imageFile) {
        const imageUrl = URL.createObjectURL(imageFile);
        articleHTML += `<img src="${imageUrl}" alt="${title}" style="width: 100%; max-width: 400px; border-radius: 8px; margin: 1rem 0;">`;
    }
    
    // 如果有音频，添加音频播放器
    if (audioFile) {
        const audioUrl = URL.createObjectURL(audioFile);
        articleHTML += `
            <div style="margin: 1rem 0;">
                <audio controls style="width: 100%;">
                    <source src="${audioUrl}" type="${audioFile.type}">
                    您的浏览器不支持音频播放。
                </audio>
            </div>
        `;
    }
    
    // 如果有完整内容，添加展开功能
    if (content) {
        articleHTML += `
            <div class="blog-content-full" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-light);">
                <div style="white-space: pre-wrap; line-height: 1.6;">${content}</div>
            </div>
        `;
    }
    
    articleHTML += `
        <div class="blog-footer">
            <span class="read-time">3分钟阅读</span>
            <button class="read-more" onclick="toggleContent(this)">阅读更多</button>
        </div>
    `;
    
    article.innerHTML = articleHTML;
    return article;
}

function updateSidebarNavigation(title) {
    const sidebar = document.querySelector('.article-nav');
    const currentDate = new Date().toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, '/');
    
    const navItem = document.createElement('a');
    navItem.href = '#article-' + Date.now();
    navItem.className = 'article-nav-item';
    navItem.innerHTML = `
        <span class="nav-title">${title}</span>
        <span class="nav-date">${currentDate}</span>
    `;
    
    // 添加到侧边栏顶部
    sidebar.insertBefore(navItem, sidebar.firstChild);
    
    // 添加点击事件
    navItem.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetArticle = document.getElementById(targetId);
        if (targetArticle) {
            targetArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetArticle.style.animation = 'highlight 2s ease';
            setTimeout(() => { targetArticle.style.animation = ''; }, 2000);
        }
    });
}

function toggleContent(button) {
    const article = button.closest('.blog-card');
    const contentFull = article.querySelector('.blog-content-full');
    
    if (contentFull) {
        if (contentFull.style.display === 'none') {
            contentFull.style.display = 'block';
            button.textContent = '收起';
        } else {
            contentFull.style.display = 'none';
            button.textContent = '阅读更多';
        }
    }
}

function previewArticle() {
    const title = document.getElementById('articleTitle').value;
    const category = document.getElementById('articleCategory').value;
    const excerpt = document.getElementById('articleExcerpt').value;
    const content = document.getElementById('articleContent').value;
    
    if (!title || !excerpt) {
        alert('请填写标题和摘要进行预览');
        return;
    }
    
    // 创建预览窗口
    const previewWindow = window.open('', '_blank', 'width=800,height=600');
    previewWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>预览: ${title}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                h1 { color: #333; }
                .meta { color: #666; margin-bottom: 20px; }
                .excerpt { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; }
                .content { white-space: pre-wrap; }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <div class="meta">分类: ${category} | 日期: ${new Date().toLocaleDateString()}</div>
            <div class="excerpt"><strong>摘要:</strong> ${excerpt}</div>
            ${content ? `<div class="content"><strong>完整内容:</strong><br>${content}</div>` : ''}
        </body>
        </html>
    `);
}

// 初始化快速发布功能
document.addEventListener('DOMContentLoaded', function() {
    const publishForm = document.getElementById('publishForm');
    const previewBtn = document.querySelector('.preview-btn');
    
    if (publishForm) {
        publishForm.addEventListener('submit', function(e) {
            e.preventDefault();
            publishArticle();
        });
    }
    
    if (previewBtn) {
        previewBtn.addEventListener('click', function() {
            previewArticle();
        });
    }
}); 