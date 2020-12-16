describe("RedLine Smoke Tests", () => {
    it("Should Login to RedLine", async () => {
        await page.goto("https://apps.gsfsgroup.hawking.dimebox.io");

        await page.click("//button[text()='Login']");

        const { REDLINE_USER, REDLINE_PASSWORD } = process.env;
        await page.fill("//input[@id='okta-signin-username']", REDLINE_USER!);
        await page.fill("//input[@id='okta-signin-password']", REDLINE_PASSWORD!);
        await page.click("//input[@id='okta-signin-submit']");

        await expect(page).toHaveSelector('//app-uxnewsroom', {
            state: "attached",
        });
    });

    it("Can Select an App from the App Switcher", async () => {
        await page.click("//mat-icon[text()='more_vert']");
        await page.click("//button/span[text()='Data Catalog']");
        await expect(page).toHaveSelector("//h1[@id='pageTitle']/span[text()='Data Catalog']", {
            state: "visible",
        });
    });

    it("Can View Datasets in DataCatalog", async () => {
        await page.click("//div[@class='mat-tab-label-content' and text()='DATASETS']");
        await expect(page).toHaveSelector("//*[@id='dataset-summary-results']", {
            state: "visible",
        });
    });

    it("Can Logout of RedLine", async () => {
        await page.click("//mat-icon[text()='arrow_drop_down']");
        await page.click("//button[text()='Logout']");
    });
});
