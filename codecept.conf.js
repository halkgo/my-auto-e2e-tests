const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      chrome: {
        args: ['--ignore-certificate-errors', '--incognito'],
      },
    }
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
    },
  mocha: {},
  name: 'my-auto-e2e-tests',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}