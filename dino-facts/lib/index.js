/* eslint-disable no-use-before-define */
const dinoFacts = require('../mock_data/dino_info');    // Data for dinosaur directory

// Setup for Seneca instance
module.exports = function () {
  const seneca = this;

  // Add actions this service will be listening for here
  seneca.add({ role: 'dinosaur', cmd: 'get-facts' }, directoryHandler);

  return {
    name: 'jurassic-park',       // Name of seneca service
  };
};

function directoryHandler(msg, done) {
  const seneca = this;
  seneca.log.info('Running directory handler', msg.dinosaurName, msg);
  const dinosaurName = msg.dinosaurName;

  /*
    TODO: Check the incoming msg for the `dinosaurName` value.
    If it's falsy, handle this with an error message.
  */
  if (!dinosaurName || !dinoFacts[dinosaurName]) {
    done({ ok: false, error: `Could not retrive facts with property 'dinosaurName':'${dinosaurName}'` });
    return;
  }

  /*
    TODO: Reference the dinoFacts source file for the dinosaur bio by name,
    return the dino facts via the done() callback.
  */
  done(dinoFacts[dinosaurName]);
}
