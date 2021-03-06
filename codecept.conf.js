const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  show: process.env.HEADLESS === 'true',
  output: './output',
  helpers: {
    Playwright: {
      browser: process.env.BROWSER || 'chromium',
      url: 'https://the-internet.herokuapp.com',
      show: false,
      restart: true,
      fullPageScreenshots: true,
      waitForTimeout: 30000,
      waitForAction: 100,
      windowSize: '1440 x 768',
      getPageTimeout: 60000,
      uniqueScreenshotNames: true,
      emulate: {
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
      },
      chromium: {
        args: ['--disable-dev-shm-usage'],
        devtools: false,
      },
    },
      MyPlaywright: {
      require: './helpers/myplaywright_helper.js',
    },
  },
  
 include: {
    I: './steps_file.js'
  },
  bootstrap: './bootstrap.js',
  teardown: null,
  hooks: [],
  plugins: {
    screenshotOnFail: {
      enabled: true,
    }
  },

  mocha: {},
  name: 'my-auto-e2e-tests',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
      allure: {
      enabled: false,
      outputDir: './allure-results',
      }
  },

  }
