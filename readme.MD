## Coveralls

### Jest Testing
+ Create an account at [coveralls.io](https://coveralls.io).
+ In terminal `npm i jest coveralls --save-dev` plus any other packages needed.<br>
+ Set up tests, making sure all tests pass. I believe test caoverage may not be sent if any fail.<br>
+ In package.json, you can specify coverage output, including output location, and folders to collect coverage from.<br>
+ Create an NPM script for test:'NODE_ENV=test jest --coverage && cat coverage/lcov.info | coveralls'. 'NODE_ENV=test' may not be needed.<br>
+ I have not gotten coveralls to report, I receive error: `Bad response: 422 {"message":"Couldn't find a repository matching this job.","error":true}`.<br>
### TravisCI
+ I have used Travis CI in order to get the reporting done. Travis will take a github repository code push and build and test your code and send reporting.
+ Create an account at [travis-ci.com.io](https://travis-ci.com).
+ Connect to your github account and allow access to your repos. Other repos can be used with some variation.
+ Create a `.travis.yml` file, making sure to include a section for the the npm test script.
+ Make sure your github is authorized (just once the first time) before a push. Pushes before your authorization will not be built by Travis CI.
+ Travis CI will build and report.