document.addEventListener("DOMContentLoaded", () => {
    // Select elements for SVG and tagline animations
    const elementsToAnimate = [
        document.getElementById("herizon-svg"),
        document.getElementById("tagline")
    ];

    // Intersection Observer for SVG and tagline animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        if (element) observer.observe(element);
    });

    // Select ribbons
    const ribbons = document.querySelectorAll('.ribbon'); // Adjust selector as needed

    // Intersection Observer for ribbon animations
    const ribbonObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add animation class when visible
                ribbonObserver.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.1 });

    ribbons.forEach(ribbon => {
        ribbonObserver.observe(ribbon); // Start observing each ribbon
    });

    // Hamburger menu functionality
    const n = document.getElementById("hamburger-menu");
    const o = document.getElementById("overlay");
    const r = document.querySelectorAll(".overlay-content a");

    if (n && o) {
        n.addEventListener("click", () => {
            n.classList.toggle("active");
            o.classList.toggle("active");
        });

        r.forEach(link => {
            link.addEventListener("click", () => {
                n.classList.remove("active");
                o.classList.remove("active");
            });
        });
    }

    // Fade animations for other elements
    const fadeElements = document.querySelectorAll(".fade");
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

    fadeElements.forEach(element => {
        if (element) fadeObserver.observe(element);
    });

    // Function to reset scroll position on mouse leave
    const resetScrollOnMouseLeave = (selector) => {
        document.querySelectorAll(selector).forEach(card => {
            const content = card.querySelector(".content, .contentleft, .contentright");
            if (content) {
                card.addEventListener("mouseleave", () => {
                    content.scrollTop = 0;
                });
            }
        });
    };

    resetScrollOnMouseLeave(".committeecontainer .card");
    resetScrollOnMouseLeave("#speakers .card");

    // Adjust scroll margin for Chrome
    if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
        const careerSection = document.querySelector("#career");
        if (careerSection) {
            careerSection.style.scrollMarginTop = "65px";
        }
    }
});
