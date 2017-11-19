/* eslint-disable no-use-before-define */
"use strict";   //eslint-disable-line

let gatesOpen = true;

module.exports = function () {
  const seneca = this;

  // Add actions this service will be listening for here
  seneca.add({ role: 'gates', cmd: 'control' }, controlGates);
  // TODO: add action to listen for { role: 'gates', cmd: 'control', verify: true }, and make it's handler `controlGates`


  return {
    name: 'jurassic-park',
  };
};

function controlGates(msg, done) {
  const seneca = this;
  seneca.log.info('Running gate control', gatesOpen, msg);
  gatesOpen = !gatesOpen;
  done({ ok: true });
}

function controlGatesWithVerification(msg, done) {
  // TODO: set seneca variable

  // TODO: log some message indicating service is being hit

  // TODO: toggle `gatesOpen` boolean variable

  // TODO: return gate status via done
}
