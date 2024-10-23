document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            // Ensure the target ID starts with '#'
            const targetSection = document.querySelector(targetId.startsWith('#') ? targetId : `#${targetId}`);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Typewriter effect for the "I'm a" text
    const typingText = document.querySelector(".typing-text span");
    const roles = ["Front-End Developer", "Web Developer", "Web Maintainer"];
    let roleIndex = 0;
    let charIndex = 0;
    let currentRole = "";

    function type() {
        if (charIndex < roles[roleIndex].length) {
            currentRole += roles[roleIndex].charAt(charIndex);
            typingText.textContent = currentRole;
            charIndex++;
            setTimeout(type, 200); // Adjusted typing speed for clarity
        } else {
            setTimeout(erase, 2000); // Time before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            currentRole = currentRole.slice(0, -1);
            typingText.textContent = currentRole;
            charIndex--;
            setTimeout(erase, 100); // Adjusted erasing speed for clarity
        } else {
            roleIndex = (roleIndex + 1) % roles.length; // Cycle through roles
            setTimeout(type, 500); // Time before typing next role
        }
    }

    // Start typing effect
    type();
});
