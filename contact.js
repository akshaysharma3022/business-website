document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.classList.remove("hidden");
        setTimeout(() => {
            formMessage.classList.add("hidden");
            contactForm.reset();
        }, 3000);
    });
});
