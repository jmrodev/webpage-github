function showIframe(iframeId) {
    document.querySelectorAll('.iframe-pdf').forEach(iframe => {
        iframe.classList.add('hidden');
    });    
    document.getElementById(iframeId).classList.remove('hidden');
}