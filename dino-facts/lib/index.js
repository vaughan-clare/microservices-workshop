/* eslint-disable no-use-before-define */
const dinoFacts = require('../mock_data/dino_info');

module.exports = function () {
  const seneca = this;
  seneca.add({ role: 'dinosaur', cmd: 'get-facts' }, directoryHandler);
  return {
    name: 'jurassic-park',
  };
};

function directoryHandler(msg, done) {
  const seneca = this;
  seneca.log.info('Running directory handler', msg.dinosaurName, msg);
  /*
    Check the incoming msg for the `dinosaurName` value.
    If it's not there, handle this with an error message.
  */

  const dinosaurName = msg.dinosaurName;
  if (!dinosaurName || !dinoFacts[dinosaurName]) {
    done({ ok: false, error: `Could not retrive facts with property 'dinosaurName':'${dinosaurName}'` });
    return;
  }

  /*
    Reference the dinoFacts source file for the dinosaur bio by name,
    return the dino facts via the done() callback.
  */
  done(dinoFacts[dinosaurName]);
}
