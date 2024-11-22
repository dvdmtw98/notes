document.addEventListener("nav", () => {
    const IGNORED_CLASSES = ['popover', 'popover-inner', 'popover-hint', 'backlinks'];

    function applyStaggeredAnimation(element: HTMLElement): void {
        const rows = element.children;

        Array.from(rows).forEach((row, i) => {
            if (row instanceof HTMLElement) {
                const columns = row.children;

                Array.from(columns).forEach((col, j) => {
                    if (col instanceof HTMLElement) {
                        const delay = 0.05 * (j + 1) + 0.2 * (i + 1);
                        
                        col.animate(
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
                            col.style.opacity = '1';
                        };
                    }
                });
            }
        });
    }

    // Helper function to check if an element or its ancestors have ignored classes
    function hasIgnoredClass(node: Node): boolean {
        if (node instanceof HTMLElement) {
            return IGNORED_CLASSES.some((className) => node.classList.contains(className));
        }
        return false;
    }

    // Callback function for the MutationObserver
    const handleContentChange: MutationCallback = (
        mutations: MutationRecord[],
        observer: MutationObserver
    ): void => {
        const contentContainer = document.querySelector('#quartz-body') as HTMLElement;

        // Filter mutations to exclude ignored classes
        const isRelevantChange = mutations.some((mutation) => {
            const { target } = mutation;

            // Check if the target or its ancestors should be ignored
            let currentNode: Node | null = target;
            while (currentNode && currentNode !== contentContainer) {
                if (hasIgnoredClass(currentNode)) {
                    return false;
                }
                currentNode = currentNode.parentNode;
            }

            return true;
        });

        if (contentContainer && isRelevantChange) {
            applyStaggeredAnimation(contentContainer);;
        }
    };

    const observer = new MutationObserver(handleContentChange);

    // Select the dynamic content container and start observing it
    const contentContainer = document.querySelector('#quartz-body') as HTMLElement;
    if (contentContainer) {
        observer.observe(contentContainer, { characterData: true, childList: true, subtree: true });
    }
})
