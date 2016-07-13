exports.config = {
    specs: ['stories/*.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:8100',
    framework: 'jasmine'
};