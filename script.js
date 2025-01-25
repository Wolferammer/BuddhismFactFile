// Add dynamic interactions and aesthetic effects
document.addEventListener("DOMContentLoaded", () => {
    // Header scroll effect
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Section hover effect - smoother and longer
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.05)";
            section.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });
        section.addEventListener("mouseout", () => {
            section.style.transform = "scale(1)";
            section.style.boxShadow = "none";
        });
    });

    console.log("Buddhism website with enhanced aesthetics is ready!");
});
