require('module-alias/register');
require('dotenv').config();
import express from 'express';
import out from '@lib/apiout';
import morgan from 'morgan';
import routes from './routes';
import config from '@config/index';

const { PORT } = config.get();
console.log(config.get());

const app: express.Application = express();

app.use(morgan('dev'));
app.use(routes);

app.get('/health', (_, res) => {
  return out.success(res, out.SUCCESS);
});

app.listen(PORT, () => {
  console.log(`starting up server on port ${PORT}`);
});
