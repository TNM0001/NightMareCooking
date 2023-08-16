const introVideo = document.getElementById('intro-video');
const skipButton = document.getElementById('skip-button');
const content = document.getElementById('content');

introVideo.addEventListener('timeupdate', function() {
    if (introVideo.currentTime > 3) {
        skipButton.style.display = 'block';
    }
});

introVideo.addEventListener('ended', () => {
    introVideo.style.display = 'none';
    content.style.display = 'block';
    setTimeout(() => {
        content.classList.add('fade-in');
        skipButton.style.display = 'none';
    }, 100);
});

function skipIntro() {
    introVideo.pause();
    introVideo.style.display = 'none';
    skipButton.style.display = 'none';
    content.style.display = 'block';
    content.classList.add('fade-in');
}
