(function () {
    const browserLanguage = navigator.language || '';
    const isEnglish = /^en(?:-|$)/i.test(browserLanguage);
    const path = window.location.pathname;
    const isEnglishPage = /\/en(?:\/|$)/.test(path);

    if (!isEnglish || isEnglishPage) {
        return;
    }

    let englishPath;
    if (path.endsWith('/index.html') || path.endsWith('/')) {
        englishPath = path.replace(/\/index\.html$/, '/').replace(/\/$/, '/en/index.html');
    } else if (path.includes('/pages/')) {
        englishPath = path.replace('/pages/', '/en/pages/');
    } else {
        englishPath = path.replace(/\/([^/]+)$/, '/en/$1');
    }

    window.location.replace(englishPath);
})();
