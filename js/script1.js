window.onload = function () {
    var video = document.getElementById('intro-video');
    var content = document.getElementById('content');
    var overview = document.getElementById('overview');
    var visitorCount = document.getElementById('visitor-count');

    var simulatedVisitorCount = 12345;

    visitorCount.textContent = simulatedVisitorCount;

    video.play();

    video.addEventListener('ended', function () {
        video.style.display = 'none';
        overview.style.display = 'none';
        content.style.display = 'block';
    });
};
