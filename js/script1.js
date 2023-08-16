const introVideo = document.getElementById('intro-video');
const content = document.getElementById('content');

introVideo.addEventListener('ended', () => {
    introVideo.style.display = 'none';
    content.style.display = 'block';
});