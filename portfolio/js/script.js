document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animate-on-scroll');
    
    function animateSections() {
        const scrollPosition = window.innerHeight + window.pageYOffset;
        
        sections.forEach(section => {
            if (scrollPosition > section.offsetTop + section.clientHeight / 3) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', animateSections);
    animateSections(); // Trigger animation on page load
});
