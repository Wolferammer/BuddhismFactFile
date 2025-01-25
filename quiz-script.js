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

    // Quiz submission feedback
    const submitButton = document.getElementById("submit-quiz");
    const quizFeedback = document.getElementById("quiz-feedback");

    submitButton.addEventListener("click", () => {
        const q1Answer = document.getElementById("q1").value.trim().toLowerCase();
        const q2Answer = document.getElementById("q2").value.trim().toLowerCase();
        const q3Answer = document.getElementById("q3").value.trim().toLowerCase();

        let feedbackMessage = "Here are your results:\n";

        // Check the answers
        if (q1Answer === "siddhartha gautama") {
            feedbackMessage += "Question 1: Correct!\n";
        } else {
            feedbackMessage += "Question 1: Incorrect. The correct answer is Siddhartha Gautama.\n";
        }

        if (q2Answer === "dukkha") {
            feedbackMessage += "Question 2: Correct!\n";
        } else {
            feedbackMessage += "Question 2: Incorrect. The correct answer is Dukkha.\n";
        }

        if (q3Answer === "buddhism") {
            feedbackMessage += "Question 3: Correct!\n";
        } else {
            feedbackMessage += "Question 3: Incorrect. The correct answer is Buddhism.\n";
        }

        quizFeedback.textContent = feedbackMessage; // Display feedback
    });

    console.log("Buddhism website with enhanced aesthetics is ready!");
});
