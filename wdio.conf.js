const { join } = require('path');
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./test/e2e/specs/*.spec.js'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['disable-gpu', 'window-size=1280,800'],
            },
            'zal:recordVideo': true,
            'zal:name': 'Demo Integration Tests',
            'zal:build': 'WebDriverIO',
        },
    ],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://39.98.60.164:80',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'dot',
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
        ['timeline', { outputDir: './test-report/timeline' }],
    ],
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 60000,
    },
    services: [
        [
            'image-comparison',
            {
                baselineFolder: join(process.cwd(), './screenshots/reference/'),
                formatImageName: '{tag}-{logName}-{width}x{height}',
                screenshotPath: join(process.cwd(), './screenshots/'),
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,
            },
        ],
        [TimelineService],
        // Uncomment to run tests with Selenium Standalone, if you have JDK installed.
        ['selenium-standalone'],
    ],
};
