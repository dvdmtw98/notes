document.addEventListener("nav", () => {
    const targetElement = '#quartz-body'

    // Animation to apply to elements
    function animateElement(target: HTMLElement, delay: number): void {
        target.animate(
            [
                { opacity: 0, transform: 'translateY(20px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ],
            {
                duration: 1000,
                easing: 'ease',
                delay: delay * 1000,
                iterations: 1,
                fill: 'backwards'
            }
        ).onfinish = () => {
            target.style.opacity = '1';
        };
    }

    function applyStaggeredAnimation(element: HTMLElement): void {
        const rows = element.children;

        // Iterate through rows
        Array.from(rows).forEach((row, i) => {
            if (row instanceof HTMLElement) {
                if (row.children.length !== 0) {
                    const columns = row.children;

                    Array.from(columns).forEach((col, j) => {
                        if (col instanceof HTMLElement) {
                            const delay = 0.05 * (j + 1) + 0.2 * (i + 1);
                            animateElement(col, delay);
                        }
                    });
                }
            }
        });
    }

    // Callback function for the MutationObserver
    const handleContentChange: MutationCallback = (
        mutations: MutationRecord[],
        observer: MutationObserver
    ): void => {
        const contentContainer = document.querySelector(targetElement) as HTMLElement;
        applyStaggeredAnimation(contentContainer);
    };

    const observer = new MutationObserver(handleContentChange);

    // Select the dynamic content container and start observing it
    const contentContainer = document.querySelector(targetElement) as HTMLElement;
    if (contentContainer) {
        observer.observe(contentContainer, { characterData: true, childList: true, subtree: false });
        // Required for the animation to work on the 404 page
        applyStaggeredAnimation(contentContainer);
    }
})
