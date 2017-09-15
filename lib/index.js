const extend = require('lodash/extend');
const dinoFacts = require('../mock_data/dino_info');

let gatesOpen = true;

function retrieveDinoFacts(msg, done) {
  const dinosaurName = msg.dinosaurName;
  if (!dinosaurName || !dinoFacts[dinosaurName]) {
    done({ ok: false, error: `Could not retrive facts with property 'dinosaurName':'${dinosaurName}'` });
    return;
  }
  done(extend({}, { ok: true }, dinoFacts[dinosaurName]));
}

function controlGates(msg, done) {
  done({ ok: true });
}

function controlGatesWithVerification(msg, done) {
  gatesOpen = !gatesOpen;
  const gateStatus = gatesOpen ? 'open' : 'closed';
  done({ ok: true, gateStatus });
}

module.exports = function () {
  const seneca = this;
  seneca.add({ role: 'dinosaur', cmd: 'get-facts' }, retrieveDinoFacts);
  seneca.add({ role: 'gates', cmd: 'control' }, controlGates);
  seneca.add({ role: 'gates', cmd: 'control', verify: true }, controlGatesWithVerification);

  return {
    name: 'jurassic-park',
  };
};
