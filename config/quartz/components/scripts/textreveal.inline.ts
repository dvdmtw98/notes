// Simplified TypeScript clone of baffle.js
// https://github.com/camwiegert/baffle

// Configuration Options
interface BaffleOptions {
    characters: string;
    exclude: string[];
    speed: number; /* Milliseconds */
}

// Default Configuration
const DEFAULTS: BaffleOptions = {
    characters:
        'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
    exclude: [' '],
    speed: 50
};

// Function to select random element
const randomElement = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
}

// Class to store functions required to scramble text
class Scrambler {
    private element: Element;
    private value: string;
    private bitmap: number[]; /* Used to track which characters are scrambled */
    private exclude: string[];
    private chars: string[];

    constructor(element: Element, chars: string[], exclude: string[]) {
        this.element = element;
        this.value = element.textContent || '';
        this.chars = chars;
        this.exclude = exclude;
        this.bitmap = [];
        this.reset();
    }

    // Reset bitmap to scrambled (all 1s)
    public reset(): void {
        this.bitmap = Array(this.value.length).fill(1);
    }

    // Write current scrambled/decoded text into element
    public write(): void {
        const scrambled = [...this.value]
            .map((char, index) => {
                // If in exclude list don't scramble
                if (this.exclude.includes(char)) {
                    return char;
                }
                // If bitmap has 1 in current position scramble else don't scramble
                return this.bitmap[index] ? randomElement(this.chars) : char;
            })
            .join('');

        this.element.textContent = scrambled;
    }

    // Flip random bits from scrambled to revealed
    public decay(count: number): void {
        for (let i = 0; i < count; i++) {
            const indices = this.bitmap
                .map((value, index) => (value ? index : -1))
                .filter(value => value >= 0);

            // Map: [0, -1, 2, -1, 4] (Index when scrambled else -1)
            // Filter: [0, 2, 4] (Returns scrambled index/position)

            const idx = randomElement(indices);
            this.bitmap[idx] = 0;
        }
    }

    // Get original text length
    public getLength(): number {
        return this.value.length;
    }
}

// Main class that performs scramble operations
class Baffle {
    private scramblers: Scrambler[];
    private speed: number;
    private timerId?: number; /* Used to end the interval */

    constructor(selector: string, options: Partial<BaffleOptions> = {}) {
        const opts = { ...DEFAULTS, ...options };
        this.speed = opts.speed;
        const chars = opts.characters.split('');

        // All HTML elements that match selector
        const elements = Array.from(document.querySelectorAll(selector));
        this.scramblers = elements.map(
            element => new Scrambler(element, chars, opts.exclude)
        );
    }

    // Start continuous scrambling of all elements
    public start(): this {
        this.stop();
        this.scramblers.forEach(scrambler => {
            scrambler.reset();
            scrambler.write();
        });
        this.timerId = window.setInterval(
            () => this.scramblers.forEach(scrambler => scrambler.write()),
            this.speed
        );
        return this;
    }

    // Reveal original text over duration, after optional delay
    // This functions reduces the number of characters scrambled over time
    public reveal(duration = 0, delay = 0): this {
        this.stop();
        // The number of times to run scramble animation
        const steps = Math.max(1, Math.ceil(duration / this.speed));
        // Wait for the delay period before starting
        setTimeout(() => {
            let remaining = steps;
            this.timerId = window.setInterval(() => {
                this.scramblers.forEach(scrambler => {
                    // Characters to scramble
                    const count = Math.ceil(scrambler.getLength() / steps);
                    scrambler.decay(count);
                    scrambler.write();
                });
                if (--remaining <= 0) {
                    this.stop();
                }
            }, this.speed);
        }, delay);
        return this;
    }

    // Stop any active scrambling
    private stop(): void {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
    }
}

document.addEventListener("nav", () => {
    new Baffle(".article-title", {
        characters: `-=~!@#$%^&*()_+[]{}|;':",./<>?`,
        speed: 50
    })
        .start()
        .reveal(0, 1000)
})
