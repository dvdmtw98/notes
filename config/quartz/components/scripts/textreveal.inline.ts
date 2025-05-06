// -----------------------------------------------------------------------------
// Baffle.js - Class-based Text Scrambler & Reveal Utility
// Simplified ES6 + TypeScript version (start() & reveal() only, chainable)
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Options interface: defines the shape of configuration accepted by Baffle
// -----------------------------------------------------------------------------
interface BaffleOptions {
    /** Characters to use when scrambling text */
    characters: string;
    /** Characters to leave untouched (e.g., spaces) */
    exclude: string[];
    /** Interval time in milliseconds between scramble/decay steps */
    speed: number;
}

// -----------------------------------------------------------------------------
// Default options: fallback values if user does not supply overrides
// -----------------------------------------------------------------------------
const DEFAULTS: BaffleOptions = {
    // Default character set: letters + symbols
    characters:
        'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
    exclude: [' '], // Leave spaces unchanged
    speed: 50       // 50ms default interval
};

// -----------------------------------------------------------------------------
// Utility function: pick a random element from an array
// -----------------------------------------------------------------------------
function sample<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

// -----------------------------------------------------------------------------
// Scrambler class: handles scramble/decay for a single element
// -----------------------------------------------------------------------------
class Scrambler {
    private el: Element;
    private value: string;
    private bitmap: number[];
    private exclude: string[];
    private chars: string[];

    /**
     * @param el DOM element whose text will be scrambled
     * @param chars Array of scramble characters
     * @param exclude Characters to leave untouched
     */
    constructor(el: Element, chars: string[], exclude: string[]) {
        this.el = el;
        this.value = el.textContent || '';
        this.chars = chars;
        this.exclude = exclude;
        this.bitmap = [];
        this.reset();
    }

    /** Reset bitmask to all scrambled (1) */
    public reset(): void {
        this.bitmap = Array(this.value.length).fill(1);
    }

    /** Write current scrambled/decoded text into element */
    public write(): void {
        const scrambled = [...this.value]
            .map((ch, i) => {
                if (this.exclude.includes(ch)) return ch;
                return this.bitmap[i] ? sample(this.chars) : ch;
            })
            .join('');
        this.el.textContent = scrambled;
    }

    /** Flip 'count' random bits from scrambled to revealed */
    public decay(count: number): void {
        for (let i = 0; i < count; i++) {
            const indices = this.bitmap
                .map((b, i) => (b ? i : -1))
                .filter(i => i >= 0);
            const idx = sample(indices);
            this.bitmap[idx] = 0;
        }
    }

    /** Get original text length */
    public getLength(): number {
        return this.value.length;
    }
}

// -----------------------------------------------------------------------------
// Baffle class: orchestrates all scramblers and provides start/reveal API
// -----------------------------------------------------------------------------
class Baffle {
    private scramblers: Scrambler[];
    private speed: number;
    private timerId?: number;

    /**
     * @param selector CSS selector string to identify target elements
     * @param options Partial options to override defaults
     */
    constructor(selector: string, options: Partial<BaffleOptions> = {}) {
        const opts = { ...DEFAULTS, ...options };
        this.speed = opts.speed;
        const chars = opts.characters.split('');
        const elements = Array.from(document.querySelectorAll(selector));
        this.scramblers = elements.map(
            el => new Scrambler(el, chars, opts.exclude)
        );
    }

    /**
     * Start continuous scrambling of all elements
     * @returns this for chaining
     */
    public start(): this {
        this.stop();
        this.scramblers.forEach(s => {
            s.reset();
            s.write();
        });
        this.timerId = window.setInterval(
            () => this.scramblers.forEach(s => s.write()),
            this.speed
        );
        return this;
    }

    /**
     * Reveal original text over duration, after optional delay
     * @param duration total reveal time in ms
     * @param delay time before revealing starts in ms
     * @returns this for chaining
     */
    public reveal(duration = 0, delay = 0): this {
        this.stop();
        const steps = Math.max(1, Math.ceil(duration / this.speed));
        setTimeout(() => {
            let remaining = steps;
            this.timerId = window.setInterval(() => {
                this.scramblers.forEach(s => {
                    const count = Math.ceil(s.getLength() / steps);
                    s.decay(count);
                    s.write();
                });
                if (--remaining <= 0) {
                    this.stop();
                }
            }, this.speed);
        }, delay);
        return this;
    }

    /** Stop any active scrambling/reveal loop */
    private stop(): void {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
    }
}

document.addEventListener("nav", () => {
    new Baffle(".article-title", {
        characters: `-=~!@#$%^&* ()_+ []{} |; ':",./<>?`,
        speed: 50
    })
        .start()
        .reveal(800, 600)
})
