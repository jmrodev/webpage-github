function loadComponent(id, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header', '../../components/header.html');
    loadComponent('aside', '../../components/aside.html');
    loadComponent('footer', '../../components/footer.html');
});
