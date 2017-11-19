/* eslint-disable no-use-before-define */
let gatesOpen = true;

module.exports = function () {
  const seneca = this;

  // Add actions this service will be listening for here
  //TODO: add action to listen for { role: 'gates', cmd: 'control' }, and make it's handler `controlGates`

  return {
    name: 'jurassic-park',
  };
};

function controlGates(msg, done) {
  // TODO: set seneca variable

  // TODO: log some message indicating service is being hit

  // TODO: toggle `gatesOpen` boolean variable

  // return {ok: true} via done
}
