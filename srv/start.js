const Seneca = require('seneca');
const basic = require('seneca-basic');
const entity = require('seneca-entity');
// const mongo = require('seneca-mongo-store');
const Feedback = require('../index');

/*
const opts = {
  mongo: {
    uri: 'mongodb://120.0.0.1:27017/feedback',
  },
};
*/

const Service = Seneca()
    .listen({ port: 5000, host: '127.0.0.1' })
    // .use(mongo, opts.mongo)
    .use(entity)
    .use(basic)
    .use(Feedback);

Service.ready((err) => {
  if (err) {
    return Service.log.error(err);
  }

  return Service.log.info({
    service: 'jurassic-park',
    message: 'Welcome...to Jurassic Park',
  });
});
