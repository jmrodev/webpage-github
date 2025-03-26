function showIframe(iframeId) {
    // Ocultar todos los iframes
    document.querySelectorAll('.iframe-pdf').forEach(iframe => {
        iframe.classList.add('hidden');
    });
    // Mostrar el iframe seleccionado
    document.getElementById(iframeId).classList.remove('hidden');
}