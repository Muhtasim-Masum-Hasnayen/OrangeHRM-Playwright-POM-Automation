const { expect } = require('@playwright/test');

class PIMPage {
  constructor(page) {
    this.page = page;
    this.pimMenu = page.getByText('PIM', { exact: true });
    this.addEmployeeLink = page.getByText('Add Employee', { exact: true });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.middleNameInput = page.getByPlaceholder('Middle Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');

    this.employeeIdInput = page
      .locator('.oxd-input-group')
      .filter({ hasText: 'Employee Id' })
      .locator('input');

    this.createLoginDetailsText =
      page.getByText('Create Login Details', { exact: true });

    this.usernameInput = page
      .locator('.oxd-input-group')
      .filter({ hasText: 'Username' })
      .locator('input');

    this.passwordInput = page
      .locator('.oxd-input-group')
      .filter({ hasText: 'Password' })
      .locator('input');

    this.confirmPasswordInput = page
      .locator('.oxd-input-group')
      .filter({ hasText: 'Confirm Password' })
      .locator('input');

    this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
    this.successToast = page.locator('.oxd-toast-content-text');
  }

  async openAddEmployee() {
    await this.pimMenu.click();
    await expect(this.addEmployeeLink).toBeVisible();
    await this.addEmployeeLink.click();
    await expect(this.firstNameInput).toBeVisible();
  }

  async fillEmployeeDetails({ firstName, middleName, lastName, employeeId }) {
    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);
    await this.employeeIdInput.fill(employeeId);
  }

  async enableCreateLoginDetails() {
    await this.createLoginDetailsText.click();
    await expect(this.usernameInput).toBeVisible();
  }

  async fillLoginDetails({ username, password }) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
  }

  async saveEmployee() {
    await this.saveButton.click();
  }

  async verifyEmployeeCreated() {
    await expect(this.successToast).toContainText('Successfully Saved');
  }
}

module.exports = { PIMPage };