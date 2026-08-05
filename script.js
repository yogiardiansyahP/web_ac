const slider = document.querySelector(".slider");

document.querySelector(".next").onclick = () => {
    slider.scrollBy({
        left:920,
        behavior:"smooth"
    });
};

document.querySelector(".prev").onclick = () => {
    slider.scrollBy({
        left:-920,
        behavior:"smooth"
    });
};

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(section => {
    observer.observe(section);
});

const hamburger = document.querySelector(".hamburger");
const navbarContent = document.querySelector(".navbar_content");

if (hamburger && navbarContent) {
    hamburger.onclick = () => {
        navbarContent.classList.toggle("show");
    };
}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#formName").value;
        const phone = document.querySelector("#formPhone").value;
        const message = document.querySelector("#formMessage").value;

        const waNumber = "6285774272466"; 
        const text = `Halo, saya ${name} (${phone}).\n\n${message}`;

        window.open(`https://wa.me/${6285774272466}?text=${encodeURIComponent(text)}`, "_blank");

        contactForm.reset();
    });
}