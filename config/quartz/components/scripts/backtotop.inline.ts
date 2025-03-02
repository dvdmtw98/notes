document.addEventListener("nav", () => {
    const scrollToTopButton = document.getElementById("scrollToTop") as HTMLButtonElement;

    if (!scrollToTopButton) {
        console.error("Scroll-to-top button not found!");
        return;
    }

    // Threshold distance in pixels from the top for the button to appear
    const distanceFromTopToShow = 300;

    // Intersection Observer callback to toggle button visibility
    const toggleButtonVisibility = () => {
        // Check the current scroll position
        if (window.scrollY > distanceFromTopToShow) {
            scrollToTopButton.classList.add("visible");
        } else {
            scrollToTopButton.classList.remove("visible");
        }
    };

    // Attach scroll listener
    window.addEventListener("scroll", toggleButtonVisibility);

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
