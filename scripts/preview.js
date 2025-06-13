// This waits until the full HTML is loaded and 
// parsed, so we know all the .video-preview cards exist.
document.addEventListener('DOMContentLoaded', () => {
  const videoPreviews = document.querySelectorAll('.video-preview');

  videoPreviews.forEach(videoWrapper => {
    const video = videoWrapper.querySelector('.hover-preview');
    const timeLabel = videoWrapper.querySelector('.video-time');
    if (!video || !timeLabel) return;

    let countdownInterval = null;
    const originalTime = timeLabel.textContent;

    const fakeDuration = 10; // seconds of simulated preview duration
    let currentSimulated = 0;

    videoWrapper.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play();

      currentSimulated = 0;
      countdownInterval = setInterval(() => {
        currentSimulated += 0.25;

        const remaining = Math.max(fakeDuration - currentSimulated, 0);
        const minutes = Math.floor(remaining / 60);
        const seconds = Math.floor(remaining % 60).toString().padStart(2, '0');
        timeLabel.textContent = `${minutes}:${seconds}`;
      }, 250);
    });

    videoWrapper.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;

      clearInterval(countdownInterval);
      timeLabel.textContent = originalTime;
    });
  });
});


