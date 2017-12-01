/* eslint-disable no-use-before-define */
"use strict";   //eslint-disable-line

const dinoFacts = require('../mock_data/dino_info');    // Data for dinosaur directory

// Setup for Seneca instance
module.exports = function () {
  const seneca = this;

  // Add actions this service will be listening for here
  seneca.add({ role: 'dinosaur', cmd: 'get-facts' }, directoryHandler);

  return {
    name: 'jurassic-park'       // Name of seneca service
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

  if (/* Check msg if dinosaurName is not there */) {
    done(/* Message indicating error */);
    return;
  }

  /*
    TODO: Reference the dinoFacts source file for the dinosaur bio by name,
    return the dino facts via the done() callback.
  */

  // Note: The seneca callback can take 1 or 2 variables. If it is given 1 variable, it will respond with that variable
  //  as though it has been successful (you can gracefully pass errors back from services this way). If passed 2 variables,
  //  seneca will interpret the first variable as an error (usually a serious seneca breakage) and the second as a response. We avoid
  //  this because Seneca doesn't respond gracefully when handed an error in this manner.
  done(/* Directory response */);
}
