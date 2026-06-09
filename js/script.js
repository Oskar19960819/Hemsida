// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Calendly Implementation
function openCalendly() {
    Calendly.initPopupWidget({
        url: 'https://calendly.com/elfstrom-oskar/new-meeting'
    });

    return false;
};