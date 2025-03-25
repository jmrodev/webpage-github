// Example ES module functionality
export function greet() {
    console.log("Welcome to Instituto 166!");
}

greet();

export function onDomContentLoaded() {
    console.log("DOM fully loaded and parsed.");
}

document.addEventListener("DOMContentLoaded", onDomContentLoaded);

export function setupAnalisisLink() {
    const analisisLink = document.querySelector('a[href="./pages/analisis/analisis.html"]');
    if (analisisLink) {
        analisisLink.addEventListener("click", () => {
            console.log("Análisis de Sistemas link clicked.");
        });
    }
}




// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    listPagesDirectory();
});
