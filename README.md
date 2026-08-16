# 🧪 OrangeHRM Playwright POM Automation

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge\&logo=playwright\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Testing](https://img.shields.io/badge/Testing-End--to--End-blue?style=for-the-badge)
![POM](https://img.shields.io/badge/Framework-Page%20Object%20Model-orange?style=for-the-badge)

> End-to-End Test Automation project for the OrangeHRM demo application using **Playwright, JavaScript, and Page Object Model (POM)**.

---

## 📌 Project Overview

This project automates a complete employee authentication and management workflow in the OrangeHRM demo application.

The main objective is to demonstrate practical **Software Quality Assurance (SQA)** skills including:

* End-to-End Test Automation
* UI Functional Testing
* Authentication Testing
* Employee Management Testing
* Page Object Model (POM)
* Test Assertions
* Dynamic Test Data Generation
* Screenshot, Video & Trace Capture
* HTML Test Reporting
* Git & GitHub Version Control

---

## 🎯 Test Objective

The automation validates that an administrator can:

1. Log in to OrangeHRM.
2. Navigate to the PIM module.
3. Add a new employee.
4. Create login credentials for the employee.
5. Save the employee successfully.
6. Log out from the administrator account.
7. Log in using the newly created employee credentials.
8. Verify successful employee login.
9. Log out from the newly created employee account.

---

## 🔄 Automated Test Flow

```text
                    ┌─────────────────┐
                    │   Admin Login   │
                    └────────┬────────┘
                             ↓
                    ┌─────────────────┐
                    │  Verify Login   │
                    └────────┬────────┘
                             ↓
                    ┌─────────────────┐
                    │      Go PIM     │
                    └────────┬────────┘
                             ↓
                    ┌─────────────────┐
                    │  Add Employee   │
                    └────────┬────────┘
                             ↓
              ┌─────────────────────────────┐
              │ Enter Employee Information  │
              └──────────────┬──────────────┘
                             ↓
              ┌─────────────────────────────┐
              │   Create Login Details     │
              └──────────────┬──────────────┘
                             ↓
                 ┌──────────────────────┐
                 │ Enter Username       │
                 │ Enter Password       │
                 │ Confirm Password     │
                 └──────────┬───────────┘
                            ↓
                    ┌───────────────┐
                    │     Save      │
                    └───────┬───────┘
                            ↓
                 ┌─────────────────────┐
                 │ Verify Employee     │
                 │ Creation            │
                 └──────────┬──────────┘
                            ↓
                    ┌───────────────┐
                    │ Admin Logout   │
                    └───────┬───────┘
                            ↓
                 ┌─────────────────────┐
                 │ New Employee Login  │
                 └──────────┬──────────┘
                            ↓
                 ┌─────────────────────┐
                 │ Verify Dashboard    │
                 └──────────┬──────────┘
                            ↓
                 ┌─────────────────────┐
                 │ Employee Logout     │
                 └─────────────────────┘
```

---

## 🧪 Test Scenario

### Scenario: Admin Creates Employee and Validates Employee Login

| #  | Test Step                           | Expected Result                |
| -- | ----------------------------------- | ------------------------------ |
| 1  | Open OrangeHRM                      | Login page is displayed        |
| 2  | Enter Admin username                | Username accepted              |
| 3  | Enter Admin password                | Password accepted              |
| 4  | Click Login                         | Admin Dashboard displayed      |
| 5  | Navigate to PIM                     | PIM module opens               |
| 6  | Click Add Employee                  | Employee form displayed        |
| 7  | Enter employee information          | Information accepted           |
| 8  | Enable Create Login Details         | Login fields displayed         |
| 9  | Enter username                      | Username accepted              |
| 10 | Enter password                      | Password accepted              |
| 11 | Confirm password                    | Password confirmation accepted |
| 12 | Save employee                       | Employee is created            |
| 13 | Logout Admin                        | Login page displayed           |
| 14 | Login with new employee credentials | Employee Dashboard displayed   |
| 15 | Verify Dashboard                    | Employee login successful      |
| 16 | Logout employee                     | Login page displayed           |

---

## 🛠️ Technology Stack

| Technology            | Purpose                            |
| --------------------- | ---------------------------------- |
| **Playwright**        | Browser automation and E2E testing |
| **JavaScript**        | Test scripting                     |
| **Node.js**           | Runtime environment                |
| **Page Object Model** | Maintainable test architecture     |
| **HTML Reporter**     | Test execution reporting           |
| **Git**               | Version control                    |
| **GitHub**            | Source code hosting                |

---

## 🏗️ Project Architecture

This project follows the **Page Object Model (POM)** approach.

```text
OrangeHRM-Playwright-POM-Automation/
│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   └── EmployeePage.js
│
├── tests/
│   └── employeeCreation.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

### Why Page Object Model?

POM separates:

**Test logic**

from

**Page interaction logic**

This makes the automation framework:

* Easier to maintain
* Easier to debug
* More reusable
* More readable
* Scalable for future test cases

---

## ⚙️ Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Visual Studio Code
* Git
* GitHub account

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/Muhtasim-Masum-Hasnayen/OrangeHRM-Playwright-POM-Automation.git
```

Navigate to the project:

```bash
cd OrangeHRM-Playwright-POM-Automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Run Tests

### Run test normally

```bash
npx playwright test
```

### Run test with visible browser

```bash
npx playwright test --headed
```

### Run a specific test

```bash
npx playwright test tests/employeeCreation.spec.js --headed
```

### Run with Playwright UI Mode

```bash
npx playwright test --ui
```

---

## 📊 Test Reports

The project is configured with the Playwright HTML Reporter.

After test execution:

```bash
npx playwright show-report
```

This opens the HTML report containing:

* Test status
* Execution time
* Test steps
* Errors
* Screenshots
* Videos
* Trace information

---

## 📸 Test Evidence

Playwright can capture test execution evidence including:

* Screenshots
* Videos
* Trace files

These are useful for:

* Debugging failed tests
* Reviewing test execution
* Demonstrating automation results
* QA documentation

Generated test artifacts should normally remain outside Git tracking.

---

## 🔐 Test Data

The automation generates a dynamic employee username using the current timestamp.

Example:

```text
masum1723456789012
```

This helps avoid duplicate usernames when the test is executed multiple times.

The employee password is generated/defined inside the test data section.

> ⚠️ This project uses the public OrangeHRM demo environment. Do not use real personal passwords or sensitive credentials.

---

## 🧩 Key Automation Features

### ✅ Admin Authentication

Automates:

```text
Admin Login → Dashboard Verification
```

### ✅ Employee Creation

Automates:

```text
PIM → Add Employee → Employee Information → Save
```

### ✅ Login Credential Creation

Automates:

```text
Create Login Details
       ↓
Username
       ↓
Password
       ↓
Confirm Password
```

### ✅ Employee Authentication

Validates that the newly created employee can log in using the generated credentials.

### ✅ Logout Validation

The test validates both:

```text
Admin Logout
```

and

```text
New Employee Logout
```

---

## 📈 Testing Concepts Demonstrated

This project demonstrates practical knowledge of:

* Functional Testing
* End-to-End Testing
* UI Automation
* Authentication Testing
* Positive Test Scenario
* Assertions
* Dynamic Test Data
* Locator Strategies
* Synchronization
* Test Reporting
* Page Object Model
* Test Evidence
* Debugging
* Git & GitHub

---

## 🚀 Future Improvements

Possible future enhancements:

* [ ] Add multiple test scenarios
* [ ] Add negative login tests
* [ ] Add invalid credential testing
* [ ] Add employee search validation
* [ ] Add employee update testing
* [ ] Add employee deletion testing
* [ ] Add API testing
* [ ] Add database validation
* [ ] Integrate CI/CD with GitHub Actions
* [ ] Add cross-browser testing
* [ ] Add test data management
* [ ] Improve reusable Page Objects

---

## 👨‍💻 Author

### Muhtasim Masum Hasnayen

**CSE Student | SQA / QA Automation Enthusiast**

GitHub:
https://github.com/Muhtasim-Masum-Hasnayen

---

## ⭐ Project Highlights

> **Admin Login → Employee Creation → Login Credential Creation → Admin Logout → New Employee Login → Dashboard Verification → Employee Logout**

This project demonstrates a structured approach to building maintainable UI automation using **Playwright and Page Object Model**.
