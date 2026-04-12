// This is for fetching news to that sections 
document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('news-list');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    const rssUrl = 'https://feeds.feedburner.com/TheHackersNews';
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    const ITEMS_PER_PAGE = 9;
    let currentPage = 0;
    let newsItems = []; 

    async function fetchNews() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds timeout

      try {
        const response = await fetch(apiUrl, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error('News fetch network response was not ok');
        }
        
        const data = await response.json();

        if (data.status !== 'ok') {
          throw new Error(data.message || 'Failed to parse news feed');
        }

        newsItems = data.items.map(item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: item.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' '),
        }));

        newsList.innerHTML = '';
        renderPage(currentPage);

      } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            console.error('News fetch timed out:', error);
            newsList.innerHTML = '<p class="error-message">Security news fetch timed out. Please try again.</p>';
        } else {
            console.error('Failed to fetch news:', error);
            newsList.innerHTML = '<p class="error-message">Failed to load security news. Please try again later.</p>';
        }
      }
    }

    function renderPage(page) {
      newsList.innerHTML = '';

      const start = page * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const pageItems = newsItems.slice(start, end);

      if (pageItems.length === 0 && newsItems.length > 0) {
          newsList.innerHTML = '<p class="error-message">No news items found for this page.</p>';
          return;
      }

      pageItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';

        card.innerHTML = `
          <div class="news-content">
            <h3 class="news-title"><a href="${item.link}" class="news-link">${item.title}</a></h3>
            <p class="news-date">${new Date(item.pubDate).toLocaleDateString()}</p>
            <p>${item.description.slice(0, 120)}...</p>
          </div>
        `;

        newsList.appendChild(card);

        // Add 3D Tilt Effect
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--x', `${x}%`);
            card.style.setProperty('--y', `${y}%`);
            
            const rotateX = (y - 50) / 10;
            const rotateY = (x - 50) / -10;
            card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `translateY(0) rotateX(0) rotateY(0)`;
        });
      });

      document.querySelectorAll('.news-link').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const clickedItem = newsItems.find(n => n.link === e.target.href);
          if (clickedItem) openModal(clickedItem);
        });
      });

      prevButton.disabled = (page === 0);
      nextButton.disabled = (end >= newsItems.length);
      updatePaginationInfo();
    }

    function updatePaginationInfo() {
        const pageInfo = document.getElementById('news-page-info');
        if (pageInfo) {
            const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);
            pageInfo.textContent = `Page ${currentPage + 1} of ${totalPages || 1}`;
        }
    }

    function openModal(item) {
      document.getElementById('modal-title').textContent = item.title;
      document.getElementById('modal-date').textContent = new Date(item.pubDate).toLocaleString();
      document.getElementById('modal-description').textContent = item.description;
      const readMore = document.getElementById('modal-readmore');
      readMore.textContent = 'READ FULL ARTICLE';
      readMore.href = item.link;

      document.getElementById('news-modal').style.display = 'flex';
    }

    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            document.getElementById('news-modal').style.display = 'none';
        });
    }

    const newsModal = document.getElementById('news-modal');
    if (newsModal) {
        newsModal.addEventListener('click', e => {
          if (e.target.id === 'news-modal') {
            newsModal.style.display = 'none';
          }
        });
    }

    prevButton.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        renderPage(currentPage);
      }
    });

    nextButton.addEventListener('click', () => {
      if ((currentPage + 1) * ITEMS_PER_PAGE < newsItems.length) {
        currentPage++;
        renderPage(currentPage);
      }
    });

    newsList.innerHTML = '<p class="loading-message">Loading security insights...</p>';
    fetchNews();
});
