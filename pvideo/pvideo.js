//practical video javascript file
let allYouTubeVideos = [];
let flatYouTubeVideos = [];
let currentVideoPage = 0;
const VIDEOS_PER_PAGE = 5;

document.addEventListener('DOMContentLoaded', function() {
    loadYouTubeVideos();

    document.getElementById('prev-video-button')?.addEventListener('click', () => {
      if (currentVideoPage > 0) {
        currentVideoPage--;
        renderVideoPage(currentVideoPage);
      }
    });

    document.getElementById('next-video-button')?.addEventListener('click', () => {
      if ((currentVideoPage + 1) * VIDEOS_PER_PAGE < flatYouTubeVideos.length) {
        currentVideoPage++;
        renderVideoPage(currentVideoPage);
      }
    });
});

async function loadYouTubeVideos() {
    const youtubeContainer = document.getElementById('youtube-videos-container');
    if (!youtubeContainer) return;

    try {
        const response = await fetch('./pvideo_url/url.json');
        if (!response.ok) throw new Error('Could not load YouTube videos manifest');
        allYouTubeVideos = await response.json();

        flatYouTubeVideos = flattenVideos(allYouTubeVideos);

        if (flatYouTubeVideos.length === 0) {
            youtubeContainer.innerHTML = '<p>No YouTube videos available yet.</p>';
            return;
        }

        renderVideoPage(currentVideoPage);
        updateVideoPaginationControls();
        populateYouTubeSidebar();

    } catch (error) {
        console.error('Error loading YouTube videos manifest:', error);
        youtubeContainer.innerHTML = '<p>Failed to load YouTube videos. Please try again later.</p>';
    }
}

function flattenVideos(nodes) {
    let flat = [];
    nodes.forEach(node => {
        if (node.type === 'file') {
            flat.push(node);
        } else if (node.type === 'folder' && node.children) {
            flat = flat.concat(flattenVideos(node.children));
        }
    });
    return flat;
}

function populateYouTubeSidebar() {
    const sidebarList = document.getElementById('sidebar-video-list');
    if (!sidebarList) return;

    sidebarList.innerHTML = '';
    buildTree(allYouTubeVideos, sidebarList);
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

        } else if (node.type === 'file') {
            listItem.classList.add('file');
            const link = document.createElement('a');
            const videoId = `youtube-video-${node.id}`;
            link.href = `#${videoId}`;
            link.textContent = node.title;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const videoIndex = flatYouTubeVideos.findIndex(v => v.id === node.id);
                const targetPage = Math.floor(videoIndex / VIDEOS_PER_PAGE);

                if (targetPage !== currentVideoPage) {
                    currentVideoPage = targetPage;
                    renderVideoPage(currentVideoPage).then(() => {
                        document.getElementById(videoId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    });
                } else {
                    document.getElementById(videoId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            listItem.appendChild(link);
        }

        parentElement.appendChild(listItem);
    });
}


async function renderVideoPage(page) {
  const youtubeContainer = document.getElementById('youtube-videos-container');
  if (!youtubeContainer) return;

  youtubeContainer.innerHTML = '';

  const start = page * VIDEOS_PER_PAGE;
  const end = start + VIDEOS_PER_PAGE;
  const videosToRender = flatYouTubeVideos.slice(start, end);

  if (videosToRender.length === 0) {
    youtubeContainer.innerHTML = '<p>No more videos to display.</p>';
    return;
  }

  videosToRender.forEach(video => {
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'youtube-video-wrapper';
    videoWrapper.id = `youtube-video-${video.id}`;
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.title = video.title;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    videoWrapper.appendChild(iframe);

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = video.title;
    videoWrapper.appendChild(videoTitle);

    youtubeContainer.appendChild(videoWrapper);
  });
  updateVideoPaginationControls();
}

function updateVideoPaginationControls() {
  const prevVideoButton = document.getElementById('prev-video-button');
  const nextVideoButton = document.getElementById('next-video-button');
  const videoPageInfo = document.getElementById('video-page-info');

  if (prevVideoButton) prevVideoButton.disabled = (currentVideoPage === 0);
  if (nextVideoButton) nextVideoButton.disabled = ((currentVideoPage + 1) * VIDEOS_PER_PAGE >= flatYouTubeVideos.length);
  if (videoPageInfo) videoPageInfo.textContent = `Page ${currentVideoPage + 1} of ${Math.ceil(flatYouTubeVideos.length / VIDEOS_PER_PAGE)}`;
}
