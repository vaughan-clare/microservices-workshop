/* eslint-disable no-use-before-define */
const extend = require('lodash/extend');
const dinoFacts = require('../mock_data/dino_info');

module.exports = function () {
  const seneca = this;
  seneca.add({ role: 'dinosaur', cmd: 'get-facts' }, retrieveDinoFacts);
  return {
    name: 'jurassic-park',
  };
};

function retrieveDinoFacts(msg, done) {
  const seneca = this;
  seneca.log.info('DINOSAUR DIRECTORY', msg);
  const dinosaurName = msg.dinosaurName;
  if (!dinosaurName || !dinoFacts[dinosaurName]) {
    done({ ok: false, error: `Could not retrive facts with property 'dinosaurName':'${dinosaurName}'` });
    return;
  }
  done(extend({}, { ok: true }, dinoFacts[dinosaurName]));
}
