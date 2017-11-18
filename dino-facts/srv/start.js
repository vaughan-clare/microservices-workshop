const Seneca = require('seneca');

const DinoService = require('../index');

const opts = {
  seneca: {
    tag: 'dinosaur-service-directory',
  },
  // Listener connection options
  listener: {
    http: {
      pin: ['role:dinosaur'],
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT || '9000',
    },
  },
};

const Service = Seneca(opts.seneca)
    .use(DinoService)
    .listen(opts.listener.http);

Service.ready((err) => {
  if (err) {
    return Service.log.error(err);
  }

  return Service.log.info({
    service: 'jurassic-park',
    message: 'Welcome...to Jurassic Park - Dinosaur Directory',
  });
});
