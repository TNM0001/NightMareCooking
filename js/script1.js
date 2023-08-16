const introVideo = document.getElementById('intro-video');
const content = document.getElementById('content');

introVideo.addEventListener('ended', () => {
    content.style.display = 'block';
    content.classList.add('matrix');
});