// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
    browsers: ["chromium", "firefox"],
    launchOptions: {
        headless: true,
        timeout: 20000,
    },
};
