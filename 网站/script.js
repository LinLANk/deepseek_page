// ===== 博客文章数据 =====
const blogPosts = [
    {
        id: 1,
        title: '从零搭建 React + TypeScript 项目最佳实践',
        excerpt: '详细介绍如何使用 Vite 搭建一个生产级的 React + TypeScript 项目，包括 ESLint、Prettier、Husky 等工具的配置。',
        category: '前端开发',
        date: '2026-04-25',
        icon: 'fa-brands fa-react',
        tags: ['React', 'TypeScript', 'Vite'],
        readTime: '8 分钟'
    },
    {
        id: 2,
        title: '深入理解 JavaScript 异步编程',
        excerpt: '从回调函数到 Promise，再到 async/await，全面解析 JavaScript 异步编程的演进之路与核心原理。',
        category: 'JavaScript',
        date: '2026-04-22',
        icon: 'fa-brands fa-js',
        tags: ['JavaScript', '异步', 'Promise'],
        readTime: '12 分钟'
    },
    {
        id: 3,
        title: 'CSS Grid 布局完全指南',
        excerpt: 'CSS Grid 是现代 Web 布局的终极解决方案。本文从基础概念到高级技巧，带你彻底掌握 Grid 布局。',
        category: 'CSS',
        date: '2026-04-18',
        icon: 'fa-brands fa-css3-alt',
        tags: ['CSS', 'Grid', '布局'],
        readTime: '10 分钟'
    },
    {
        id: 4,
        title: 'Node.js 后端开发实战：构建 RESTful API',
        excerpt: '使用 Express + MongoDB 从零构建一个完整的 RESTful API 服务，涵盖路由设计、中间件、错误处理等核心内容。',
        category: '后端开发',
        date: '2026-04-14',
        icon: 'fa-brands fa-node-js',
        tags: ['Node.js', 'Express', 'MongoDB'],
        readTime: '15 分钟'
    },
    {
        id: 5,
        title: 'Git 工作流最佳实践与团队协作',
        excerpt: '分享 Git Flow、GitHub Flow 等主流工作流模式，以及代码审查、分支管理、冲突解决等团队协作技巧。',
        category: '开发工具',
        date: '2026-04-10',
        icon: 'fa-brands fa-git-alt',
        tags: ['Git', '工作流', '协作'],
        readTime: '7 分钟'
    },
    {
        id: 6,
        title: 'Python 自动化脚本：提升开发效率的 10 个技巧',
        excerpt: '用 Python 编写自动化脚本，帮你自动处理文件整理、数据抓取、定时任务等重复性工作，大幅提升开发效率。',
        category: 'Python',
        date: '2026-04-06',
        icon: 'fa-brands fa-python',
        tags: ['Python', '自动化', '效率'],
        readTime: '9 分钟'
    }
];

// ===== 分类数据 =====
const categories = [
    {
        name: '前端开发',
        icon: 'fa-brands fa-react',
        description: 'React、Vue 等前端框架与工具',
        count: 8
    },
    {
        name: 'JavaScript',
        icon: 'fa-brands fa-js',
        description: 'JS/TS 语言特性与编程技巧',
        count: 12
    },
    {
        name: 'CSS',
        icon: 'fa-brands fa-css3-alt',
        description: '样式布局与视觉设计',
        count: 6
    },
    {
        name: '后端开发',
        icon: 'fa-brands fa-node-js',
        description: 'Node.js、Python 等服务端技术',
        count: 10
    },
    {
        name: '开发工具',
        icon: 'fa-solid fa-tools',
        description: 'Git、Docker 等效率工具',
        count: 7
    },
    {
        name: 'Python',
        icon: 'fa-brands fa-python',
        description: 'Python 编程与自动化',
        count: 5
    }
];

// ===== 渲染文章卡片 =====
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogGrid.innerHTML = blogPosts.map(post => `
        <article class="blog-card">
            <div class="blog-card-image">
                <i class="${post.icon}"></i>
            </div>
            <div class="blog-card-body">
                <div class="blog-card-meta">
                    <span class="category">${post.category}</span>
                    <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-card-footer">
                    <a href="#" class="read-more">
                        阅读全文 <i class="fas fa-arrow-right"></i>
                    </a>
                    <div class="tags">
                        ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

// ===== 渲染分类卡片 =====
function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = categories.map(cat => `
        <div class="category-card">
            <i class="${cat.icon}"></i>
            <h3>${cat.name}</h3>
            <p>${cat.description}</p>
            <span class="count">${cat.count} 篇文章</span>
        </div>
    `).join('');
}

// ===== 导航栏滚动效果 =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 26, 0.85)';
        }

        lastScroll = currentScroll;
    });
}

// ===== 导航链接高亮 =====
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== 回到顶部按钮 =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== 移动端菜单切换 =====
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // 点击导航链接后关闭菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// ===== 文章卡片点击跳转 =====
function initBlogCardClick() {
    document.querySelectorAll('.blog-card').forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // 如果点击的是阅读全文链接，不阻止默认行为
            if (e.target.closest('.read-more')) return;
            
            const post = blogPosts[index];
            if (post) {
                alert(`📄 ${post.title}\n\n${post.excerpt}\n\n🕐 阅读时间：${post.readTime}\n📅 发布日期：${post.date}`);
            }
        });
    });
}

// ===== 分类卡片点击 =====
function initCategoryClick() {
    document.querySelectorAll('.category-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const cat = categories[index];
            if (cat) {
                // 滚动到文章区域
                document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
                // 高亮对应的分类文章
                const blogCards = document.querySelectorAll('.blog-card');
                blogCards.forEach(card => {
                    const categoryTag = card.querySelector('.category');
                    if (categoryTag && categoryTag.textContent === cat.name) {
                        card.style.borderColor = '#6c5ce7';
                        card.style.boxShadow = '0 12px 48px rgba(108, 92, 231, 0.25)';
                        setTimeout(() => {
                            card.style.borderColor = '';
                            card.style.boxShadow = '';
                        }, 2000);
                    }
                });
            }
        });
    });
}

// ===== 打字效果 =====
function initTypeEffect() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;

    const originalHTML = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let charIndex = 0;
    const chars = originalHTML;
    
    function type() {
        if (charIndex < chars.length) {
            heroTitle.innerHTML += chars[charIndex];
            charIndex++;
            setTimeout(type, 50);
        }
    }

    // 页面加载后开始打字效果
    setTimeout(type, 500);
}

// ===== 初始化所有功能 =====
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    renderCategories();
    initNavbarScroll();
    initNavHighlight();
    initBackToTop();
    initMobileMenu();
    initTypeEffect();
    
    // 等待 DOM 渲染完成后绑定卡片事件
    setTimeout(() => {
        initBlogCardClick();
        initCategoryClick();
    }, 100);
});

// ===== 控制台彩蛋 =====
console.log('%c 🚀 码农笔记 ', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #6c5ce7, #a29bfe); color: white; padding: 10px 20px; border-radius: 8px;');
console.log('%c 用代码改变世界，用文字记录成长。', 'font-size: 14px; color: #a0a0b8;');
console.log('%c 🔍 想查看源码？按 Ctrl+U 吧！', 'font-size: 12px; color: #6c6c8a;');
