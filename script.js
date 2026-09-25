document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const navMenu = document.getElementById("navLinks");
    const menuButton = document.querySelector(".menu");

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu) {
                navMenu.classList.remove("active");
            }
        });
    });

    const sections = document.querySelectorAll("section[id]");

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightNavigation);
    highlightNavigation();

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (!category || filter === "all" || category.includes(filter)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            const nameInput = document.getElementById("name");
            const name = nameInput ? nameInput.value.trim() : "";

            alert(
                name
                    ? `Thank you, ${name}! Your message has been received.`
                    : "Thank you! Your message has been received."
            );

            contactForm.reset();
        });
    }

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 300) {
            document.querySelector("header")?.classList.add("scrolled");
        } else {
            document.querySelector("header")?.classList.remove("scrolled");
        }
    });
});

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name");

    if (name && name.value.trim()) {
        alert(`Thank you, ${name.value.trim()}! Your message has been received.`);
    } else {
        alert("Thank you! Your message has been received.");
    }

    event.target.reset();
}