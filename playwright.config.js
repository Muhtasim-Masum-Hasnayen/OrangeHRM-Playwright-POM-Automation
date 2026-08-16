const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',
    timeout: 180000,
    fullyParallel: false,

    workers: 1,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }]
    ],

    use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com',

        // Browser visible
        headless: false,

        // Every Playwright action will be slower
        launchOptions: {
            slowMo: 1000
        },

        screenshot: 'on',
        video: 'on',
        trace: 'on',

        actionTimeout: 15000,
        navigationTimeout: 30000
    },

    expect: {
        timeout: 15000
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ]
});


//npx playwright test --headed
//npx playwright show-report
