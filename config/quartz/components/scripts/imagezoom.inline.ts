document.addEventListener("nav", () => {
    let scale: number = 1;
    let isDragging: boolean = false;
    let startX: number, startY: number, initialX: number, initialY: number;
    let poppedImage: HTMLImageElement | null = null;
    let zoomSpeed = { "negative": 0.90, "positive": 1.10 };
    let zoomLimit = { "min": 0.5, "max": 4 };

    const images = document.querySelectorAll('article img') as NodeListOf<HTMLImageElement>;
    const blurBackground = document.createElement('div');
    blurBackground.className = 'blur-background';
    document.body.appendChild(blurBackground);

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (poppedImage) {
                poppedImage.remove(); // Remove previous popped image if any
            }

            poppedImage = document.createElement('img');
            poppedImage.src = image.src;
            poppedImage.className = 'popped-image';
            document.body.appendChild(poppedImage);
            blurBackground.style.display = 'block';

            scale = 1; // Reset scale
            poppedImage.style.transform = `translate(-50%, -50%) scale(${scale})`;
            resetPosition();

            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        });
    });

    blurBackground.addEventListener('click', () => {
        if (poppedImage) {
            poppedImage.remove();
            blurBackground.style.display = 'none';
            poppedImage = null;

            // Restore body scroll
            document.body.style.overflow = 'auto';
        }
    });

    // Zoom in/out
    document.body.addEventListener('wheel', (event) => {
        if (poppedImage) {
            event.preventDefault();
            const delta = Math.sign(event.deltaY);
            scale *= delta > 0 ? zoomSpeed.negative : zoomSpeed.positive;
            scale = Math.min(Math.max(zoomLimit.min, scale), zoomLimit.max); // Zoom Limit
            poppedImage.style.transform = `translate(-50%, -50%) scale(${scale})`;
        }
    }, { passive: false });

    // Dragging functionality
    document.body.addEventListener('mousedown', (event) => {
        if (poppedImage) {
            isDragging = true;
            startX = event.clientX;
            startY = event.clientY;
            initialX = poppedImage.offsetLeft;
            initialY = poppedImage.offsetTop;
            poppedImage.style.cursor = 'grabbing';
        }
    });

    window.addEventListener('mousemove', (event) => {
        if (isDragging && poppedImage) {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;
            poppedImage.style.left = `${initialX + dx}px`;
            poppedImage.style.top = `${initialY + dy}px`;
        }
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        if (poppedImage) {
            poppedImage.style.cursor = 'grab';
        }
    });

    function resetPosition() {
        if (poppedImage) {
            poppedImage.style.left = '50%';
            poppedImage.style.top = '50%';
        }
    }
});
