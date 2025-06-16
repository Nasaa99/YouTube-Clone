// DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button-input');
const videoPreviews = document.querySelectorAll('.video-preview');

// Event Listeners
searchInput.addEventListener('keyup', handleKeyPress);
searchButton.addEventListener('click', handleSearchClick);

// Event Handlers
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    searchVideos();
  }
}

function handleSearchClick(event) {
  event.preventDefault();
  searchVideos();
}

// Search Functionality
function searchVideos() {
  const searchValue = searchInput.value.toLowerCase().trim();
  
  videoPreviews.forEach(video => {
    const title = video.querySelector('.video-title').textContent.toLowerCase();
    const isVisible = title.includes(searchValue);
    
    video.style.display = isVisible ? 'block' : 'none';
  });
}