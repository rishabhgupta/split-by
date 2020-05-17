const core = require('@actions/core');

function run() {
  try {
    const stringValue = core.getInput('string');
    const splitBy = core.getInput('split-by');
    const value = stringValue.split(splitBy);
    core.setOutput("value", value);
  } catch (err) {
    core.setFailed(err.message);
  }
}

run()
