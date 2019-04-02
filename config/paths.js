const path = require( 'path' );
const fs = require( 'fs' );

const appDirectory = fs.realpathSync( process.cwd() );
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

module.exports = {
  appDist: resolveApp( 'dist' ),
  appHtml: resolveApp( 'static/index.html' ),
  appIndex: resolveApp( 'src/index.js' ),
  appPackageJson: resolveApp( 'package.json' ),
  appSrc: resolveApp( 'src' ),
  appStatic: resolveApp( 'static' ),
  dotenv: resolveApp( '.env' )
}