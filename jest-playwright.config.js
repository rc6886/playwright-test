// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
    browsers: ["chromium", "webkit"],
    launchOptions: {
        headless: true,
        timeout: 20000,
    },
};
