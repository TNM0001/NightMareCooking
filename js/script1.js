window.onload = function () {
    var video = document.getElementById('intro-video');
    var content = document.getElementById('content');

    // Play the video
    video.play();

    // When the video ends, hide the video and show the content
    video.addEventListener('ended', function () {
        video.style.display = 'none';
        content.style.display = 'block';
    });
};