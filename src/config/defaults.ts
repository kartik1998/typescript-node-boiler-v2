import { Defaults } from '@lib/types';

const conf: Defaults = {
  defaults: {
    PORT: 8080,
    REDIS_HOST: 'localhost',
  },
  development: {
    REDIS_HOST: 'development',
  },
  staging: {
    REDIS_HOST: 'staging',
  },
  production: {
    REDIS_HOST: 'production',
  },
};

export default conf;
