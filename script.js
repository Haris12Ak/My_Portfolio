function openLink(event) {
    const url = event.currentTarget.getAttribute('data-url');
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error("URL not found.");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});