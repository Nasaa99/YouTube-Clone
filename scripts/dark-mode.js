const moonIcon = document.querySelector('.moon-icon');
const iconSelectors = [
  '.upload-icon',
  '.youtube-apps-icon',
  '.notifications-icon',
  '.search-icon',
  '.voice-search-icon',
  '.youtube-logo',
  '.hamburger-menu',
  '.originals-icon',
  '.home-icon',
  '.explore-icon',
  '.subscriptions-icon',
  '.youtube-music-icon',
  '.library-icon'
];

let isDarkMode = false;

moonIcon.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    moonIcon.src = 'inverted-icons/sun.svg';
    // Loop through all icons and change their sources
    iconSelectors.forEach(selector => {
      const icon = document.querySelector(selector);
      if (icon) {
        const originalSrc = icon.src;
        const invertedSrc = originalSrc.replace('icons/', 'inverted-icons/');
        icon.src = invertedSrc;
      }
    });
    // Special handling for voice search button
    const voiceSearchButton = document.querySelector('.voice-search-button');
    const searchButton = document.querySelector('.search-button');
    if (voiceSearchButton || searchButton) {
      voiceSearchButton.style.backgroundColor = '#272727';
      searchButton.style.backgroundColor = '#272727';
    }
  } else {
    document.body.classList.remove('dark-mode');
    moonIcon.src = 'icons/moon.svg';
    // Loop through all icons and change back to original
    iconSelectors.forEach(selector => {
      const icon = document.querySelector(selector);
      if (icon) {
        const originalSrc = icon.src;
        const normalSrc = originalSrc.replace('inverted-icons/', 'icons/');
        icon.src = normalSrc;
      }
    });
    // Reset voice search button
    const voiceSearchButton = document.querySelector('.voice-search-button');
    const searchButton = document.querySelector('.search-button');
    if (voiceSearchButton) {
      voiceSearchButton.style.backgroundColor = '';
      searchButton.style.backgroundColor = '';
    }
  }
});




