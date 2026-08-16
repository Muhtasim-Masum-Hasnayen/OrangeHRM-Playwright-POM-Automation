# OrangeHRM Playwright Assignment — POM

## Flow
Admin Login -> Dashboard -> PIM -> Add Employee -> Employee Information ->
Create Login Details -> Save -> Verify Created -> Admin Logout ->
New Employee Login -> Verify Login -> New Employee Logout.

## Setup
```bash
npm install
npx playwright install
```

## Run
```bash
npx playwright test --headed
```

## HTML Report
```bash
npx playwright show-report
```

The project uses Page Object Model (POM), unique usernames/Employee IDs,
HTML reporting, slow motion, screenshots, video and trace on failure.
