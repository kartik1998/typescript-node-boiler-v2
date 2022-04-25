require('module-alias/register');
import express from 'express';
import out from '@lib/apiout';
import morgan from 'morgan';
import routes from './routes';
const { appLogger, requestLogger } = require('omnia-logger');

const app: express.Application = express();
const port = process.env.PORT || 8080;

requestLogger(app, 'small-urls', { filename: './req.log' });
const logger = new appLogger('small-urls', './app.log', true);

app.use(morgan('dev'));
app.use(routes);

app.get('/health', (_, res) => {
  return out.success(res, out.SUCCESS);
});

app.listen(port, () => {
  logger.info(`starting up server on port ${port}`);
});
