document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();

    // Infinite scrolling clients slider
    const clientsSlider = document.querySelector(".clients-slider");
    const sliderWrapper = document.querySelector(".clients-slider-wrapper");
    
    

    function scrollClients() {
        let scrollAmount = 0;
        function step() {
            scrollAmount += 1; // Adjust speed here
            clientsSlider.style.transform = `translateX(-${scrollAmount}px)`;
            
            if (scrollAmount >= clientsSlider.scrollWidth / 2) {
                scrollAmount = 0;
                clientsSlider.style.transform = "translateX(0)";
            }
            requestAnimationFrame(step);
        }
        step();
    }
    scrollClients();
});
    