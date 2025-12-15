const { test, expect } = require('@playwright/test');

const navLink = (page, hash) => page.locator(`#sideNav .nav-link[href="${hash}"]`);
const activeNavLink = (page) => page.locator('#sideNav .nav-link.active');

test.describe('Sidebar navigation', () => {
  test('updates the active state when switching sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#sideNav');

    await navLink(page, '#experience').click();
    await expect(activeNavLink(page)).toHaveText('Experience');

    await navLink(page, '#about').click();
    await expect(activeNavLink(page)).toHaveText('About');
  });
});
