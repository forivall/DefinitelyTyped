import pretty = require('@mechanicalhuman/bunyan-pretty');
import bunyan = require('bunyan');

const log = bunyan.createLogger({
  name: 'myapp',
  stream: pretty(process.stdout, { timeStamps: false }),
  level: 'info',
});

log.info('hello world');
