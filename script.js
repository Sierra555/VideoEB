const videos = document.querySelectorAll('.video');

videos.forEach(item => {
    setUpVideo(item);
});

function setUpVideo(video) {
    const link = document.querySelector('.video__link'),
        button = document.querySelector('.video__btn'),
        id = parseMediaUrl(link);
    button.addEventListener('click', () => {
        let iframe = createIframe(id);
        
        link.remove();
        button.remove();
        video.appendChild(iframe);
    });
    link.removeAttribute('href');
    video.classList.add('video--enabled');

}

function parseMediaUrl(link) {
    let url = link.href;
    console.log(url);
    return url;
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('title', 'vimeo - player');
    iframe.setAttribute('src', id);
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay');
    iframe.classList.add('video__media');

    return iframe;
}


