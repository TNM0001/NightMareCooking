window.onload = function () {
    var video = document.getElementById('intro-video');
    var content = document.getElementById('content');

    video.play();

    video.addEventListener('ended', function () {
        video.style.display = 'none';
        content.style.display = 'block';
    });
};