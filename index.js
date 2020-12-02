const core = require('@actions/core');
try {
  const buildSystem = core.getInput('build-system');
  console.log(`Jtest tool is going to use ${buildSystem}!`);
  const time = (new Date()).toTimeString();
  console.log(time);
} catch (error) {
  core.setFailed(error.message);
}