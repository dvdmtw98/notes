document.addEventListener("themechange", (e) => {
    const giscusTheme = e.detail.theme === 'light' ? 'light' : 'dark';

    function sendMessage(message: { setConfig: { theme: string } }) {
        const iframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement;
        if (!iframe) return;
        iframe.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app');
    }

    sendMessage({
        setConfig: {
            theme: giscusTheme
        }
    });
})

document.addEventListener("nav", () => {
    const userPreference = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const currentTheme = localStorage.getItem("theme") ?? userPreference;
    const giscusTheme = currentTheme === "light" ? "light" : "dark";

    const giscusAttributes = {
        "src": "https://giscus.app/client.js",
        "data-repo": "dvdmtw98/notes",
        "data-repo-id": "R_kgDOItAF1Q",
        "data-category": "Comments",
        "data-category-id": "DIC_kwDOItAF1c4Cc4nH",
        "data-mapping": "pathname",
        "data-strict": "1",
        "data-reactions-enabled": "1",
        "data-emit-metadata": "0",
        "data-input-position": "top",
        "data-theme": giscusTheme,
        "data-lang": "en",
        "crossorigin": "anonymous",
        "async": "",
    };

    // Dynamically create script tag
    const giscusScript = document.createElement("script");
    Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
    document.body.appendChild(giscusScript);
})
