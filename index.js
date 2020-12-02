const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try {
        const buildSystem = core.getInput('build-system');
        console.log(`Jtest tool is going to use ${buildSystem}!`);
        if (buildSystem == 'maven') {
            await exec.exec('mvn jtest:jtest');
        } else if (buildSystem == 'gradle') {
            await exec.exec('gradlew clean assemble jtest');
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();