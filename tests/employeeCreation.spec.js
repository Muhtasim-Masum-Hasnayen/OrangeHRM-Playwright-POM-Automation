const { test, expect } = require('@playwright/test');

test('Admin creates Employee and New Employee Login Logout', async ({ page }) => {

    // ==================================================
    // TEST DATA
    // ==================================================

    const uniqueId = Date.now();

    const employeeUsername = `masum${uniqueId}`;
    const employeePassword = 'Masum@12345';
    const employeeId = String(uniqueId).slice(-6);

    console.log('================================');
    console.log('NEW EMPLOYEE USERNAME:', employeeUsername);
    console.log('NEW EMPLOYEE PASSWORD:', employeePassword);
    console.log('EMPLOYEE ID:', employeeId);
    console.log('================================');


    // ==================================================
    // 1. OPEN ORANGEHRM
    // ==================================================

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(1000);


    // ==================================================
    // 2. ADMIN LOGIN
    // ==================================================

    console.log('STEP 1: Admin Login');

    await page.locator('input[name="username"]').fill('Admin');

    await page.waitForTimeout(500);

    await page.locator('input[name="password"]').fill('admin123');

    await page.waitForTimeout(500);

    await page.locator('button[type="submit"]').click();

    await page.waitForTimeout(1000);


    // ==================================================
    // 3. VERIFY ADMIN DASHBOARD
    // ==================================================

    console.log('STEP 2: Verify Admin Dashboard');

    await expect(page).toHaveURL(/dashboard/);

    await page.waitForTimeout(1000);


    // ==================================================
    // 4. GO TO PIM
    // ==================================================

    console.log('STEP 3: Go to PIM');

    await page.getByText('PIM', { exact: true }).click();

    await page.waitForTimeout(1000);


    // ==================================================
    // 5. CLICK ADD EMPLOYEE
    // ==================================================

    console.log('STEP 4: Click Add Employee');

    await page.getByText('Add Employee', { exact: true }).click();

    await page.waitForTimeout(1000);


    // ==================================================
    // 6. ENTER EMPLOYEE INFORMATION
    // ==================================================

    console.log('STEP 5: Enter Employee Information');

    await page.getByPlaceholder('First Name').fill('Muhtasim');

    await page.waitForTimeout(500);

    await page.getByPlaceholder('Middle Name').fill('Masum');

    await page.waitForTimeout(500);

    await page.getByPlaceholder('Last Name').fill('Hasnayen');

    await page.waitForTimeout(500);


    // Employee ID
    const employeeIdInput = page
        .locator('.oxd-input-group')
        .filter({ hasText: 'Employee Id' })
        .locator('input');

    await employeeIdInput.fill(employeeId);

    await page.waitForTimeout(1000);


    // ==================================================
// 7. CREATE LOGIN DETAILS
// ==================================================

console.log('STEP 6: Enable Create Login Details');

const createLoginSwitch = page.locator('span.oxd-switch-input');

await expect(createLoginSwitch).toBeVisible();

await createLoginSwitch.click();

await page.waitForTimeout(1000);

    // ==================================================
    // 8. ENTER NEW USERNAME
    // ==================================================



    console.log('STEP 7: Enter New Employee Username');

const usernameInput = page.locator(
    'xpath=//label[normalize-space()="Username"]/following::input[1]'
);

await expect(usernameInput).toBeVisible();

await usernameInput.fill(employeeUsername);

await page.waitForTimeout(1000);


    // ==================================================
    // 9. ENTER PASSWORD
    // ==================================================

    console.log('STEP 8: Enter Password');

    console.log('STEP 8: Enter Password');

const passwordInput = page.locator(
    'xpath=//label[normalize-space()="Password"]/following::input[1]'
);

await expect(passwordInput).toBeVisible();

await passwordInput.fill(employeePassword);

await page.waitForTimeout(1000);



    // ==================================================
    // 10. CONFIRM PASSWORD
    // ==================================================

console.log('STEP 9: Enter Confirm Password');

const confirmPasswordInput = page.locator(
    'xpath=//label[normalize-space()="Confirm Password"]/following::input[1]'
);

await expect(confirmPasswordInput).toBeVisible();

await confirmPasswordInput.fill(employeePassword);

await page.waitForTimeout(1000);


    // ==================================================
    // 11. SAVE EMPLOYEE
    // ==================================================

    console.log('STEP 10: Save Employee');

    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    await page.waitForTimeout(3000);


    // ==================================================
    // 12. VERIFY EMPLOYEE CREATED
    // ==================================================
console.log('STEP 11: Verify Employee Created');

await page.waitForTimeout(3000);

await expect(page).toHaveURL(/pim/);

console.log('Employee Save operation completed successfully.');

await page.waitForTimeout(1000);

    // ==================================================
    // 13. ADMIN LOGOUT
    // ==================================================

console.log('STEP 12: Admin Logout');

await page.locator('.oxd-userdropdown-tab').click();

await page.waitForTimeout(1000);

await page.getByText('Logout', {
    exact: true
}).click();

await page.waitForTimeout(1000);

console.log('Admin successfully logged out.');


    // ==================================================
    // 14. VERIFY LOGIN PAGE
    // ==================================================

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    console.log('Admin successfully logged out.');

    await page.waitForTimeout(1000);


    // ==================================================
    // 15. NEW EMPLOYEE LOGIN
    // ==================================================

    console.log('STEP 13: Login with NEW Employee');

    console.log('Username:', employeeUsername);

    console.log('Password:', employeePassword);

    await page
        .locator('input[name="username"]')
        .fill(employeeUsername);

    await page.waitForTimeout(1000);

    await page
        .locator('input[name="password"]')
        .fill(employeePassword);

    await page.waitForTimeout(1000);


    // ==================================================
    // 16. CLICK LOGIN
    // ==================================================

    console.log('STEP 14: Click Login with NEW Employee');

    await page
        .locator('button[type="submit"]')
        .click();

    await page.waitForTimeout(3000);


    // ==================================================
    // 17. VERIFY NEW EMPLOYEE LOGIN
    // ==================================================

console.log('STEP 15: Verify NEW Employee Dashboard');

await expect(page).toHaveURL(/dashboard/);

await page.waitForTimeout(3000);

console.log('NEW EMPLOYEE LOGIN SUCCESSFUL!');


    // ==================================================
    // 18. NEW EMPLOYEE LOGOUT
    // ==================================================

console.log('STEP 16: NEW Employee Logout');

await page.locator('.oxd-userdropdown-tab').click();

await page.waitForTimeout(1000);

await page.getByText('Logout', {
    exact: true
}).click();

await page.waitForTimeout(3000);

console.log('NEW EMPLOYEE LOGOUT SUCCESSFUL!');


  // ==================================================
// 17. FINAL VERIFY
// ==================================================

console.log('STEP 17: Verify Final Login Page');

await expect(
    page.locator('input[name="username"]')
).toBeVisible();

console.log('================================');
console.log('TEST COMPLETED SUCCESSFULLY');
console.log('================================');

});