const path = require('path');
const fs = require('fs');

// Gets the root directory for the application
const pluginDirectory = fs.realpathSync(process.cwd());

// Resolves relative paths from the application root
const resolveApp = relativePath => path.resolve(pluginDirectory, relativePath);

module.exports = {
  appDist: resolveApp('dist'),
  appMain: resolveApp('src/main/main.ts'),
  appRenderer: resolveApp('src/renderer/index.ts'),
  appSrc: resolveApp('src'),
};
