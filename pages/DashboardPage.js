const { expect } = require('@playwright/test');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.profileMenu = page.locator('.oxd-userdropdown-tab');
    this.logoutLink = page.getByText('Logout', { exact: true });
  }

  async verifyDashboard() {
    await expect(this.page).toHaveURL(/\/dashboard/);
    await expect(this.dashboardHeading).toBeVisible();
  }

  async logout() {
    await this.profileMenu.click();
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
  }
}

module.exports = { DashboardPage };