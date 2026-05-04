document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    const sidebarList = document.getElementById('sidebar-blog-list');
    const blogModal = document.getElementById('blog-modal');
    const modalClose = document.getElementById('modal-close');
    const blogPostBody = document.getElementById('blog-post-body');

    let allBlogs = [];

    async function loadBlogs() {
        try {
            const response = await fetch('./manifest.json');
            allBlogs = await response.json();
            
            renderSidebar();
            renderAllPublished();
        } catch (error) {
            console.error('Failed to load blog manifest:', error);
            blogList.innerHTML = '<p>Error loading blog posts.</p>';
        }
    }

    function renderSidebar() {
        if (!sidebarList) return;
        sidebarList.innerHTML = '';
        buildTree(allBlogs, sidebarList);
    }

    function buildTree(nodes, parentElement) {
        nodes.forEach(node => {
            const listItem = document.createElement('li');

            if (node.type === 'folder') {
                listItem.classList.add('folder');
                const folderLabel = document.createElement('span');
                folderLabel.className = 'folder-label';
                folderLabel.textContent = node.name;
                listItem.appendChild(folderLabel);

                const childList = document.createElement('ul');
                childList.classList.add('nested');
                buildTree(node.children, childList);
                listItem.appendChild(childList);

                folderLabel.addEventListener('click', (e) => {
                    e.stopPropagation();
                    listItem.classList.toggle('expanded');
                    childList.classList.toggle('expanded');
                });

            } else if (node.type === 'file' && node.status === 'published') {
                listItem.classList.add('file');
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = node.title;
                link.onclick = (e) => {
                    e.preventDefault();
                    openBlogPost(node);
                };
                listItem.appendChild(link);
            }

            if (listItem.childNodes.length > 0) {
                parentElement.appendChild(listItem);
            }
        });
    }

    function renderAllPublished() {
        blogList.innerHTML = '';
        const flatPosts = flattenPosts(allBlogs).filter(p => p.status === 'published');
        
        if (flatPosts.length === 0) {
            blogList.innerHTML = '<p>No blog posts found. Stay tuned.</p>';
            return;
        }

        flatPosts.forEach(blog => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            card.innerHTML = `
                <div>
                    <div class="blog-date">${blog.date}</div>
                    <h3 class="blog-title">${blog.title}</h3>
                </div>
                <div style="font-weight: 700; color: var(--primary); text-transform: uppercase; font-size: 0.8rem;">
                    Read Blog <i class="fas fa-arrow-right"></i>
                </div>
            `;
            card.onclick = () => openBlogPost(blog);
            blogList.appendChild(card);
        });
    }

    function flattenPosts(nodes) {
        let flat = [];
        nodes.forEach(node => {
            if (node.type === 'file') {
                flat.push(node);
            } else if (node.type === 'folder' && node.children) {
                flat = flat.concat(flattenPosts(node.children));
            }
        });
        return flat;
    }

    async function openBlogPost(blog) {
        try {
            const response = await fetch(`./posts/${blog.filename}`);
            const markdown = await response.text();
            
            blogPostBody.innerHTML = marked.parse(markdown);
            blogModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            document.querySelector('.modal-body').scrollTop = 0;
        } catch (error) {
            console.error('Failed to load blog post:', error);
            alert('Failed to load post content.');
        }
    }

    if (modalClose) {
        modalClose.onclick = () => {
            blogModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    window.onclick = (event) => {
        if (event.target === blogModal) {
            blogModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    loadBlogs();
});
